import {Routes, RouterModule} from '@angular/router';

//Componentes
import { ProfileComponent } from './components/profile.component';
import { PhotosComponent } from './components/photos.component';


const appRoutes: Routes = [
    
    { path: 'profile', component: ProfileComponent },
    { path: 'photos', component: PhotosComponent }

];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);