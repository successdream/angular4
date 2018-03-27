import { Component, OnInit ,Input, Output, EventEmitter,SimpleChanges} from '@angular/core';
interface Member {
    id: string;
    login: string;
    avatar_url: string;
}

@Component({
  selector: 'app-user',
  templateUrl:'./user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	@Input() message: string;
	@Output() update: EventEmitter<string> = new EventEmitter();
	name = 'Semlinker';
    address = {
        province: '福建',
        city: '厦门'
    };
    child(value:string){
    	
    	this.update.emit(value);
    	
    }
    hello(){
    	alert('hello everyone');
    }
    ngOnChanges(){
    	
    }
    showSkills=true;
     toggleSkills() {
     	
        this.showSkills = !this.showSkills;
    }
  

	ngOnInit() {
		
	}

}
