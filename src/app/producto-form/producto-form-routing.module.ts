import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoFormPage } from './producto-form.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoFormPageRoutingModule {}
