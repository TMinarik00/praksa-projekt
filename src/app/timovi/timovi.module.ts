import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TimoviRoutingModule } from './timovi-routing.module';
import { TimoviComponent } from './timovi.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TimoviComponent,
    ListComponent,
    CreateComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    TimoviRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class TimoviModule {}
