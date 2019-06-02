export class Anime {
  title: string;
  waifuName: string;
  likes: number;

  constructor(title: string, waifuName: string) {
    this.title = title;
    this.waifuName = waifuName;
    this.likes = 0;
  }

  addLike() {
    this.likes += 1;
  }
}
