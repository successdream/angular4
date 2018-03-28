import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoComponent } from './two.component';
import { TestOneComponent } from '../test-one/test-one.component';
import { TestTwoComponent } from '../test-two/test-two.component';
const routes: Routes = [
	{
	   path: '',  
	   component: TwoComponent ,
	   children:[
	 		{
	 			path:'testone',
	 		    component:TestOneComponent
	 	    },
	 	    {
	 	    	path:'testtwo',
	 		    component:TestTwoComponent
	 	    }
	   ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
