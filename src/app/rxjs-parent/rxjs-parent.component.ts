import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-rxjs-parent',
  templateUrl: './rxjs-parent.component.html',
  styleUrls: ['./rxjs-parent.component.css']
})
export class RxjsParentComponent implements OnInit {
	  message: any;
    subscription: Subscription;
  constructor(private messageService : MessageService) {
  	//不生效TODO
  	this.subscription=this.messageService.getMessage()
  	.subscribe(message => { 
  		console.log(message);
  		this.message = message; 
  	});
  }
	ngOnDestroy() {
        this.subscription.unsubscribe();
    }
  ngOnInit() {
  }

}
