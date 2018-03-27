import { Component, OnInit ,  ElementRef, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit , AfterViewInit{
	@ViewChild("text") text:ElementRef;
	wo="A"
	you="49px"
  constructor(public elementRef: ElementRef) { 
  }
	ngAfterViewInit() {
//  console.dir(this.text.nativeElement.innerHTML);
  }
  ngOnInit() {
  }

}
