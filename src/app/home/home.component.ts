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
    // this.getBio();
    this.bio = 'Comp Sci UoH | Cat on Google Maps';
  }

  getBio() {
    this.homeService.getBio().subscribe(result => {
      // this.bio = result;
    });
  }
}
