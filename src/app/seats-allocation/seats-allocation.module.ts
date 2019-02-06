import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsAllocationComponent } from './seats-allocation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SeatsAllocationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SeatsAllocationComponent }
    ])
  ]
})
export class SeatsAllocationModule { }
