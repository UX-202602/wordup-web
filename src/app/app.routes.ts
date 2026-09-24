import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CreateAccountComponent } from './pages/crear-cuenta/create-account.component';
import { InitialConfigComponent } from './pages/configuracion-inicial/initial-config.component';
import { HomeComponent } from './pages/home/home.component';
import { AlarmsComponent } from './pages/alarmas/alarms.component';

export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'crear-cuenta', component: CreateAccountComponent },
    { path: 'configuracion-inicial', component: InitialConfigComponent },
    { path: 'home', component: HomeComponent },
    { path: 'alarmas', component: AlarmsComponent },
];
