import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UsernameValidators } from '../signup-form/username.validators';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent  {
  // form = new FormGroup({
  //   account: new FormGroup({
  //     oldPassword: new FormControl('', 
  //       [
  //         Validators.required,
  //         UsernameValidators.shouldBeOldPassword
  //       ],
  //       UsernameValidators.shouldBeUnique),
  //     newPassword: new FormControl('', Validators.required),
  //     confirmPassword: new FormControl('', [
  //       Validators.required, 
  //       UsernameValidators.shouldBeSameAsNewPassword
  //     ])
  //   })
  // });

  form: FormGroup;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      account: fb.group({
        oldPassword:  ['',  
          Validators.required, 
          UsernameValidators.shouldBeOldPassword
        ],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      })
    }, 
    {
      validator: UsernameValidators.shouldBeSameAsNewPassword
    })
  }

  get oldPassword() { return this.form.get('account.oldPassword'); }

  get newPassword() { return this.form.get('account.newPassword'); }

  get confirmPassword() { return this.form.get('account.confirmPassword'); }
}
