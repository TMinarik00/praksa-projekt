import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DrzaveRoutingModule } from './drzave-routing.module';
import { DrzaveComponent } from './drzave.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from '../shared/table/table.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DrzaveComponent,
    ListComponent,
    CreateComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    DrzaveRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class DrzaveModule {}
