import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router,private ds:ApiService ) { }
  loginForm= this.fb.group({
    username:[''],
    password:['']
  })
  ngOnInit(): void {
  
  }
  login(){
    var username=this.loginForm.value.username
    var password=this.loginForm.value.password
      if(this.loginForm.valid){
        const result = this.ds.login(username,password)

        if(this.ds.islogin){
          alert("Successfull")
          this.router.navigateByUrl("/home")
        }
        else{
          alert("Form Invalid")
        }
      
      }else{
        alert("User Invalid")
      }
  }
}
