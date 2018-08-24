import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { SchoolSystemApiService } from '../services/school-system-api.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: any
  course: any = {}
  students: any = []


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

        this.schoolSystemService.getCourseDetail(this.id)
          .subscribe(course => {
            this.course = course
          })
    })
  }

  handleGetStudents() {
    this.schoolSystemService.getCourseStudents(this.id)
      .subscribe(students => {
        this.students = students
      })
  }

  goBack(): void {
    this.location.back();
  }

}
