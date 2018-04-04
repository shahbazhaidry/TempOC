import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { CorePageModule } from '../pages/core/core.module';
import { ComponentsModule } from '../components/components.module';
import { Globals } from '../shared/globals';
import { PracticesProvider } from '../providers/practices/practices';
import { Api } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "ios"
    }),
    HttpClientModule,
    CorePageModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Globals,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api,
    PracticesProvider
  ]
})
export class AppModule {}
