import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html', //calling component html
  styleUrls: ['./app.component.css']
})
export class AComponent implements OnInit{
   FirstName:string    //creating class variable
   LastName:string
   title="welcome"
  constructor(){}     //calling constructor method
  ngOnInit()
  {                     //to assign values through ngoninit
    this.FirstName='Abirami'
    this.LastName='Bharanidharan'
  }
    displaytitle(first,last)   //pass the input value to the method
   {
     this.title=" "
     this.title="Welcome"
     this.FirstName=first
     this.LastName=last   //to bind the values
     this.title=this.title + " " + first + " " + last
   }       
}
