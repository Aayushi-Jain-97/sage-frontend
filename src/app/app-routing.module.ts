import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CourseRegisterComponent } from './course-register/course-register.component';
import { CourseComponent } from './course/course.component';
import { ReportComponent } from './report/report.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:'add-student',component:AddStudentComponent},
  {path:'course',component:CourseComponent},
  {path:'add-course',component:AddCourseComponent},
  {path:'report',component:ReportComponent},
  {path:'course-register',component:CourseRegisterComponent},
  {path:'edit-student/:id',component:AddStudentComponent},
  {path:'edit-course/:id',component:AddCourseComponent},
  {path:'',component:StudentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
