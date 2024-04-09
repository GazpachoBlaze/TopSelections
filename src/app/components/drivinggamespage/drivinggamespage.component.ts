import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-drivinggamespage',
  templateUrl: './drivinggamespage.component.html',
  styleUrls: ['./drivinggamespage.component.css']
})
export class DrivinggamespageComponent implements OnInit {
  title = "hello";
  name = "chicken";
  describe = "words";
  image = "picture";
  gameItems: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/gamesDriving.json').subscribe((data: Object) => {
      this.gameItems = data as any[];
    });
  }
}
