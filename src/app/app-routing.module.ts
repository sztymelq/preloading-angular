import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloader } from './custom-preloader';
import { Guard } from './guard';

const routes: Routes = [
  {
    path: 'pax-select', loadChildren: './pax-select/pax-select.module#PaxSelectModule'
  },
  {
    path: 'seats-allocation', loadChildren: './seats-allocation/seats-allocation.module#SeatsAllocationModule'
  },
  {
    path: 'checkin-extras', loadChildren: './checkin-extras/checkin-extras.module#CheckinExtrasModule'
  },
  {
    path: 'boarding-pass', loadChildren: './boarding-pass/boarding-pass.module#BoardingPassModule'
  },
  { path: '**', loadChildren: './initial/initial.module#InitialModule' , pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloader
    })
  ],
  providers: [
    CustomPreloader
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
