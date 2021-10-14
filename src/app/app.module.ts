import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StudentService } from './service/student.service';
import { InstructorService } from './service/instructor.service';
import { DepartmentService } from './service/department.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentCreateComponent } from './component/student-create/student-create.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';
import { DepartmentCreateComponent } from './component/department-create/department-create.component';
import { DepartmentEditComponent } from './component/department-edit/department-edit.component';
import { DepartmentListComponent } from './component/department-list/department-list.component';
import { DepartmentDeleteComponent } from './component/department-delete/department-delete.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseCreateComponent } from './component/course-create/course-create.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    DepartmentCreateComponent,
    DepartmentEditComponent,
    DepartmentListComponent,
    DepartmentDeleteComponent,
    CourseListComponent,
    CourseCreateComponent,
    CourseEditComponent,
    CourseDeleteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService,
    InstructorService,
    DepartmentService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
