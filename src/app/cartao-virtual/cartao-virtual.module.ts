import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoVirtualPageRoutingModule } from './cartao-virtual-routing.module';

import { CartaoVirtualPage } from './cartao-virtual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoVirtualPageRoutingModule
  ],
  declarations: [CartaoVirtualPage]
})
export class CartaoVirtualPageModule {}
