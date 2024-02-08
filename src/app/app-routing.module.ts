import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './view/main/main.component';

export const allAppRoutes: Routes = [
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(allAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }