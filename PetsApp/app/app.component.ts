import { Component } from '@angular/core';

@Component({
  selector: 'pa-app',
  template: '<h4>{{titulo}}</h4>'
})
export class AppComponent {
    public titulo = "Petsapp hola";
}
