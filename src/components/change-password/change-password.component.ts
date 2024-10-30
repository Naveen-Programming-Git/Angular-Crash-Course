import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PasswordValidators } from '../../validators/password.validators';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
validateOldPassword() {
  console.log(this.oldPassword);
}
  // form = new FormGroup({
  //   oldPassword: new FormControl('', 
  //   [
  //     Validators.required      
  //   ],
  //   [
  //     PasswordValidators.validateOldPassword
  //   ]),
  //   newPassword: new FormControl('', [
  //     Validators.required ,
  //     PasswordValidators.passwordsMustMatch          
  //   ]),
  //   confirmPassword: new FormControl('', [
  //     Validators.required, 
  //     PasswordValidators.passwordsMustMatch     
  //   ]
  //   )
  // });

  form;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword : ['', [Validators.required], [PasswordValidators.validateOldPassword]],
      newPassword : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    },{
      validator: PasswordValidators.passwordsMustMatch
    })
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
