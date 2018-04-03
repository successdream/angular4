import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
interface Member {
    id: string;
    login: string;
    avatar_url: string;
}
@Component({
  selector: 'app-http',
  templateUrl: "./http.component.html",
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  members: Member[];
	counter:number=5;
  constructor(private http: Http) { } 

  ngOnInit() {
    this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
        .map(res => res.json()) 
        .subscribe(data => {
           if (data) this.members = data; 
        });
    }
}
