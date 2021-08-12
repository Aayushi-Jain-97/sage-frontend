import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  first_name='';
  last_name='';
  dob='';
  contact_no='';
  id='';
  edit=false;
  constructor(private service:AppService,private router:Router,private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    if(this.route.snapshot.params.id){
      this.id = this.route.snapshot.params.id;
      this.edit = true;
      this.service.getStudentById(this.id).subscribe((res)=>{
        console.log(res);
        this.first_name = res.result[0].first_name;
        this.last_name = res.result[0].last_name;
        this.dob = res.result[0].dob;
        this.contact_no = res.result[0].contact_no;
      })
    }
  }

  addStudent(){
    this.service.addStudent(this.first_name,this.last_name,this.dob,this.contact_no).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/");
    })
  }

  editStudent(){
    this.service.editStudent(this.id,this.first_name,this.last_name,this.dob,this.contact_no).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl("/");
    })
  }
}
