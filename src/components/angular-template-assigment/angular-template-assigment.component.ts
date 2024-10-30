import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-template-assigment',
  standalone: true,
  imports: [FormsModule, NgForOf, NgIf, JsonPipe],
  templateUrl: './angular-template-assigment.component.html',
  styleUrl: './angular-template-assigment.component.scss'
})
export class AngularTemplateAssigmentComponent {

  categories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' }
  ];

  onSubmit(form: NgForm) {
    console.log(form);//Displays the form
    }
}
