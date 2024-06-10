import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieReviewsComponent } from './reviews/movie-reviews.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'movie-reviews', component: MovieReviewsComponent },
  { path: 'add-review', loadChildren: () => import('./addreview/addreview.module').then(m => m.AddreviewModule) },
  { path: 'booktickets', loadChildren: () => import('./booktickets/booktickets.module').then(m => m.BookticketsModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'booking', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule) },
  { path: 'playing', loadChildren: () => import('./playing/playing.module').then(m => m.PlayingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
