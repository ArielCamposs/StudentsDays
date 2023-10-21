import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {PopoverController } from '@ionic/angular';
import { PopupComponentPage } from '../popup-component/popup-component.page';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private _router: Router,public popoverController: PopoverController) { }

  ngOnInit() {
  }

  goBack() {
    this._router.navigate(['/home']);
  }

  async presentPopover(ev: any){
    const popover = await this.popoverController.create({
      component: PopupComponentPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

 
    

}
