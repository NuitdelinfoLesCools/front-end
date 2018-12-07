import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RequiredStuffComponent } from './required-stuff/required-stuff.component';
import { AuthGuard } from './helpers/auth-guard';
import { WeatherComponent } from './weather/weather.component';
import { BreakTimeComponent } from './break-time/break-time.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'required-stuff',
    component: RequiredStuffComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'weather',
    component: WeatherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'break',
    component: BreakTimeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
