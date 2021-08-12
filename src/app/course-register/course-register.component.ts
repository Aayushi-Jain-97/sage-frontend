import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.css']
})
export class CourseRegisterComponent implements OnInit {
  courseRegisterArray = [{
    sname:'',
    cname:''
  }]
  students = [
    {
      student_id:'',
      first_name:'',
      last_name:'',
      dob:'',
      contact_no:''
    }
  ];
  courses = [
    {
      course_id:'',
      name:'',
      details:'',
    }
  ];
  constructor(private service:AppService, private router:Router) { }

  ngOnInit(): void {
    this.service.getStudents().subscribe((res1)=>{
      this.students = res1.result;
      this.service.getCourses().subscribe((res2)=>{
        this.courses = res2.result;
      })
    })
  }

  add(){
    this.courseRegisterArray.push({
      sname:'',
      cname:''
    });
  }

  registerCourse(){
    this.service.addCourseForStudents(this.courseRegisterArray).subscribe((res)=>{
      console.log(res);
    })
    // this.router.navigateByUrl("/report");
  }

}
