import { Component, OnInit } from '@angular/core';
let instances = 0;
@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css']
})
export class MyContentComponent implements OnInit {
	id:number;
  constructor() {
  	this.id=instances++;
  }

  ngOnInit() {
  	
  }

}
