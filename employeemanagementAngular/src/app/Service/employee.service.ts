import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Employee } from '../Interface/employee';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = `${environment.apiUrl}/employee`;
  // private apiUrl = 'https://localhost:5001/api/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createEmployee(employee: Omit<Employee, 'employeeId'>): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee)
      .pipe(catchError(this.handleError));
  }

  updateEmployee(id: number, employee: Omit<Employee, 'employeeId'>): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee)
      .pipe(catchError(this.handleError));
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error.error || error.message;
    }
    return throwError(() => errorMessage);
  }
}