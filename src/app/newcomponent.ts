import { Component,Input } from '@angular/core';
import {AComponent} from './app.component'
@Component({
  selector: 'title',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      @Input() 
      title:string;
      
}
