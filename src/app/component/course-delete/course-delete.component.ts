import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/service/course.service';
@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  public id: number = 0;
  public course: Course = new Course(0, '', 0);



  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';



  constructor(public courseService: CourseService,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    let param = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(param);

    this.courseService.getById(this.id).subscribe(data => {
      this.course = data;
    })
  }

  public delete() {
    this.courseService.delete(this.course.CourseID).subscribe(data => {
      this.router.navigate(['course-list']);
    }, error => {
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }
}
