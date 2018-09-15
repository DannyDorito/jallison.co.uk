import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpOptions = {
    headers: new HttpHeaders({
      'authorization': `OAuth oauth_consumer_key="consumer-key-for-app",
      oauth_nonce="generated-nonce", oauth_signature="generated-signature",
      oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
      oauth_version="1.0"`
    })
  };
  constructor(private http: HttpClient) { }

  getBio() {
    return this.http.get <JSON> ('https://api.twitter.com/1.1/users/show.json?screen_name=DannyDorito_');
  }
}
