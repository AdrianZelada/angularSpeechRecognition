import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpeechRecognitionService } from './speech-recognition.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    SpeechRecognitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
