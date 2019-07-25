import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';
import { Link } from '../Link';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userid = 1; // userprofile identifier mocked
  private userUrl = 'http://localhost:8080/api/user';  // URL to web api

  constructor(
    private http: HttpClient) { }

    // Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

/** GET User from the server */
getUser(userid): Observable<User> {
  const url = this.userUrl + '/' + userid;
  return this.http.get<User>(url);
}

addLink( userid, link ): Observable<User> {
  return this.http.post<User>(this.userUrl + '/' + userid + '/addlink', JSON.stringify(link), this.httpOptions);
}

deleteLink(userid, linkid): Observable<User> {
  console.log(this.userUrl + '/' + userid + '/deletelink/' + linkid);
  return this.http.put<User>(this.userUrl + '/' + userid + '/deletelink/' + linkid, this.httpOptions );
}
}
