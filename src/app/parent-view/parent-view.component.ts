import { Component, OnInit ,ViewChild,AfterViewInit } from '@angular/core';
import { ViewChildComponent } from 'app/view-child/view-child.component';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit ,AfterViewInit {
	 
	 @ViewChild(ViewChildComponent)
   childCmp: ViewChildComponent;
	
	ngAfterViewInit (){
      this.childCmp.name="这是父组件的值";
	}
  constructor() { }

  ngOnInit() {
  }

}
