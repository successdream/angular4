import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-rxjs-child',
  templateUrl: './rxjs-child.component.html',
  styleUrls: ['./rxjs-child.component.css']
})
export class RxjsChildComponent implements OnInit {

  constructor(private messageService: MessageService) { }
	sendMessage(){
		this.messageService.sendMessage('这是rxjs组件传递的值');
	}
	clearMessage(): void { // 清除消息
        this.messageService.clearMessage();
    }
  ngOnInit() {
  }

}
