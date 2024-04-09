import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-multiplayergamespage',
  templateUrl: './multiplayergamespage.component.html',
  styleUrls: ['./multiplayergamespage.component.css']
})
export class MultiplayergamespageComponent implements OnInit{
  title = "hello";
  name = "chicken";
  describe = "words";
  image = "picture";
  gameItems: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/gamesMultiplayer.json').subscribe((data: Object) => {
      this.gameItems = data as any[];
    });
  }
}
