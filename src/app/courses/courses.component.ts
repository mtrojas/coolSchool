import { Component, OnInit } from '@angular/core';

import { SchoolSystemApiService} from '../services/school-system-api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Array<any>

  constructor(
    private schoolSystemApiService: SchoolSystemApiService,
  ) { }

  ngOnInit() {
    this.schoolSystemApiService.getCoursesList()
      .then(courses => {
        this.courses = courses;
      })
  }
}
