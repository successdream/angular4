import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class MemberService {

  constructor(private http: Http) { }
  update(){
  	return 
  }
	getMembers() {
        return this.http
            .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
            .map(res => res.json())
    }
}
//服务内的配置
//1 导入http
//2 设置http为私有属性
//3 定义一个方法,发送http请求,并return.angular
