import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './errors/page404/page404.component';

import {
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventListComponent,
  EventRouteActivatorService,
  EventsListResolverService
} from './events/index'

const routes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  { path: 'events', component: EventListComponent, resolve: {events: EventsListResolverService} },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService],
  },
  {
    path: 'events/session/new', component: CreateSessionComponent
  },
  { path: '404', component: Page404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
    .then(m => m.UserModule)
    }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),


  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


