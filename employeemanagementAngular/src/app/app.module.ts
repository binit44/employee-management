// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { AppComponent } from './app.component';
// import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
// import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';

// @NgModule({
//   declarations: [AppComponent, EmployeeListComponent, AddEmployeeComponent],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     ReactiveFormsModule,
//     BrowserAnimationsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatDialogModule,
//     MatTableModule,
//     MatPaginatorModule,
//     MatTableDataSource,CommonModule,
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatTableModule,
//     MatCardModule, 
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }