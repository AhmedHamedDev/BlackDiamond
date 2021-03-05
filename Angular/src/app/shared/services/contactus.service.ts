import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ContactusService {
//private _contactUrl = "http://localhost:8000/"
private _contactUrl = "http://127.0.0.1:3000/contactus"
 
  constructor(private _httpClient : HttpClient) { }
 
  submitMessage(message){
    return  this._httpClient.post<any>(this._contactUrl,message);
  }
}