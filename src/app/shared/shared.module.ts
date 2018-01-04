import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

const MODULES = [ 
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  FormsModule
];

@NgModule({
  imports: [
   ...MODULES
  ],
  exports:[
    ...MODULES],
  declarations: [],
  providers:[]
})
export class SharedModule { }
