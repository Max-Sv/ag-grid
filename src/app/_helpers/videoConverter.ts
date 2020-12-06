import { VideoModel } from '../_models/video.model';

export function VideoMapper(data: any): VideoModel {
  console.log('data:', data);
  // const videoId = data.id;
  const { publishedAt, description, title } = data.snippet;
  const video = new VideoModel(publishedAt, description, title);
  return video;
}
