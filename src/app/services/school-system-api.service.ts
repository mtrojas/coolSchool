import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SchoolSystemApiService {

  coursesUrl: string = "http://35.190.191.33:9001/schoolsystem/api/v1/courses/"
  studentsUrl: string = "http://35.190.191.33:9001/schoolsystem/api/v1/students/"

  // students: Array<any> = [
  //   {
  //   "id": "6c6bcd8d-be2e-468b-aadb-e69b0aab889f",
  //   "first_name": "abel",
  //   "last_name": "mejia",
  //   "last_name_second": "hdz"
  //   }
  //   ]

  constructor(
    private http: Http,
  ) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('tererojas.i@gmail.com:3x4m3nfr0nt'))
  }

  getCoursesList() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.get(this.coursesUrl, {headers: headers}).toPromise()
    .then((res: Response)=> res.json())
  }

  getCourseDetail(id) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.get(this.coursesUrl + id,  {headers: headers})
    .pipe(map((res: Response) => res.json()))
  }

  getCourseStudents(id) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.get(`${this.coursesUrl}/${id}/students`, {headers: headers})
    .pipe(map((res: Response) => res.json()))
  }

  addStudentToCourse(id, student) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.post(`${this.coursesUrl}/${id}/students`, student, {headers: headers})
    .pipe(map((res: Response) => res.json()))
  }

  getStudentsList() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.get(this.studentsUrl, {headers: headers}).toPromise()
    .then((res: Response)=> res.json())
  }

  addStudent(student) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.post(this.studentsUrl, student, {headers: headers})
    .pipe(map((res: Response) => res.json()))
  }

  getStudentDetail(id) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.get(this.studentsUrl + id,  {headers: headers})
    .pipe(map((res: Response) => res.json()))
  }

  updateStudent(id, student) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.put(this.studentsUrl + id, student, {headers: headers})
    .pipe(map((res: Response) => res.json()))
  }

  deleteStudent(id) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers)
    return this.http.delete(this.studentsUrl + id, {headers: headers})
    .pipe(map((res: Response) => res.json()))
  }

}







