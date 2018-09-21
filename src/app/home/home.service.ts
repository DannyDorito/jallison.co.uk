import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getBio(username: string) {
    return this.http.get <GitHubProfile> ('https://api.github.com/users/' + username);
  }
}
