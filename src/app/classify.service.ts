import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassifyService {
  private apiUrl = 'https://e56a-189-191-159-48.ngrok-free.app/classify';

  constructor(private http: HttpClient) { }

  classifyText(message: string): Observable<any> {
    return this.http.post(this.apiUrl, { message });
  }
}