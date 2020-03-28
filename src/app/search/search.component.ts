import { HeroesService } from "./../heroes.service";
import { Component, OnInit } from "@angular/core";
import { Result } from "../model/Model";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  searchResults: Result[];
  searchText: string;

  constructor(public heroService: HeroesService) {}

  ngOnInit() {}

  exploreHero(searchText: string) {
    this.heroService.getHeroes(searchText).subscribe(results => {
      this.searchResults = results.data.results;
    });
  }
}
