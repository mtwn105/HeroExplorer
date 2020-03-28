import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Md5 } from "ts-md5/dist/md5";
import { CharacterResult, Result } from "./model/Model";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: "root"
})
export class HeroesService {

  publicApiKey: string = "4f757397538d9bfe19275ed6ceb70cdb";
  privateApiKey: string = "02e309c803b8c98131fff6b5bb231bbe528e931f";

  constructor(private http: HttpClient) {}

  getHeroes(searchText: string): Observable<CharacterResult>{

    let ts = new Date().getMilliseconds().toString();
    let hashString = ts + this.privateApiKey + this.publicApiKey;
    let md5 = Md5.hashStr(hashString);

    return this.http
      .get<CharacterResult>(
        "https://gateway.marvel.com/v1/public/characters?nameStartsWith=" +
          searchText +
          "&apikey=4f757397538d9bfe19275ed6ceb70cdb&ts=" +
          ts +
          "&hash=" +
          md5
      )
      .pipe();
  }
}
