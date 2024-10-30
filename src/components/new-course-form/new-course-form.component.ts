import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './new-course-form.component.html',
  styleUrl: './new-course-form.component.scss'
})
export class NewCourseFormComponent {


  form = new FormGroup({
   topics : new FormArray([]),
   employee : new FormGroup({
    name : new FormControl('', Validators.required),
    contact : new FormGroup({
      email : new FormControl(),
      phone : new FormControl()
    }),
   })
  });

  constructor(fb: FormBuilder) { 
    fb.group({
      topics : fb.array([]),
      employee : fb.group({
        name : ['', Validators.required],
        contact : fb.group({
          email : [],
          phone : []
        })
      })
    })
  }

  addTopics(topic: HTMLInputElement) {
    this.topics?.push(new FormControl(topic.value));
    topic.value = ''; //Clear the input field after adding the topic.
    }

    get topics() {
      return this.form.get('topics') as FormArray;
    }

    onRemove(topic: any) {
      let index = this.topics?.controls.indexOf(topic);
      this.topics?.removeAt(index);
      }

      
}
