import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-vendorregister',
  templateUrl: './vendorregister.component.html',
  styleUrls: ['./vendorregister.component.css']
})
export class VendorregisterComponent implements OnInit {

  vendorForm!: FormGroup;
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  isSubmitted = false;
  public searchEmail = new Subject<string>();
  public searchEmailExist: any;
  isExist = false;

  get f() { return this.vendorForm.controls; }

  constructor(private formBuilder: FormBuilder, private route: Router,
    private globalService: GlobalServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.vendorForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      username: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['',[Validators.required]],
      shopename:['',[Validators.required]],
      shopaddress:['',[Validators.required]]
      
    });

    this.searchEmail.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        this.checkEmailExistence(this.searchEmailExist);
      });
  }

  onSubmit(){
   {
    if(this.vendorForm.invalid){
      return;
    }else{
      let requestData ={
        "UserType": "0",
        "FirstName": this.vendorForm.controls["firstname"].value,
        "LastName": this.vendorForm.controls["lastname"].value,
        "Email": this.vendorForm.controls["username"].value,
        "Phone": this.vendorForm.controls["phone"].value,
        "Password": this.vendorForm.controls["password"].value,
        "ShopName": this.vendorForm.controls["shopename"].value,
        "ShopAddress": this.vendorForm.controls["shopaddress"].value
      }
      var rootpath = "https://localhost:44327/api/user/register";
      console.log("rootpath:" ,"rootpath");
      let response = this.http.post(rootpath , requestData).subscribe();
      this.route.navigateByUrl("/");
      this.globalService.setCurrency("vendor");
      localStorage.setItem("Role", 'vendor');
    }
    }
    console.log(this.vendorForm?.value);
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
