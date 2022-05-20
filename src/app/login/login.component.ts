import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  isSubmitted = false;

  get f() { return this.loginForm.controls; }

  constructor(private formBuilder: FormBuilder, private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl (['',[Validators.required, Validators.pattern(this.emailPattern)]]),
      password: new FormControl (['', [Validators.required, Validators.pattern(this.passwordPattern)]])

    });
    this.loginForm.controls["username"].setValue('');
    this.loginForm.controls["password"].setValue('');
    localStorage.clear();
  }
  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    var requestData ={
      Username: this.loginForm.controls["username"].value ,
      Password: this.loginForm.controls["password"].value
    }
    var rootpath = "https://localhost:44327/api/user/authenticate";
    this.http.post(rootpath , requestData).subscribe((response: any)=>{
      localStorage.setItem("Name", response.firstName + " " + response.lastName);
      if(response.userType == "0"){
        localStorage.setItem("Role", "vendor");
      }else{
        if(response.userType == "1"){
          localStorage.setItem("Role", "user");
        }
      }
      this.route.navigateByUrl("/home");
    });
  }
}
