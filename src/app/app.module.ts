import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { RegisterComponent } from './register/register.component';
import { RequiredStuffComponent } from './required-stuff/required-stuff.component';
import { BreakTimeComponent } from './break-time/break-time.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    RequiredStuffComponent,
    WeatherComponent,
    BreakTimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    LeafletModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
