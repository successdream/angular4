import { Component, OnInit,AfterViewInit,ElementRef ,ViewChild ,Renderer } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
//使用了renderer 及ElementRef
export class TestOneComponent implements OnInit , AfterViewInit {
	
	 @ViewChild("greet") greetDiv: ElementRef;
  constructor(private router: Router ,private elementRef:ElementRef ,private renderer: Renderer) { }
 
  
	ngAfterViewInit(){
//		this.renderer.setElementStyle(this.greetDiv.nativeElement,"backgroundColor":'yellow');
//		this.renderer.setElementClass(this.greetDiv.nativeElement,"hello",true);
	}

   ngOnInit() {

   }

}
