import { FileSizePipe } from './../file-upload/file-size.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { TestRoutingModule, routedComponents } from './test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
  ],
  declarations:[...routedComponents, FileSizePipe] 
})
export class TestModule { }
