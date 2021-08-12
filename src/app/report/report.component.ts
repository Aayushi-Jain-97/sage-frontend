import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  course_registered=[{
    sname:'',
    cname:''
  }];

  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.service.getReport().subscribe((res)=>{
      this.course_registered = res.result;
    })
  }


}
