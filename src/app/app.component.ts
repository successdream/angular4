import { Component ,AfterContentInit,ContentChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	message="APP组件";
  title = 'app';
  value:string;
  parent(value:any){
  	alert(value);
  }
  ff(ele){
  this.value=ele;
  }
}
