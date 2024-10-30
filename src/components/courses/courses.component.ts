import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { app } from '../../../server';
import { InputFormatDirective } from '../../directives/input-format.directive';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgFor, FormsModule, NgStyle, NgClass, InputFormatDirective],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses : any = ["Course1", "Course2"]
  viewMode = 'map'
  canSave = true;

  coursesArray = [{ course :  { name: 'Course'} },
                    { course : null}
                  ]
  

  onAdd(){
    this.courses.push({id: 4, name: "Course4"});
  }

  onRemove(course: any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  trackCourse(index: any, course: any){
    return course ? course.id : undefined;
  }

  LoadCourses(){
    this.courses = [
      {id: 1, name: "Course1"},
      {id: 2, name: "Course2"},
      {id: 3, name: "Course3"}
    ]
  }



}
