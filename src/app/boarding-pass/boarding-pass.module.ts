import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardingPassComponent } from './boarding-pass.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BoardingPassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BoardingPassComponent }
    ])
  ]
})
export class BoardingPassModule { }
