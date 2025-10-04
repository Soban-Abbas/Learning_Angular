import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-day1',
  imports: [FormsModule,CommonModule],
  templateUrl: './day1.html',
  styleUrl: './day1.css'
})
export class Day1 {
title='My Angular app';
Username='Soban';
url='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D';
imgurl:string='favicon.ico';

count =0;
increasecount(){
  this.count++;
}

message='';




//ngif
showdiv:boolean=true;
show(){
  this.showdiv=!this.showdiv;
}


num1:string='';
num2:string='';


city=["ISB","KARACHI","LAHORE","PESHAWAR"];


studentarray:any[]=[
 {
    id: 101,
    name: "Alice Smith",
    age: 20,
    major: "Computer Science"
  },
  {
    id: 102,
    name: "Bob Johnson",
    age: 21,
    major: "Electrical Engineering"
  },
  {
    id: 103,
    name: "Charlie Brown",
    age: 19,
    major: "Psychology"
  },
  {
    id: 104,
    name: "Diana Prince",
    age: 22,
    major: "History"
  },
  {
    id: 105,
    name: "Eve Adams",
    age: 20,
    major: "Biology"
  }
];


divcolorchange:string='';
changecolor(){
  if(this.divcolorchange==''){
this.divcolorchange="bg-pink-900 size-60";
  }else{
    this.divcolorchange='';
  }


  
   
  
}


isdivngclass:boolean=false;
changedivcolor(){
this.isdivngclass=!this.isdivngclass;
}

}
