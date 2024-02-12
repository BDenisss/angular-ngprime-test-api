import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './view/main/main.component';
import { ProductComponent } from './view/product/product.component';

export const allAppRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(allAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }