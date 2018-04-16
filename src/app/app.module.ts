import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ControlsModule } from './controls/controls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ControlsModule
  ],
  exports: [ControlsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class ShellModule { }


