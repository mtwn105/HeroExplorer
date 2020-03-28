import { Component, OnInit, Input } from "@angular/core";
import { Result } from '../model/Model';

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  @Input("searchResults") searchResults: Result[];

  constructor() {}

  ngOnInit() {}


}
