import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {

  nacCtrl = inject(NavController)

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
  }

  volver(){
    this.navCtrl.navigateForward('/home');
  }
}
