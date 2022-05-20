import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'AUTO FIX';
  Role: any;

  constructor(private globalService: GlobalServiceService) { }

  ngOnInit(): void {
    this.Role = localStorage.getItem("Role");
  }

}




