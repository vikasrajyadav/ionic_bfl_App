import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsPage {

  constructor(private storage: Storage, private router: Router) { }

  doLogout() {
    this.storage.remove('currentUser', );
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
