import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatInputModule, MatFormFieldModule, MatSlider, MatCheckbox, MatCard, MatCardContent, MatRippleModule, GestureConfig } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MatCard,
    MatCardContent,
    MatCheckbox,
    MatSlider
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    FormsModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    FocusMonitor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
