import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  public data: any;
  private url = "localhost:44327/api/user";
  constructor(private httpClient: HttpClient) { }

  setCurrency(val:any) {
    this.data = val;
}

getCurrency() {
    return this.data;
}

  registerUser(data: any){
    return this.httpClient.post(this.url+"/register", data);
  }
}
