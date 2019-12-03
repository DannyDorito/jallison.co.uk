import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bio = '...';

  constructor(private homeService: HomeService) {}
}
