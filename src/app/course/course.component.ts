import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses=[
    {
      course_id:'',
      name:'',
      details:'',
    }
  ];

  constructor(private service:AppService, private router:Router) { }

  ngOnInit(): void {
    this.getCourse()
  }
  getCourse(){
    this.service.getCourses().subscribe((res)=>{
      console.log(res);
      this.courses = res.result;
    });
  }

  editCourse(c:any){
    console.log(c);
    this.router.navigateByUrl("/edit-course/"+c.course_id);
  }

  deleteCourse(id:String){
    console.log(id);
    this.service.deleteCourse(id).subscribe((res)=>{
      console.log(res);
      this.getCourse();
    })
  }
}
