import {Routes, RouterModule} from '@angular/router';

//Componentes
import { ProfileComponent } from './components/profile.component';


const appRoutes: Routes = [
    {
        path: '', //default pathMatch: 'prefix'
        pathMatch: 'full',
        redirectTo: 'profile'
    },
    { path: 'profile', component: ProfileComponent }

];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);