import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent, data: { title: 'Not Found' } }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: environment.tracing,
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
