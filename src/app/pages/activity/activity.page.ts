import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from '../../components/image-viewer/image-viewer.component';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActivityPage implements OnInit {
  activityData = {
    id: '01',
    headerImg: './assets/img/card/2.jpg',
    courseName: 'User Experience Beginner Course',
    activityTitle: 'Six Years With a Stress-Free App ',
    activitySubTitle: '(and how to try your own low-stress experiment)',
    authorAvtar: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
    authorName: 'Amberlee Pozar',
    date: 'Nov 27',
    // tslint:disable-next-line:max-line-length
    desc1: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit,eubibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam veliaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.',
    desc2: './assets/img/card/2.jpg',
    // desc2: './assets/video/background-480.mp4',
    // tslint:disable-next-line:max-line-length
    desc3: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit,eubibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.. In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer et elit eget elit facilisis tristique. Nam veliaculis mauris. Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem leo, vehicula at nibh quis, facilisis accumsan turpis.',
    type: 'image',
    // type: 'video'
  };

  constructor(private videoPlayer: VideoPlayer, public modalController: ModalController, public router: Router) {}

  ngOnInit() {
  }

  async viewImage(src: string, title: string = '', description: string = '') {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        imgSource: src,
        imgTitle: title,
        imgDescription: description
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

  async playVideo(src: string) {
    // Playing a video.
    this.videoPlayer.play(src).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }

  goToModules() {
    this.router.navigateByUrl('/module');
  }

  shareActivity() {
  }

  saveActivity() {
  }

}
