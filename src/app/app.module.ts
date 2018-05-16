import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ControlsModule } from './controls/controls.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ControlsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports: [ControlsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class ShellModule { }


