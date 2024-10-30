import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserNameValidators } from '../../validators/username.validators';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {

  onBlur(form: any) {
    console.log(form);
  }

  form = new FormGroup(
    {
      account : new FormGroup({
        username: new FormControl('', 
        [
          Validators.required,
          Validators.minLength(3),
          UserNameValidators.cannotContainSpace          
        ],
        [
          UserNameValidators.shouldBeUniqueAsync
        ]),
        password: new FormControl('', Validators.required)
      }),
     
    }
  )

  get username() {
    return this.form.get('account.username');
  }

  formSubmit() {
    //Form level validation
    this.form.setErrors({
      invalidLogin: true
    });

    //Control level validation
    // this.username?.setErrors({  
    //   invalidLogin: true
    // });

    }
}
