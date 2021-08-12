import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students=[
    {
      student_id:'',
      first_name:'',
      last_name:'',
      dob:'',
      contact_no:''
    }
  ];
  constructor(private service:AppService,private router:Router ) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.service.getStudents().subscribe((res)=>{
      console.log(res);
      this.students = res.result;
    });
  }

  editStudent(stu:any){
    console.log(stu);
    this.router.navigateByUrl("/edit-student/"+stu.student_id);
  }

  deleteStudent(id:String){
    console.log(id);
    this.service.deleteStudent(id).subscribe((res)=>{
      console.log(res);
      this.getStudents();
    })
  }
}
