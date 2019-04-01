import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webApi } from '../../../config';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LearnService {
  baseUrl: any = webApi.baseUrl;
  private headers = new HttpHeaders();
  getCourseListUrl = this.baseUrl + webApi.apiUrl.get_all_course_list;

  constructor(public http: HttpClient) { }

  public getCourseList(learnData: any): Promise<any> {
    return this.http.post(this.getCourseListUrl, learnData , {headers: this.headers})
    .toPromise()
    .then(response => {
     return response = response;
    })
    .catch(this.handleError);
  }

  private handleError(error: Response|any) {
    return Promise.reject(error.message || error);
  }
}
