import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/domain/department';
import { Instructor } from 'src/app/domain/instructor';
import { DepartmentService } from 'src/app/service/department.service';
import { InstructorService } from 'src/app/service/instructor.service';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})

export class DepartmentDeleteComponent implements OnInit {
  public instructors: Instructor[] = [];
  public id: number = 0;
  public department: Department = new Department(0, '', 0, new Date(), 0);
  


  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';



  constructor(public departmentService: DepartmentService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public instructorService: InstructorService) { }

  ngOnInit(): void {
    this.getAllInstructors();
    this.getById();
    
  }

  getAllInstructors() {
    this.instructorService.getAll().subscribe(data => {
      this.instructors = data;
    })
  }



  getById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.departmentService.getById(this.id).subscribe(data => {
      this.department = data;
    })
  }

  public delete() {
    this.departmentService.delete(this.department.DepartmentID).subscribe(data => {
      this.router.navigate(['department-list']);
    }, error => {
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }
}
