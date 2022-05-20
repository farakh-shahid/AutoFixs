import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-data',
  templateUrl: './vendor-data.component.html',
  styleUrls: ['./vendor-data.component.css']
})
export class VendorDataComponent implements OnInit {
  Name: any
  constructor(private http: HttpClient) { }
  postArray:any [] = [];
  ngOnInit(): void {
    this.Name = localStorage.getItem("Name");
    var rootpath = "https://localhost:44327/api/posts/getAllPosts";
    console.log("rootpath:" ,"rootpath");
    let response = this.http.get(rootpath).subscribe((response: any)=>{
      console.log(response);
      this.postArray.push(response);
    });
  }

}
