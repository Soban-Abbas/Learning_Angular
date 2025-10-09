import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

  loginform:FormGroup=new FormGroup({
 email:new FormControl("",Validators.required),
 password:new FormControl("",[Validators.required,Validators.minLength(6)]),
 isrememberme:new FormControl(false)
  })

showdetails:any;
  onsubmit(){
this.showdetails=this.loginform.value
  }

  constructor(){
    this.loginform.controls['email'].disable();
    setTimeout(() => {
      
    this.loginform.controls['email'].enable();
    }, 5000);
  }


}
