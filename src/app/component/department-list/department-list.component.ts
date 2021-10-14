import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/domain/department';
import { InstructorService } from 'src/app/service/instructor.service';

import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit,OnDestroy {
 
  public departments: Department[] = [];
  public subDepartments: Subscription = new Subscription();

  constructor(public departmentservice: DepartmentService,
    public instructorService: InstructorService) { }


  ngOnDestroy(): void {
    this.subDepartments.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
   
  }

  
  getAll() {
    this.subDepartments = this.departmentservice.getAll().subscribe(data => {
      this.departments = data;
    })
  }
}
