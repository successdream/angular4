import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { OneComponent } from '../one/one.component';
import { TwoComponent } from '../two/two.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'one', component: OneComponent },
      { path: 'two', component: TwoComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: []
})
export class MyUserModule { }
