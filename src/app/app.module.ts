import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaxriddinService } from './faxriddin.service';
import { LessonComponent } from './lesson/lesson.component';
import { LessonsComponent } from './lessons/lessons.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    LessonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [FaxriddinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
