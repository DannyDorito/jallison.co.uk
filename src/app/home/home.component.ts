import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bio: string;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getBio();
  }

  getBio() {
    this.homeService.getBio('DannyDorito').subscribe(result => {
      this.bio = result.bio;
    });
  }
}
