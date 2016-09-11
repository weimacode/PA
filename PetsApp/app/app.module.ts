// Modulos
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Config router
import {routing, appRoutingProviders} from './app.routing';

// Componentes
import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile.component';

@NgModule({
    imports: [BrowserModule,
  				  HttpModule,
  				  FormsModule,
  				  routing
    ],
    declarations: [AppComponent,
  				  ProfileComponent
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule { }
