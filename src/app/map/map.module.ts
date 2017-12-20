import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core/src/metadata/ng_module';

@NgModule({
    imports: [SharedModule],
    exports: [MapComponent],
    declarations: [MapComponent],
    providers: [],
})
export class MapModule { }
