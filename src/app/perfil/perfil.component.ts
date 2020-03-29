import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  data;
  constructor(
    private navParams: NavParams,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.data = this.navParams.get('data');
    console.log(this.data)
  }

  logout(){

  }

  close() {
    this.popoverController.dismiss();
  }

}
