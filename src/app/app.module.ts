import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MemberService } from './member.service';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpComponent } from './http/http.component';
import { MembersComponent } from './members/members.component';
import { FormComponent } from './form/form.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ExeUnlessDirective } from './exe-unless.directive';
import { MyContentComponent } from './my-content/my-content.component';
import { YourContentComponent } from './your-content/your-content.component';
import { ContentComponent } from './content/content.component';
import { CommonComponent } from './common/common.component';
import { ContentTwoComponent } from './content-two/content-two.component';



export const ROUTES: Routes = [
  { path: '', redirectTo: '/members', pathMatch: 'full' },
  { path: 'user', component: UserComponent,
 		 children:[
	 		{
	 			path:'your-content',
	 		    component:YourContentComponent
	 	    }
	 		]
  },
  { path: 'members', 
    component: MembersComponent,
  	loadChildren:'app/one/one.module#OneModule'
  },
  { path: 'form/:username', component: FormComponent },
  { path: 'http', 
  	component: HttpComponent,
		loadChildren:'app/two/two.module#TwoModule'
  },
  { path: 'Your-content', component: YourContentComponent},
  { path: 'testone', component: MyContentComponent},
  { path: 'contenttwo', component: ContentTwoComponent}
  
  
 
  ]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HttpComponent,
    MembersComponent,
    FormComponent,
    MyDirectiveDirective,
    ExeUnlessDirective,
    MyContentComponent,
    YourContentComponent,
    ContentComponent,
    CommonComponent,
    ContentTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
