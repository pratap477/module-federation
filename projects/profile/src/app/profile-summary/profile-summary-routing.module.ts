import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSummaryComponent } from './profile-summary.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileSummaryRoutingModule { }
