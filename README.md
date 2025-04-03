# online-cooking-class

TasteIt - Online Cooking Class Platform
Project Architecture

**Frontend (Angular)**
•	Modules 
o	Core Module (Authentication, Guards, Interceptors)
o	Shared Module (Common components, directives, pipes)
o	Feature Modules (Home, Courses, Profile)
•	State Management 
o	NgRx for state management
o	Actions, reducers, effects, and selectors
•	Components 
o	Login Component
o	Home Component
o	Categories Component
o	Courses Component
o	Profile Component
o	Footer Component
o	Shared UI Components (Cards, Buttons, etc.)

**Backend (.NET Core)**
•	API Controllers 
o	AuthController (Login, Register)
o	CategoriesController (CRUD operations)
o	CoursesController (CRUD operations)
o	UserProfileController (Get/Update user profile)
•	Services 
o	Auth Service (JWT generation, validation)
o	Data Services
•	Models 
o	User
o	Category
o	Course
o	UserProfile
•	Database 
o	Entity Framework Core
o	SQL Server/PostgreSQL
**Authentication Flow**
1.	User enters credentials on the Login page
2.	Credentials are validated against the database
3.	If valid, a JWT token is generated and returned
4.	The token is stored in local storage
5.	Token is included in the Authorization header for subsequent API calls
6.	Token expiration is handled with refresh tokens


**Feature Implementation**
**JWT Authentication**
•	Token-based authentication using JSON Web Tokens
•	Refresh token mechanism for extended sessions
•	Role-based authorization
**Async and Await**
•	Asynchronous data loading throughout the application
•	Promise-based HTTP requests with Angular HttpClient
•	Async/await in .NET API controllers for database operations
**State Management**
•	NgRx for frontend state management
•	Actions for user interactions
•	Reducers for state changes
•	Effects for side effects (API calls)
•	Selectors for accessing state
**CRUD Operations**
•	Create, read, update, and delete operations for: 
o	Cooking classes
o	Categories
o	User profiles

