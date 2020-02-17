import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line: no-implicit-dependencies
import { ComponentsModule } from 'components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
