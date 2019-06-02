import { Component, OnInit, Input } from "@angular/core";
import { Anime } from "./anime.model";

@Component({
  selector: "app-anime",
  templateUrl: "./anime.component.html",
  styleUrls: ["./anime.component.css"]
})
export class AnimeComponent implements OnInit {
  @Input() anime: Anime;

  constructor() {}

  addLike() {
    this.anime.addLike();
    return false;
  }

  ngOnInit() {}
}
