import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from './initial.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InitialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: InitialComponent }
    ])
  ],
})
export class InitialModule { }
