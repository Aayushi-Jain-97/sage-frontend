import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  name='';
  details='';
  id='';
  edit=false;
  constructor(private service:AppService,private router:Router,private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    if(this.route.snapshot.params.id){
      this.id = this.route.snapshot.params.id;
      this.edit = true;
      this.service.getCourseById(this.id).subscribe((res)=>{
        console.log(res);
        this.name = res.result[0].name;
        this.details = res.result[0].details;
      })
    }
  }

  addCourse(){
    this.service.addCourse(this.name,this.details).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/course");
    })
  }

  editCourse(){
    this.service.editCourse(this.id,this.name,this.details).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/course");
    })
  }

}
