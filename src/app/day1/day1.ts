import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-day1',
  imports: [FormsModule],
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


}
