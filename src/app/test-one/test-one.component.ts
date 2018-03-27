import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css']
})
export class TestOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
//  setTimeout(() => {
//    this.router.navigate(['/user']);
//  }, 5000);
  }

}
