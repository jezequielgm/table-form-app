import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { User } from './models/User.model';
import { Education } from './models/Education.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userForm: any;

  users:User[];
  columns:string[];
  rows:number[] = [];
  education:Education;
  level:any[];

  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required]],
      education: ['Degree', [Validators.required]]
    });
  }

  ngOnInit(){
    this.users = [];
    this.columns = ["Name", "Age", "Email", "Education", ""];
    this.rows = [0];
    this.education = new Education();
    this.level = this.education.level;
  }

  saveUser(){
    const user:User = new User();
    user.name = this.userForm.value.name;
    user.age = this.userForm.value.age;
    user.email = this.userForm.value.email;
    user.education = this.userForm.value.education;

    this.users.push(user)
    console.log(this.users)
  }

}