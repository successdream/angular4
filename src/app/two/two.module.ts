import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { TestOneComponent } from '../test-one/test-one.component';
import { TestTwoComponent } from '../test-two/test-two.component';


@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule
  ],
  declarations: [
  	TwoComponent,
  	TestOneComponent,
  	TestTwoComponent
  ]
})
export class TwoModule { }
