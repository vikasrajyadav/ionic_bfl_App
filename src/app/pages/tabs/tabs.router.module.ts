import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ChatPage } from '../chat/chat.page';
import { PulsePage } from '../pulse/pulse.page';
import { LearnPage } from '../learn/learn.page';
import { AuthGuard } from '../../guard/auth.guard';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/tabs/(home:home)',
//     pathMatch: 'full',
//     canActivate: [AuthGuard],
//   },
//   {
//     path: 'tabs',
//     component: TabsPage,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         redirectTo: '/tabs/(home:home)',
//         pathMatch: 'full',
//       },
//       {
//         path: 'home',
//         outlet: 'home',
//         component: HomePage
//       },
//       {
//         path: 'about',
//         outlet: 'about',
//         component: AboutPage
//       },
//       {
//         path: 'contact',
//         outlet: 'contact',
//         component: ContactPage
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            // loadChildren: '../tab1/tab1.module#Tab1PageModule'
            component: HomePage,
          }
        ]
      },
      {
        path: 'pulse',
        children: [
          {
            path: '',
            // loadChildren: '../tab2/tab2.module#Tab2PageModule'
            component: PulsePage,
          }
        ]
      },
      {
        path: 'learn',
        children: [
          {
            path: '',
            // loadChildren: '../tab3/tab3.module#Tab3PageModule'
            component: LearnPage,
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            // loadChildren: '../tab3/tab3.module#Tab3PageModule'
            component: ChatPage,
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
