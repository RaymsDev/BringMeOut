import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { FileUploadComponent } from './file-upload.component';
import { SharedModule } from '../shared/shared.module';


const MATERIAL_MODULES = [
  MatButtonModule
];

@NgModule({
  imports: [
    ...MATERIAL_MODULES,
    SharedModule
  ],
  exports: [FileUploadComponent],
  declarations: [FileUploadComponent],
  providers: [],
})
export class FileUploadModule {}

