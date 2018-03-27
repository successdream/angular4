import { Component, OnInit ,Input , SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css']
})
export class TestTwoComponent implements OnChanges {
	@Input('hello') hello:string;
	ngOnChanges(changes: SimpleChanges) {
      console.dir(changes);
  }
  constructor() { }

  ngOnInit() {
  }

}
