import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-vouches',
  templateUrl: './vouches.page.html',
  styleUrls: ['./vouches.page.scss'],
})
export class VouchesPage implements OnInit {

  vouches: any = [];

  constructor(
    public alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.carregaVouches();
  }

  doRefresh(event){
    
    setTimeout(() => {
      this.carregaVouches();
      event.target.complete();
    }, 2000);
  }

  async load(){
    const loading = await this.loadingController.create({
      message: 'Buscando vouches...',
      duration: 2000
    });
    await loading.present();
  }

  carregaVouches(){
    this.load();
    this.vouches = [];
    for(let i = 1;  i<=10; i++){
    this.vouches.push(
      {
        nome: 'Vouche '+i,
        descricao: 'Vouche teste '+i
      }
    );
  }

  }

}
