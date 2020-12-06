export class VideoModel {
  constructor(publishedAt: string, description: string, title: string) {
    this.publishedAt = publishedAt;
    this.description = description;
    this.title = title;

  }
  // public id: string;
  // public thumbnail: string;
  public title: string;
  public publishedAt: string;
  public description: string;
}
