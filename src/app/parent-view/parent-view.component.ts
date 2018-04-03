//import { Component, OnInit ,ViewChild,AfterViewInit ,ViewContainerRef ,TemplateRef,ElementRef} from '@angular/core';

import { Component, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-parent-view',
////  template: `
////  <h1>Welcome to Angular World</h1>
////  <template #tpl>
////    <span>I am span in template</span>
////  </template>
//`,
  templateUrl:'./parent-view.component.html'
})
export class ParentViewComponent {

// @ViewChild('tpl')
//tplRef: any;
//
//@ViewChild('tpl', { read: ViewContainerRef })
//tplVcRef: ViewContainerRef;
//ngAfterViewInit() {
//  console.dir(this.tplVcRef);
//  this.tplVcRef.createEmbeddedView(this.tplRef);
//}

}
