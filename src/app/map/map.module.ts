import { EventModule } from './../event/event.module';
import { MapRoutingModule } from './map-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core/src/metadata/ng_module';
import {MapService} from './map.service';

@NgModule({
    imports: [SharedModule, MapRoutingModule, EventModule],
    exports: [MapComponent],
    declarations: [MapComponent],
    providers: [MapService],
})
export class MapModule { }
