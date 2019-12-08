import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { User } from './models/User.model';
import { Education } from './models/Education.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;
  currentUserRowForm: FormGroup;

  users:User[];
  selectedUser:User;

  columns:string[];
  rows:number[] = [];
  education:Education;
  level:any[];
  

  constructor(private formBuilder: FormBuilder) {
      
    this.userForm = this.formBuilder.group({
      name: [''],
      age: [''],
      email: [''],
      level: ['']
    });

    this.currentUserRowForm = this.formBuilder.group({
      name: [''],
      age: [''],
      email: [''],
      level: ['']
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
    user.id = Math.floor(new Date().getTime()/1000);
    user.name = this.userForm.value.name;
    user.age = this.userForm.value.age;
    user.email = this.userForm.value.email;
    user.education = this.userForm.value.level;

    this.users.push(user)
    console.log(this.userForm.value)
    this.userForm.reset()
  }

  onRowEditInit(user: User){
    this.selectedUser = user;
  }

  onRowEditSave(user: User){
    console.log('Row edit saved');
  }

  onRowEditCancel(user: User, index: number) {
    console.log('Row edit cancelled');
  }

  onRowEditRemove(index: number) {
    this.users.splice(index,1);
    console.log('Row edit removed');
  }



  updateCurrentUser(index:number){
    const user:User = new User();
    user.name = this.currentUserRowForm.value.name;
    user.age = this.currentUserRowForm.value.age;
    user.email = this.currentUserRowForm.value.email;
    user.education = this.currentUserRowForm.value.level;

    this.users[index] = user;
    console.log(this.userForm.value)
    this.userForm.reset()
  }



}