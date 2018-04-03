import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { TestOneComponent } from '../test-one/test-one.component';
import { TestTwoComponent } from '../test-two/test-two.component';
import { ActiveComponent } from '../active/active.component';
import { ActiveOneComponent } from '../active-one/active-one.component';
import { ActiveTwoComponent } from '../active-two/active-two.component';

@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule
  ],
  entryComponents :[ActiveOneComponent,ActiveTwoComponent],
  declarations: [
  	TwoComponent,
  	TestOneComponent,
  	TestTwoComponent,
  	ActiveComponent,
    ActiveOneComponent,
    ActiveTwoComponent,
  ]
})
export class TwoModule { }
