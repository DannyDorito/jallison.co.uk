import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bio = '...';

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getGitHubProfile();
  }

  getGitHubProfile() {
    this.homeService.getGitHubProfile('DannyDorito').subscribe(result => {
      if (result.bio !== null && result.bio !== '') {
        this.bio = result.bio;
      }
    });
  }
}
