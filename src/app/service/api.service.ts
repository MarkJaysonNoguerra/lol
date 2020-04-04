import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://ddragon.leagueoflegends.com/';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: align
  getVersion() {
    return this.http.get(this.baseUrl + 'realms/na.json').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  getChampionList(version: any) {
    return this.http.get(this.baseUrl + 'cdn/' + version + '/data/en_US/champion.json').pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  getChampionDetail(version, name) {
    return this.http.get(this.baseUrl + 'cdn/' + version + '/data/en_US/champion/' + name + '.json').pipe(
      map((response: any) => {
        return response;
      })
    )
  }
  getItems(version) {
    return this.http.get(this.baseUrl + 'cdn/' + version + '/data/en_US/item.json').pipe(
      map((response: any) => {
        return response;
      })
    )
  }
}
