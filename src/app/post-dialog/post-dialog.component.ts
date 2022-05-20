import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css']
})
export class PostDialogComponent implements OnInit {
  Role: any;
  dataObject: any={};
  selectedValue: any;
  select:any;
  Name: any;

  foods = [
    
    {value: 'Kia Sportage', viewValue: 'Kia Sportage'},
    {value: 'Kia Picanto', viewValue: 'Kia Picanto'},
    {value: 'Suzuki Cultus', viewValue: 'Suzuki Cultus'},
    {value: 'Suzuki Swift', viewValue: 'Suzuki Swift'},
    {value: 'Kia Sorento', viewValue: 'Kia Sorento'},
    {value: 'Kia Stonic', viewValue: 'Kia Stonic'},
    {value: 'Kia Carnival', viewValue: 'Kia Carnival'},
    {value: 'Honda City 1.2LS', viewValue: 'Honda City 1.2LS'},
    {value: 'Honda Aspire 1.5LAS', viewValue: 'Honda Aspire 1.5LAS'},
    {value: 'Honda Civic Oriel', viewValue: 'Honda Civic Oriel'},
    {value: 'Honda Accord', viewValue: 'Honda Accord'},
    {value: 'Honda CR-V', viewValue: 'Honda CR-V'},
    {value: 'Honda Civic RS', viewValue: 'Honda Civic RS'},
    {value: 'Honda BR-V CVT S', viewValue: 'Honda BR-V CVT S'},
    {value: 'Honda City 1.5LS', viewValue: 'Honda City 1.5LS'},
    {value: 'Toyota Avalon', viewValue: 'Toyota Avalon'},
    {value: 'Toyota Camry', viewValue: 'Toyota Camry'},
    {value: 'Toyota Corolla', viewValue: 'Toyota Corolla'},
    {value: 'Toyota Prius', viewValue: 'Toyota Prius'},
    {value: 'Toyota Yaris', viewValue: 'Toyota Yaris' },
    {value: 'Toyota 86', viewValue: 'Toyota 86'},
    {value: 'Suzuki Mehran', viewValue: 'Suzuki Mehran'},
    {value: 'Toyota C-HR', viewValue: 'Toyota C-HR'},
    {value: 'Toyota Sienna', viewValue: 'Toyota Sienna'},
    {value: 'Suzuki Wagon R', viewValue: 'Suzuki Wagon R'},
    {value: 'Suzuki Ravi', viewValue: ' Suzuki Ravi'},
    {value: 'Suzuki Alto', viewValue: 'Suzuki Alto'},

  ];
  Models = [
    {value: '2000', viewValue: '2000'},
    {value: '2001', viewValue: '2001'},
    {value: '2002', viewValue: '2002'},
    {value: '2003', viewValue: '2003'},
    {value: '2004', viewValue: '2004'},
    {value: '2005', viewValue: '2005'},
    {value: '2006', viewValue: '2006'},
    {value: '2007', viewValue: '2007'},
    {value: '2008', viewValue: '2008'},
    {value: '2009', viewValue: '2009'},
    {value: '2010', viewValue: '2010'},
    {value: '2011', viewValue: '2011'},
    {value: '2012', viewValue: '2012'},
    {value: '2013', viewValue: '2013'},
    {value: '2014', viewValue: '2014'},
    {value: '2015', viewValue: '2015'},
    {value: '2016', viewValue: '2016'},
    {value: '2017', viewValue: '2017'},
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
  ];


  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public datepipe: DatePipe
  ) {}

  onNoClick(): void {
   
    let date =  new Date();
    let latest_date =this.datepipe.transform(date, 'dd-MM-YYYY');
    this.dataObject.Vehicle = this.selectedValue;
    this.dataObject.Model = this.select;
    this.dataObject.ProblemDescription = this.data.description;
    this.dataObject.Name = this.Name;
    this.dataObject.Date = latest_date;
    this.dialogRef.close({ data: this.dataObject }); 
  }

  onClose(){
   
    this.dialogRef.close({ data: "Close" });
  }

  ngOnInit(): void {
    this.Role = localStorage.getItem("Role");
    this.Name = localStorage.getItem("Name");
  }

}