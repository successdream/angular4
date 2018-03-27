import { Component, OnInit ,AfterViewInit,ViewEncapsulation ,Input, SimpleChanges, OnChanges,Output ,EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges , OnInit {
	@Input() counter:string;
	@Output() change: EventEmitter<string> = new EventEmitter<string>();
	username="张三";
	p_c:string;
	  constructor(private route: ActivatedRoute) { }
		 onSubmit(value) {
	    console.dir(value);
	  }
	 ngOnChanges(changes: SimpleChanges){
	 	 console.dir(changes['counter']);
	 }
	
	
  ngOnInit() {
  	this.route.params.subscribe((params) => this.p_c = params.username);
  }
}
