import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LolService {
  private apiKey = "RGAPI-35e08d4c-694d-4358-b4e5-fe6f4bc91c2a";

  constructor(private http: HttpClient) { 
  }

  getChampionRotation(){
    const url = '/api/val/content/v1/contents?locale=fr-FR?api_key=' + this.apiKey;
    const url2 = 'https://fakestoreapi.com/products'
    return this.http.get(url2);
  }

  getChampionById(id: string){
    const url = 'https://fakestoreapi.com/products/' + id;
    return this.http.get(url);
  }
  
  
}
