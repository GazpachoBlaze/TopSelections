import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';

@NgModule({

  declarations: [
    AppComponent,
    routingComponents,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatGridListModule,
    HttpClientModule
  ],
  
  exports: [AppComponent],
  
  providers: [],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
