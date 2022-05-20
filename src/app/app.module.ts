import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VendorregisterComponent } from './vendorregister/vendorregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { VendorDataComponent } from './vendor-data/vendor-data.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PostCardComponent } from './post-card/post-card.component';
import { HttpClientModule } from  '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    VendorregisterComponent,
    CustomerDataComponent,
    VendorDataComponent,
    PostDialogComponent,
    PostCardComponent,
    AllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [PostDialogComponent]
})
export class AppModule { }
