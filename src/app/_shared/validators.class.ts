import {
  FormControl,
} from "@angular/forms";

export const FormValidators = {

  validateEmail(control: FormControl) {
    const EMAIL_REGEX = /^(([^<>()\[\].,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // If value is empty, should fire Required
    return EMAIL_REGEX.test(control.value) || control.value === '' ? null : {
        validateEmail: {
          valid: false
        }
      }
  }

};
