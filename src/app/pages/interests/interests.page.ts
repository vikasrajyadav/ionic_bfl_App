import { Platform } from '@ionic/angular';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InterestsService } from '../../api/interests/interests.service';
import { Storage } from '@ionic/storage';
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.page.html',
  styleUrls: ['./interests.page.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class InterestsPage implements OnInit {
  public contentHeight: number;
  public additionalheight: number;
  public footer: number;

  public skills: any;

  interestData: any;
  currentUserData: any;
  selectedInterests: any;

  constructor(public plt: Platform, private router: Router, public interestService: InterestsService, public storage: Storage) {
    this.footer = 130;
    if (this.plt.is('android')) {
      this.additionalheight = 103;
    } else if (this.plt.is('ios')) {
      this.additionalheight = 60;
    }
    this.contentHeight = window.innerHeight - (this.footer + this.additionalheight);

  }

  ngOnInit() {
    this.getUserData();
  }

  goToDashboard() {
    this.router.navigateByUrl('/tabs');
  }

  getUserData() {
    // this.currentUserData = this.storage.get('currentUser');
    this.currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    this.getInterests();
    // return new Promise((resolve, reject) => {
    //   this.storage.ready().then(() => {
    //     console.log('Interest storage ready ');
    //     this.storage.get('currentUser').then((val) => {
    //       console.log('Interest currentUser ', val);
    //       if (val) {
    //         this.currentUserData = val;
    //         this.getInterests();
    //         resolve(true);
    //       } else {
    //         resolve(false);
    //       }
    //     });
    //   });
    // });
  }

  getInterests() {
    const intData = {
      uId : this.currentUserData.id,
      tId : this.currentUserData.tenantId,
      type : 'app'
    };

    this.interestService.getInterestsList(intData).then(res => {
      if (res.type === true) {
        this.skills = res.data;
        console.log('Interest res', res);
      }
    }, err => {
      console.log(err);
    });
  }

  makeSelectedTagDataReady() {
    const tagsData = this.skills;
    if (tagsData.length > 0) {
      let tagsString = '';
      for (let i = 0; i < tagsData.length; i++) {
        const tag = tagsData[i];
        if (tagsString !== '') {
          tagsString += '|';
        }
        if (tag.isSelected) {
          if (String(tag.tag) !== '' && String(tag.tag) !== null) {
            tagsString += tag.tag;
          }
        }
      }
      // return tagsString;
      this.selectedInterests = tagsString;
    }
  }

  addEditInterests() {
    this.makeSelectedTagDataReady();

    const selectedInterestsData = {
      uId : this.currentUserData.id,
      tId : this.currentUserData.tenantId,
      tags : this.selectedInterests
    };

    console.log('selectedInterestsData', selectedInterestsData);

    if (this.selectedInterests) {
      this.interestService.addEditInterests(selectedInterestsData).then(res => {
        if (res.type === true) {
          console.log('Interest res', res);
          this.goToDashboard();
        }
      }, err => {
        console.log(err);
      });
    }

  }

}
