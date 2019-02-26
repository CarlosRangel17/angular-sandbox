import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) 
            return { cannotContainSpace: true }
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'carlos')
                    resolve({ shouldBeUnique: true });
                else 
                    resolve(null);
            }, 2000);
        })
    }

    static shouldBeOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== '1234')
                    resolve({ shouldBeOldPassword: true})
                else 
                    resolve(null);
            }, 3000);
        })
    }

    static shouldBeSameAsNewPassword(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('account.newPassword');
        let confirmPassword = control.get('account.confirmPassword');

        if(newPassword.value !== confirmPassword.value) 
            return { shouldBeSameAsNewPassword: true };

        return null;
    }
}