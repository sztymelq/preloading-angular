import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinExtrasComponent } from './checkin-extras.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CheckinExtrasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CheckinExtrasComponent }
    ])
  ]
})
export class CheckinExtrasModule { }
