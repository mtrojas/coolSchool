import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';

import { routes } from './routes';

import { SchoolSystemApiService } from './services/school-system-api.service';
import { AuthService } from './services/auth.service';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    CoursesComponent,
    LoginComponent,
    CourseDetailComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
  ],
  providers: [SchoolSystemApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
