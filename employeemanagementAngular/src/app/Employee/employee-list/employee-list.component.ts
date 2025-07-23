import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Interface/employee';
import { EmployeeService } from '../../Service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    AddEmployeeComponent
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  paginatedEmployees: Employee[] = [];
  loading = false;
  error = '';
  selectedEmployee: Employee | null = null;
  showForm = false;
  isEditMode = false;

  // Pagination
  currentPage = 1;
  pageSize = 10;

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading = true;
    this.error = '';

    this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.setPaginatedEmployees();
        this.loading = false;
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      }
    });
  }

  setPaginatedEmployees(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedEmployees = this.employees.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.setPaginatedEmployees();
  }

  get totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.employees.length / this.pageSize) }, (_, i) => i + 1);
  }

  showAddForm(): void {
    this.selectedEmployee = null;
    this.isEditMode = false;
    this.showForm = true;
  }

  showEditForm(employee: Employee): void {
    this.selectedEmployee = { ...employee };
    this.isEditMode = true;
    this.showForm = true;
  }

  hideForm(): void {
    this.showForm = false;
    this.selectedEmployee = null;
  }

  onEmployeeSaved(): void {
    this.hideForm();
    this.loadEmployees();
  }

  deleteEmployee(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this employee details?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'bg-red-500 text-white px-7 py-2 rounded mr-2',
        cancelButton: 'bg-gray-500 text-white px-4 py-2 rounded'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id).subscribe({
          next: () => {
            this.loadEmployees();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Employee details have been deleted.',
              timer: 2000,
              showConfirmButton: false
            });
          },
          error: (err) => {
            console.error('Error deleting employee:', err);
            Swal.fire('Error!', 'Failed to delete employee.', 'error');
          }
        });
      }
    });
  }

sortEmployees(column: string) {
  if (this.sortColumn === column) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }

  this.employees.sort((a: any, b: any) => {
    const valueA = a[column];
    const valueB = b[column];

    if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  this.setPaginatedEmployees();
}

}
