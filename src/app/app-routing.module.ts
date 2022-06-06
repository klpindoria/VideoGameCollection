import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search/:gameSearch',
    component: HomeComponent
  },
  {
    path: 'game-details/:gameId',
    component: GameDetailComponent
  },
  {
    // redirect to 'home'
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  { 
    // Route for a 404 page
    path: 'page-not-found', 
    component: PageNotFoundComponent
  },  
  { 
    // Wildcard route for a 404 page
    path: '**',
    redirectTo: 'page-not-found'
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
