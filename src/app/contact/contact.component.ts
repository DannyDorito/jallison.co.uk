import { Component } from '@angular/core';
import { Contact } from './contact';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  email = new Contact('', '', '');
  emailControl = new FormControl(Validators.required, Validators.email);
  showForm = false;

  onSubmit() {
    console.log(this.email);
  }

  getErrorMessage(control: any) {
    return control.hasError('required') ? 'Cannot be blank!' :
    control.hasError('email') ? 'Please enter a valid email!' : '';
  }
}
