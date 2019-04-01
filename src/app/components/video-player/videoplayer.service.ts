import { Injectable, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class VideoTrack {
  src: string;
  title: string;
  width: number;
  height: number;
  autoplay: boolean;
  preload: boolean;
  loop: boolean;
  quality: boolean;
  download: boolean;
  fullscreen: boolean;
  keyboard: boolean;
  color: string;
  spinner: string;
  poster: string;
  currentTime: number;
  }

@Injectable()
export class VideoPlayerService {

    track: VideoTrack;
    duration: number;
    activity: any;
    constructor(private _http: HttpClient) {
      this.track = {
        src : 'https://bhaveshedgetest.s3.ap-south-1.amazonaws.com/mov_bbb_%281%29.mp4',
        title : 'NASA Rocket Launch',
        width : 600,
        height : 337.5,
        autoplay : false,
        preload : true,
        loop : false,
        quality : true,
        download : false,
        fullscreen : true,
        keyboard : true,
        color : 'primary',
        spinner : 'spin',
        poster : '../assets/images/videoplay.png',
        currentTime: 0
      };

    }

    getVideoTrack() {
      return this.track;
    }
    setVideoTrack(request) {
      this.track.src = request.reference;
      this.track.title = request.name;
    }
    public setVideoDuration(duration) {
      this.duration = duration;
    }
    public getVideoDuration() {
      return this.duration;
    }
    public setActivity(activity) {
      this.activity = activity;
    }
    public getActivity() {
      return this.activity;
    }

}
