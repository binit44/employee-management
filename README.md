# <div align="center"> Employee Management System </div>
A full-stack Employee Management System built using .NET Core (backend) and Angular (frontend).
It supports complete CRUD operations for managing employee records, including add, update, delete, and list.
The application features a responsive UI, RESTful APIs, and integration with a relational database like SQL Server.
# 📌 Overview of What Is Being Built
This project is a CRUD (Create, Read, Update, Delete) application for managing employee records.
- Full-stack architecture using:
  - .NET Core Web API for the backend.
  - Angular for the frontend (SPA).
  - SQL Server as the database.
# Technology Stack
- Backend:
  - .NET 8
  - Entity Framework Core
  - SQL Server Database
- Frontend:
  - Angular 19
  - TypeScript
  - RxJS
# Design Decisions
1. **Standalone Components:**  We used Angular's standalone components to reduce the need for NgModules and simplify the application structure.
2. **Service-based Architecture:**  The EmployeeService acts as an intermediary between the components and the API, promoting separation of concerns.
3. **Reactive Programming:** We utilized RxJS Observables for handling asynchronous operations, making the code more maintainable and easier to reason about.
4. **Routing:** Angular Router was implemented to create a single-page application experience, allowing for seamless navigation between views.
5. **REST API:** The backend follows RESTful principles, providing a clear and consistent interface for CRUD operations.
# Challenges Faced
1. **HttpClient Injection:** Initially, we faced issues with injecting the HttpClient into our services and components. This was resolved by properly providing the HttpClientModule in the AppComponent and using provideHttpClient() in the main.ts file.

2. **Standalone Components Setup:** Transitioning to standalone components required careful management of imports and providers, which was a learning curve but ultimately led to a more streamlined application structure.

3. **Cross-Origin Resource Sharing (CORS):** Ensuring proper CORS configuration on the backend to allow requests from the Angular frontend.
# Features
- Add new employee.
- Edit employee details.
- Delete employee.
- List all employees with search.
-  Page navigation with customizable items per page. 
- Columns are sortable (indicated by ↑ symbol). 
# 🗄️ ER Diagram
<img width="577" height="201" alt="image" src="https://github.com/user-attachments/assets/3db7c8e4-5f29-4bee-8f18-02e9e0da139f" />

# Installation & Run
- Clone the repository
- Backend Setup:
  - Navigate to the EmployeeManagementAPI directory
  - Run dotnet restore
  - Run dotnet run
- Frontend Setup:
  - Navigate to the employee-management-system directory
  - Run npm install
  - Run ng serve
- Before running the API server, you have to update the database configuration inside the connection string
- Update the username and password as per your local database configuration
  ````
   "ConnectionStrings": {
    "DefaultConnection": "Server=DESKTOP-1CM89F6;Database=EmployeeDb;Trusted_Connection=True;TrustServerCertificate=True;"}    
  ````

# API Module Endpoints
- GET /api/employee - Retrieve all employees 
- GET /api/employee/{id} - Retrieve a specific employee 
- POST /api/employee - Create a new employee 
- PUT /api/employee/{id} - Update an existing employee 
- DELETE /api/employee/{id} - Delete an employee
# API Root Endpoint
`https://localhost:5161/`

`http://localhost:4200/`

# 📘 Data Dictionary
- Field Name	    Data Type	             Description
id	            INT (PK)	             Unique Employee ID
name	          VARCHAR(100)	         Full Name of the employee
email         	VARCHAR(150)	         Employee's email address
department	    VARCHAR(100)	         Department name

# ⚙️ Documentation of Indexes Used
- Primary Key Index on id.
- Unique Index on email.
- Optional Search Index on name for fast lookups.

# 🔄 Code First or DB First Approach
- Approach Used: ✅ Code First.
- Why Code First?
  - Easier to maintain entity models in code.
  - Version control of schema changes via EF Core Migrations.
  - Scales better for modern development workflows.
# 🧱 Structure of the Application
- 🌐 SPA + API Binding
- This application uses a Single Page Application (SPA) approach.
- Angular is used to build the frontend.
- Angular communicates with the backend using HTTP REST APIs.
# 🎨 Frontend Structure
- Frontend Technology: Angular 19+
- Why Angular?
  - Component-based structure.
  - Clean separation of logic.
  - Integrated form validation.
  - Easy integration with REST APIs.
# Web Page or Mobile App
- ✅ Web-based Frontend.
- Built for desktop browsers and mobile-responsive using Tailwind CSS.
# Backend Dependencies
- Microsoft.EntityFrameworkCore
- omelo.EntityFrameworkCore.MySql
- Swashbuckle.AspNetCore (for Swagger)
# Frontend Dependencies
- Angular Forms
- Angular HTTP Client
- Tailwind CSS
# Employee List Page
<img width="979" height="439" alt="image" src="https://github.com/user-attachments/assets/ac28b317-a141-4b12-bc94-5373619ca312" />

# Add New Employee Form with Validations
<img width="979" height="462" alt="image" src="https://github.com/user-attachments/assets/b8fa8caa-fcaf-4fe1-b491-f9be2409fb07" />

# Edit Employee Details Form
<img width="979" height="461" alt="image" src="https://github.com/user-attachments/assets/5543395d-7ed7-4199-8d9b-484572ed7dd5" />

# Delete Employee Confirmation Dialog
<img width="979" height="463" alt="image" src="https://github.com/user-attachments/assets/c22d325c-ca84-43dc-95d2-c80ce17a6781" />

# Project Structure Overview
- Frontend
<img width="979" height="597" alt="image" src="https://github.com/user-attachments/assets/6acbcd60-e7f2-462c-91d2-0ef0149a3c94" />

- Backend
<img width="880" height="419" alt="image" src="https://github.com/user-attachments/assets/0bba5a2c-6ee5-4a9c-af20-3a81c086971c" />



#### For any feedback, report, suggestions, you can contact with anyone of the team members.
### THANK YOU


