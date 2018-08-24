import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component:StudentsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'login', component: LoginComponent},
  { path: 'course/:id', component: CourseDetailComponent},
  { path: 'student/:id',
    component: StudentDetailComponent,
    // children: [
    //   path:'edit-student',
    //   component: EditStudentComponent
    // ]
  },
];