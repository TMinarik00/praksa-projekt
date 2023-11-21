import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'drzave',
    loadChildren: () =>
      import('./drzave/drzave.module').then((m) => m.DrzaveModule),
  },
  {
    path: 'timovi',
    loadChildren: () =>
      import('./timovi/timovi.module').then((m) => m.TimoviModule),
  },
  {
    path: 'sports',
    loadChildren: () =>
      import('./sports/sports.module').then((m) => m.SportsModule),
  },
  {
    path: 'competitions',
    loadChildren: () =>
      import('./competitions/competitions.module').then(
        (m) => m.CompetitionsModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events/events.module').then((m) => m.EventsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
