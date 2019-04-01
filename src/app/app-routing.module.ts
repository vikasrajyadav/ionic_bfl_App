import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  // { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'interests', loadChildren: './pages/interests/interests.module#InterestsPageModule' },
  { path: 'module', loadChildren: './pages/module/module.module#ModulePageModule' },
  { path: 'activity', loadChildren: './pages/activity/activity.module#ActivityPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
