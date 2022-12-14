import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TempConverterPipe } from './temp-converte.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TempConverterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
