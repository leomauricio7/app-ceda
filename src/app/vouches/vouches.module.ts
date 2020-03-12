import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VouchesPageRoutingModule } from './vouches-routing.module';

import { VouchesPage } from './vouches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VouchesPageRoutingModule
  ],
  declarations: [VouchesPage]
})
export class VouchesPageModule {}
