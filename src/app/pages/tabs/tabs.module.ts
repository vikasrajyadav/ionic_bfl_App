import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { PulsePageModule } from '../pulse/pulse.module';
import { ChatPageModule } from '../chat/chat.module';
import { HomePageModule } from '../home/home.module';
import { LearnPageModule } from '../learn/learn.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ChatPageModule,
    HomePageModule,
    PulsePageModule,
    LearnPageModule,
  ],
  declarations: [TabsPage],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA ]
})
export class TabsPageModule {}
