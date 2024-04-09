import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fightinggamespage',
  templateUrl: './fightinggamespage.component.html',
  styleUrls: ['./fightinggamespage.component.css']
})
export class FightinggamespageComponent implements OnInit{
  title = "hello";
  name = "chicken";
  describe = "words";
  image = "picture";
  gameItems: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/gamesFighting.json').subscribe((data: Object) => {
      this.gameItems = data as any[];
    });
  }
}
