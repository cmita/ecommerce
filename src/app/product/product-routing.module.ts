import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemShoesComponent } from './item-shoes/item-shoes.component';
import { ItemGuard } from './item.guard';
import { ItemResolverService } from './item-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ItemShoesComponent,
    canActivate: [ItemGuard],
    resolve: { itemResolvedValue: ItemResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
