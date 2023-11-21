import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EventsComponent } from './events.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'list/create', component: CreateComponent },
      { path: 'list/details/:id', component: DetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
