import { Component, ViewEncapsulation,Input , SimpleChanges, OnChanges} from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  encapsulation: ViewEncapsulation.None // None | Emulated | Native
})
export class TwoComponent  implements OnChanges{
	@Input() counter:string;
	ngOnChanges(changes: SimpleChanges) {
		    alert("hello world");
        console.dir(changes);
        console.dir(changes['counter']);
  }
  constructor() {
  }



}
