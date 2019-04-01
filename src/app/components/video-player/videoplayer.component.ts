import { Component, HostBinding, Input, OnDestroy,
  ChangeDetectorRef, Renderer2, ViewChild, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
// import { PlayerService, Track } from '../../@core/utils/player.service';
import { VideoPlayerService, VideoTrack } from './videoplayer.service';
// import {CourseServiceProvider} from '../../service/course-service';
// import {MatVideoComponent} from 'mat-video/mat-video';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class VideoPlayerComponent implements OnInit , OnDestroy , AfterViewInit {
  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;
  @ViewChild('vid') video: any; // HTMLVideoElement;

  version = '1.1.1'; // VERSION.full;
  appversion = '2.3.2'; // (<any>buildInfo)['version'];

  ngclass = ''; // 'mat-video-responsive';

  videoTrack: VideoTrack;

  currentProgress: any = 0;
  constructor(private playerService: VideoPlayerService, public cdf: ChangeDetectorRef,
    private renderer: Renderer2) {
    // , public couserService: CourseServiceProvider
  }
  ngOnInit() {
    this.videoTrack = this.playerService.getVideoTrack();
    this.setProgress(this.videoTrack.currentTime);
    // this.setPlayerDuration();

    // this.video.addEventListener('ended', () => console.log('video ended'));

  }
  ngAfterViewInit() {
    this.renderer.listen(this.video.video.nativeElement, 'loadeddata', () => {
      console.log('video loadeddata');
      const activity = this.playerService.getActivity();
      if (activity.contentwatchedtime) {
        this.setProgress(activity.contentwatchedtime);
      }
    });
    this.renderer.listen(this.video.video.nativeElement, 'ended', () => {
      console.log('video ended');
      this.saveAudioActivity('Y');
    });
    this.renderer.listen(this.video.video.nativeElement, 'play', () => {
      console.log('video play');
      this.saveAudioActivity(null);
    });
    this.renderer.listen(this.video.video.nativeElement, 'pause', () => {
      console.log('video pause');
    });
    this.renderer.listen(this.video.video.nativeElement, 'playing', () => {
      console.log('video playing');
    });
  }
  setProgress(time) {
    this.video.video.nativeElement.currentTime = time;
  }
  getProgress() {
   this.currentProgress = this.video.video.nativeElement.currentTime;
  }
  setPlayerDuration() {
    this.playerService.setVideoDuration(this.video.video.nativeElement.duration);
  }
  ngOnDestroy() {
    this.saveAudioActivity(null);
      this.getProgress();
  }
  saveAudioActivity(status) {
    // this.playerService.setAudioDuration(this.player.duration);
    const activity = this.playerService.getActivity();
    if (activity.completionstatus === 'Y') {
      activity.completionstatus = 'Y';
    } else if (status === 'Y') {
      activity.completionstatus = 'Y';
    } else {
      activity.completionstatus = 'UP';
    }
    activity.contenttime = this.video.video.nativeElement.duration;
    activity.contentwatchedtime = this.video.video.nativeElement.currentTime;
    // this.couserService.saveActivityCompletion(activity);
  }
}
