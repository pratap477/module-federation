import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSummaryRoutingModule } from './profile-summary-routing.module';
import { ProfileSummaryComponent } from './profile-summary.component';


@NgModule({
  declarations: [ProfileSummaryComponent],
  imports: [
    CommonModule,
    ProfileSummaryRoutingModule
  ],
  exports: [ProfileSummaryComponent]
})
export class ProfileSummaryModule { }
