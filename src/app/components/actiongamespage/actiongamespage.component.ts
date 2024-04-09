import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-actiongamespage',
  templateUrl: './actiongamespage.component.html',
  styleUrls: ['./actiongamespage.component.css']
})
export class ActiongamespageComponent implements OnInit{
  title = "hello";
  name = "chicken";
  describe = "words";
  image = "picture";
  gameItems: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/gamesAction.json').subscribe((data: Object) => {
      this.gameItems = data as any[];
    });
  }
}
