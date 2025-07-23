import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../Interface/employee';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../Service/employee.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-employee',
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {
  @Input() employee: Employee | null = null;
  @Input() isEditMode = false;
  @Output() employeeSaved = new EventEmitter<void>();
  @Output() formCancelled = new EventEmitter<void>();

  employeeForm: FormGroup;
  loading = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      department: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]+$/)]]
    });
  }

  ngOnInit(): void {
    if (this.employee) {
      this.employeeForm.patchValue(this.employee);
    }
  }

  get formControls() {
    return this.employeeForm.controls;
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.loading = true;
      this.error = '';
      
      const employeeData = this.employeeForm.value;

      if (this.isEditMode && this.employee) {
        this.employeeService.updateEmployee(this.employee.employeeId, employeeData).subscribe({
          next: () => {
            this.loading = false;
            this.employeeSaved.emit();
          },
          error: (error) => {
            this.error = error;
            this.loading = false;
          }
        });
      } else {
        this.employeeService.createEmployee(employeeData).subscribe({
          next: () => {
            this.loading = false;
            this.employeeSaved.emit();
          },
          error: (error) => {
            this.error = error;
            this.loading = false;
          }
        });
      }
    }
  }

  onCancel(): void {
    this.formCancelled.emit();
  }
}

