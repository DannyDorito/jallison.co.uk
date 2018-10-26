import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private http: HttpClient) { }

  getRepo(username: string, repo: string) {
    return this.http.get <GitHubRepo> ('https://api.github.com/repos/' + username + '/' + repo);
  }

  getAllPublicRepos(username: string) {
    return this.http.get <GitHubRepo[]> ('https://api.github.com/' + username + '/repos');
  }
}
