import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day2',
  imports: [FormsModule,JsonPipe],
  templateUrl: './day2.html',
  styleUrl: './day2.css'
})
export class Day2 {

//templete driven form 
userreg : any ={
  fullname:'',
  email:'',
  phonenumber:'',
  city:'',
  zip:'',
  isacceptTerms:false
}
details:any;
onsubmit(){
  debugger;
this.details=this.userreg;
}
}
