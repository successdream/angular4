import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {
	name:string;
  constructor() { }

  ngOnInit() {
  }

}
