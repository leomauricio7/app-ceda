import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  data;
  constructor(
    private navParams: NavParams,
    private popoverController: PopoverController,
    private router: Router
  ) { }

  ngOnInit() {
    this.data = this.navParams.get('data');
    console.log(this.data)
  }

  logout(){
    this.close();
    this.router.navigate(['/login'])
  }
  
  close() {
    this.popoverController.dismiss();
  }

}
