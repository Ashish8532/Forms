import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @ViewChild('myForm')
  form!: NgForm;

  defaultCountry = "india";
  defaultGender = 'Male';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'},
  ]
  constructor(private router: Router) {}

  submit() {
    console.log("Form submited", this.form);
  }
}
