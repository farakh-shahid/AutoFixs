import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  requestData = {};
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  isSubmitted = false;
  public searchEmail = new Subject<string>();
  public searchEmailExist: any;
  isExist = false;

  get f() { return this.registerForm.controls; }

  constructor(private formBuilder: FormBuilder, private route: Router, private globalService: GlobalServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['',[Validators.required,Validators.pattern("^((\\+92-?)|0)?[0-9]{10}$")]]

    });

    this.searchEmail.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.checkEmailExistence(this.searchEmailExist);
      });
  }

  async onSubmit() {
    if(this.registerForm.invalid)
    return;
   
      this.globalService.setCurrency("user");
      localStorage.setItem("Role", 'user');

      this.requestData = {
        "UserType": "1",
        "FirstName": this.registerForm.controls["firstname"].value,
        "LastName": this.registerForm.controls["lastname"].value,
        "Email": this.registerForm.controls["username"].value,
        "Phone": this.registerForm.controls["phone"].value,
        "Password": this.registerForm.controls["password"].value
      }

      var rootpath = "https://localhost:44327/api/user/register";
      console.log("rootpath:" ,"rootpath");
      let response = this.http.post(rootpath , this.requestData).subscribe();
        console.log("response:" ,response);
        this.route.navigateByUrl("/");
      //return response as boolean;
       //this.globalService.registerUser(this.requestData).subscribe((response:any)=>{
       // console.log(response);
      //   if(response == "true"){
      //     this.route.navigateByUrl("/home");
      //     localStorage.setItem("Role", 'user');
      //   }else{
      //     alert("Error Occurred");
      //   }
      // },
      // (error:any)=>{
      //   alert("Error Occurred");
      // });
 
  console.log(this.registerForm?.value);
  }

  public async checkEmailExistence(email: string){
    if(email != '' && email != undefined)
    {
      let response = await this.http.get('https://localhost:44327/api/user/checkEmail/'+email)
      .toPromise();
      console.log('dfasdassdaf', response);
      if (response) {
        this.isExist = true;
      }
      else {
        this.isExist = false;
      }
    }

  }

}