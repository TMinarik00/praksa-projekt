import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsComponent } from './competitions.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CompetitionsComponent,
    CreateComponent,
    DetailsComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CompetitionsModule {}
