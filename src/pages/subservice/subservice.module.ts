import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubservicePage } from './subservice';

@NgModule({
  declarations: [
    SubservicePage,
  ],
  imports: [
    IonicPageModule.forChild(SubservicePage),
  ],
})
export class SubservicePageModule {}
