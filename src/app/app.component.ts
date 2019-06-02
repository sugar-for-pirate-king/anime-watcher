import { Component } from "@angular/core";
import { Anime } from "./anime/anime.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  animes: Anime[];

  constructor() {
    this.animes = [];
  }

  addAnime(title: HTMLInputElement, waifuName: HTMLInputElement) {
    let newAnime = new Anime(title.value, waifuName.value);
    this.animes.push(newAnime);
    title.value = "";
    waifuName.value = "";
    return false;
  }
}
