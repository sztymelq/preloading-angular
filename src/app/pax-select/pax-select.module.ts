import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaxSelectComponent } from './pax-select.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaxSelectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PaxSelectComponent }
    ])
  ]
})
export class PaxSelectModule { }
