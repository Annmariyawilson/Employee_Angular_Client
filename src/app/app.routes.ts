import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',component:LandingComponent},
    {path:'dash',canActivate:[authGuard],component:DashboardComponent},
    {path:'empmng',canActivate:[authGuard],loadChildren:()=>import('./empmng/empmng.module').then(m=>m.EmpmngModule)}
];
