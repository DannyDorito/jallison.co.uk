import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) { }

  getGitHubRepos(username: string) {
    return this.http.get <GithubRepo> ('https://api.github.com/users/' + username + '/repos');
  }
}
