import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  postArray: any[] = [];
  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '550px',height: '400px',
      disableClose: true,
      data: {description: "", Name: ""},
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if(result.data != "Close"){
        var rootpath = "https://localhost:44327/api/posts/createPost";
        this.postArray.push(result.data);
        this.http.post(rootpath , result.data).subscribe((response: any)=>{
       
        });
      }
    });
  }
}
