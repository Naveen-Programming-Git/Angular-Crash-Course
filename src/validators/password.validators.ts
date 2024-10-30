import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    
    static validateOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if((control.value as string).toLowerCase() !== '1234')
                    resolve({isWrongPasswordEntered: true});
                else
                    resolve(null);
            } , 2000);
        });
    }

    static passwordsMustMatch(control : AbstractControl) : ValidationErrors | null {        
                let newPassword = control.get('newPassword');
                let confirmPassword = control.get('confirmPassword');
                if(newPassword?.value !== confirmPassword?.value)                
                    return {passwordsMustMatch: true};
                else
                    return null;
    }
}