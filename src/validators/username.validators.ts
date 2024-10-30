import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserNameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    //Call this custom validator with asynchronus operation.
    static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
        // if(control.value as string === 'mosh'){
        //     return { shouldBeUnique : true };
        // }

        // return null;

        //The above code is synchronous. If you want to make it asynchronous, you can use the following code:
        //To simulate the async operation, you can use setTimeout or you can use a promise to delay the response.
        setTimeout(() => {
            if(control.value === 'mosh'){
                return { shouldBeUnique : true };
            }
            return null;
        }, 2000); 

        return null;
    }

    
    //To simulate the async operation, you can use a promise to delay the response.        
    static shouldBeUniqueAsync(control: AbstractControl): Promise<ValidationErrors | null> { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value as string).toLowerCase() === 'mosh'){
                    resolve({ shouldBeUnique : true });
                }
                else
                    resolve(null)
            }, 5000);   
        });        
    }

}