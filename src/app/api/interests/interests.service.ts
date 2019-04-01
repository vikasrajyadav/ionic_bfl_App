import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { webApi } from '../../../config';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {
  baseUrl: any = webApi.baseUrl;
  private headers = new HttpHeaders();
  getInterestsListUrl = this.baseUrl + webApi.apiUrl.getInterestList;
  addInterestUrl = this.baseUrl + webApi.apiUrl.addInterests;
  constructor(public http: HttpClient) { }

  public getInterestsList(interestData: any): Promise<any> {
    return this.http.post(this.getInterestsListUrl, interestData , {headers: this.headers})
    .toPromise()
    .then(response => {
     return response = response;
    })
    .catch(this.handleError);
  }

  public addEditInterests(interestData: any): Promise<any> {
    return this.http.post(this.addInterestUrl, interestData , {headers: this.headers})
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
