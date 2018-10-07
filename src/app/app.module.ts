import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Timbre1Page } from '../pages/timbre1/timbre1';
//import { Timbre1PageModule } from '../pages/timbre1/timbre1.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Timbre1Page
    //Timbre1PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
