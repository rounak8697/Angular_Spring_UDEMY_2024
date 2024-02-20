import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalesPersonListComponent } from './sales-person-list/sales-person-list.component';
import { SalesPersonList2Component } from './sales-person-list2/sales-person-list2.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesPersonListComponent,
    SalesPersonList2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
