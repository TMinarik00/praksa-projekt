import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './sports.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SportsComponent,
    CreateComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    SportsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SportsModule {}
