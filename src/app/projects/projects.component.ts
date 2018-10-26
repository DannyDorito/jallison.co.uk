import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  allRepos: GitHubRepo[];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {

  }

  getRepo(username: string, repo: string) {
    this.projectsService.getRepo(username, repo).subscribe(result => {
      // this.description = result.description;
    });
  }

  getAllRepos(username: string) {
    this.projectsService.getAllPublicRepos(username).subscribe(result => {
      this.allRepos = result;
    });
  }
}
