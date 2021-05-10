import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  
  }

  dars = "Angular asoslari"
  vaqti = 20;
  duration = "2-soat";
}
