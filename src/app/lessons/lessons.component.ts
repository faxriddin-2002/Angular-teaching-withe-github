import { Component, OnInit} from '@angular/core';
import { FaxriddinService } from "../faxriddin.service"
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  listProperty;
  constructor(lessonsSvc: FaxriddinService) {
    this.listProperty = lessonsSvc.go();
  }
  ngOnInit(): void {
    

  }
}
