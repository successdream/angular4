import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';

@NgModule({

  imports: [
    CommonModule,
    OneRoutingModule
  ],
  declarations: [OneComponent]
})
export class OneModule { 

	
}
