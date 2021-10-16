import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Office } from 'src/app/domain/office';
import { InstructorService } from 'src/app/service/instructor.service';
import { OfficeService } from 'src/app/service/office.service';

@Component({
  selector: 'app-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.css']
})
export class OfficeListComponent implements OnInit {

  public offices: Office[] = [];
  public subOffices: Subscription = new Subscription();

  constructor(public officetservice: OfficeService,
    public instructorService: InstructorService) { }


  ngOnDestroy(): void {
    this.subOffices.unsubscribe();
  }

  ngOnInit(): void {
    this.getAll();
   
  }

  
  getAll() {
    this.subOffices = this.officetservice.getAll().subscribe(data => {
      this.offices = data;
    })
  }
}
