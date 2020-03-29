import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.page.html',
  styleUrls: ['./financeiro.page.scss'],
})
export class FinanceiroPage implements OnInit {

  parcelas: any = [];

  constructor(
    public alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.carregaParcelas();
  }

  doRefresh(event){
    
    setTimeout(() => {
      this.carregaParcelas();
      event.target.complete();
    }, 2000);
  }

  async load(){
    const loading = await this.loadingController.create({
      message: 'Buscando parcelas...',
      duration: 2000
    });
    await loading.present();
  }

  carregaParcelas(){
    this.load();
    this.parcelas = [];
    for(let i = 1; i<=10; i++){
        let mes = i<10?`0${i}`:i;
        this.parcelas.push(
          {
            valor: '29,99',
            status: 'Paga',
            data: '10/'+ mes+'/2020'
          }
        );
    }
  }

}
