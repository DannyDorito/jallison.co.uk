import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  description: string;
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getRepo('DannyDorito', 'ARMA-3-Startup-and-Restart-Script');
  }

  getRepo(username: string, repo: string) {
    this.projectsService.getRepo(username, repo).subscribe(result => {
      this.description = result.description;
    });
  }
}
