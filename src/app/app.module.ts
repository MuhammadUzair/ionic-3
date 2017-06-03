import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';


import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WorkOuts } from '../pages/work-outs/work-outs';
import { AddWorkOuts } from '../pages/add-work-outs/add-work-outs';
import { WorkOutsDetails } from '../pages/work-outs-details/work-outs-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WorkOutService } from '../Services/workOuts';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    WorkOuts,
    WorkOutsDetails,
    AddWorkOuts
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule ,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    WorkOuts,
    WorkOutsDetails,
    AddWorkOuts
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WorkOutService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
