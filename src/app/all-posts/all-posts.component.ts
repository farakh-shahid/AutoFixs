import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  @Input() data: any;
  constructor() { }
  Name : any;
  ngOnInit(): void {
   
    console.log("Single data: ", this.data);
  }

}
