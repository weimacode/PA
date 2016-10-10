import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'pa-app',
  templateUrl: 'app/views/home.html'
})


export class AppComponent {
    public constructor() { }


    public titulo = "Petsapp hola";
    
    


    ngOnInit() {
        //Title.setTitle("Preamble BDD");
        console.log("ngOnInit called");
        alert("hola");
    }
}
