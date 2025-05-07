import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { routerGuard } from './guard/router.guard';

export const routes: Routes = [
    {path : 'login', component:LoginComponent},
    {path : 'home', component:HomeComponent,  canActivate: [routerGuard]},
    {path : 'dashboard', component:DashboardComponent, canActivate: [routerGuard]},
    {path : '**', redirectTo:'/login', pathMatch:'full'},
];
