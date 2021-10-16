import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from 'src/app/domain/office';
import { Instructor } from 'src/app/domain/instructor';
import { OfficeService } from 'src/app/service/office.service';
import { InstructorService } from 'src/app/service/instructor.service';
@Component({
  selector: 'app-office-delete',
  templateUrl: './office-delete.component.html',
  styleUrls: ['./office-delete.component.css']
})
export class OfficeDeleteComponent implements OnInit {

  public instructors: Instructor[] = [];
  public id: number = 0;
  public office: Office = new Office(0, '');
  


  public showMsg: boolean = false;
  public msg: string = '';
  public type: string = '';



  constructor(public officeService: OfficeService,
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

    this.officeService.getById(this.id).subscribe(data => {
      this.office = data;
    })
  }

  public delete() {
    this.officeService.delete(this.office.InstructorID).subscribe(data => {
      this.router.navigate(['office-list']);
    }, error => {
      this.showMsg = true;
      this.msg = error;
      this.type = 'danger';
    });
  }
}
