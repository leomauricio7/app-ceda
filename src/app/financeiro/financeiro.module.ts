import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceiroPage } from './financeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
    ],
  declarations: [FinanceiroPage]
})
export class FinanceiroPageModule {}
