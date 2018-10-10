import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ItemShoesComponent } from './item-shoes/item-shoes.component';

@NgModule({
  imports: [CommonModule, ProductRoutingModule],
  declarations: [
    ItemShoesComponent
  ],
  exports: [ItemShoesComponent]
})

export class ProductModule {}
