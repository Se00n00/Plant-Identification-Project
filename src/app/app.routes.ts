import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent},
    {path:"resources",component:ResourcesComponent},
    {path: "", redirectTo: "/home", pathMatch: "full" },
];