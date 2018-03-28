import { Component, OnInit ,Input , SimpleChanges, OnChanges,
				TemplateRef, ViewChild, ViewContainerRef, AfterViewInit 
} from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css']
})
export class TestTwoComponent implements OnChanges ,AfterViewInit {
//	@Input('hello') hello:string;
//	//内嵌视图的用法TODO
//	
//	@ViewChild('tpl')
//	tplRef: TemplateRef<any>;
//	
//	@ViewChild('tpl', { read: ViewContainerRef })
//tplVcRef: ViewContainerRef;
	ngOnChanges(changes: SimpleChanges) {
//    console.dir(changes);
}
	ngAfterViewInit() {

	}

		


 
  constructor() { }

  ngOnInit() {
  }

}
