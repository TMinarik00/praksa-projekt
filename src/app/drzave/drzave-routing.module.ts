import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { DrzaveComponent } from './drzave.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: DrzaveComponent,
    children: [
      { path: '', component: DrzaveComponent, data: { breadcrumb: null } },
      { path: 'list', component: ListComponent, data: { breadcrumb: 'list' } },
      { path: 'list/create', component: CreateComponent,data: { breadcrumb: 'create' } },
      { path: 'list/details/:id',component: DetailsComponent,data: { breadcrumb: 'details' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrzaveRoutingModule {}
