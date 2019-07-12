import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repos: GithubRepo[] = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.repos = this.getGitHubRepos('DannyDorito');
    console.log(this.repos);
  }

  async getGitHubRepos(username: string) {
    console.log(username);
    this.repos = await this.getGitHubRepos('DannyDorito');
  }
}
