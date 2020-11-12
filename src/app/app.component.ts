import { Component } from '@angular/core';
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  btnStyle: string = "btn btn-primary";
  students: any[];
  studentCollection: any[]=[
    {name: "Tonya", favNumber: 23, favColor: "Cyan"},
    {name: "Kali", favNumber: 8, favColor: "Violet"},
    {name: "Mark.S", favNumber: 35, favColor: "Green"},
    {name: "Johnathan", favNumber: 1, favColor: "Dark Salmon"},
    {name: "Christian", favNumber: 44, favColor: "Black"},
    {name: "Minami", favNumber: 32, favColor: "Red"},
    {name: "Hung", favNumber: 21, favColor: "Purple"},
    {name: "Marc.B", favNumber: 4, favColor: "Yellow"},
    {name: "Tracy", favNumber: 3, favColor: "Pink"},
    {name: "Elena", favNumber: 6, favColor: "White"},
    {name: "Jack", favNumber: 5, favColor: "Orange"}
  ];
  title = 'student-list';
changeColor(): void{
  this.btnStyle = "btn btn-danger";
}
getStudents(): void{
  this.students = this.studentCollection;
}
constructor(
  private usersvc: UserService 
){
  this.usersvc.list();
}

ngOnInit(): void{

}
}
