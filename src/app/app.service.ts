import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  getStudents() {
    return this.http.get<any>(this.url+'student');
  }

  addStudent(first_name:String,last_name:String,dob:any,contact_no:any) {
    let data = {
      first_name:first_name,
      last_name:last_name,
      dob:dob,
      contact_no:contact_no
    }
    return this.http.post<any>(this.url+'student',data);
  }

  editStudent(id:any,first_name:String,last_name:String,dob:any,contact_no:any) {
    let data = {
      student_id:id,
      first_name:first_name,
      last_name:last_name,
      dob:dob,
      contact_no:contact_no
    }
    return this.http.put<any>(this.url+'student',data);
  }

  deleteStudent(id:any) {
    return this.http.delete<any>(this.url+'student/'+id);
  }

  getStudentById(id:any){
    return this.http.get<any>(this.url+'student/'+id);
  }

  getCourses() {
    return this.http.get<any>(this.url+'course');
  }

  addCourse(name:String,details:String) {
    let data = {
      name:name,
      details:details
    }
    return this.http.post<any>(this.url+'course',data);
  }

  editCourse(id:any,name:String,details:String) {
    let data = {
      course_id:id,
      name:name,
      details:details
    }
    return this.http.put<any>(this.url+'course',data);
  }

  deleteCourse(id:any) {
    return this.http.delete<any>(this.url+'course/'+id);
  }

  getCourseById(id:any){
    return this.http.get<any>(this.url+'course/'+id);
  }

  getReport(){
    return this.http.get<any>(this.url+'course-register/report');
  }

  addCourseForStudents(reg:any){
    let data = {
      "courseRegisterStudent":reg
    }
    return this.http.post<any>(this.url+'course-register',data);
  }
}
