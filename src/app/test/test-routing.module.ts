import { FileUploadComponent } from './../file-upload/file-upload.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  component:FileUploadComponent,
  path:"upload"
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[]
})
export class TestRoutingModule { }

export const routedComponents = [FileUploadComponent];