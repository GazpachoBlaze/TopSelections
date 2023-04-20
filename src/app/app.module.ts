import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';



@NgModule({

  declarations: [
    AppComponent,
    routingComponents
    
  ],

  exports: [
       
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
