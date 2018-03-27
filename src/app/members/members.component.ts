import { Component, OnInit } from '@angular/core';
import { MemberService } from "../member.service";
interface Member {
    id: string;
    login: string;
    avatar_url: string;
}
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
	 name="wo 的 世界";
	 members:Member[];
   constructor(private memberService: MemberService) { }
	
   ngOnInit() {
        this.memberService.getMembers()
            .subscribe(data => {
                if (data) this.members = data;
            });
    }
}
//1 导入服务
//2 定义私有属性
//3 在ngOninit中调用重新赋值的私有属性服务