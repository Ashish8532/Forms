import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      personaldetails: new FormGroup({
        firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phonenumber: new FormControl(null),
        password: new FormControl(null),
      }),
      country: new FormControl('india'),
      gender: new FormControl('male'),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ])
    });
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  noSpaceAllowed(control: FormControl) {
    if(control.value != null && control.value.indexOf(' ') != -1) {
      return {noSpaceAllowed: true}
    }
    return null;
  }
}
