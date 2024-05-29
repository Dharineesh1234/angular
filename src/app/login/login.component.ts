import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  myform !:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myform=this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
   
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSubmit(): void{
    if(this.myform.valid){
      console.log('form submitted',this.myform.value)
    }
  }
}
