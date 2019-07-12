import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  result = undefined;
  constructor(private http: HttpClient) { }

  async getGitHubRepos(username: string){
    return await this.http.get <GithubRepo[]> ('https://api.github.com/users/' + username + '/repos');
  }
}
