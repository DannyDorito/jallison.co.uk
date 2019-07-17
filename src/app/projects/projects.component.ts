import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repos: GithubRepo;
  constructor(private projectsService: ProjectsService) {}

  async ngOnInit() {
    // this.repos = await this.getGitHubRepos('DannyDorito');
    // console.log(this.repos);
  }

  async getGitHubRepos(username: string): Promise<GithubRepo> {
    this.projectsService.getGitHubRepos(username).subscribe(result => {
      return result;
    });
    return undefined;
  }
}
