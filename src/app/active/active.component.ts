import { Component, OnInit  ,Injector ,ViewChild ,ViewContainerRef ,ComponentFactoryResolver} from '@angular/core';

import { ActiveOneComponent } from '../active-one/active-one.component';

import { ActiveTwoComponent } from '../active-two/active-two.component';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})


export class ActiveComponent implements OnInit {
	@ViewChild("dmroom",{read:ViewContainerRef}) dmRoom:ViewContainerRef;
	constructor(private crf:ComponentFactoryResolver;){
	
			};
  addComponent(){
				let com=this.crf.resolveComponentFactory(ActiveOneComponent);
				this.dmRoom.createComponent(com);
	};
}
