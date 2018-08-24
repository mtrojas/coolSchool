import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { SchoolSystemApiService } from '../services/school-system-api.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  id: any
  student: any = {}

  constructor(
    private schoolSystemService: SchoolSystemApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params.id;

        this.schoolSystemService.getStudentDetail(this.id)
          .subscribe(student => {
            this.student = student
          })
    })
  }

  handleUpdateStudent() {
    this.schoolSystemService.updateStudent(this.id, this.student)
      .subscribe(updatedStudent => {
        this.student = updatedStudent
      })
  }

  handleDeleteStudent() {
    this.schoolSystemService.deleteStudent(this.id)
  }

}
