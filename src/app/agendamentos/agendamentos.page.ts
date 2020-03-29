import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public loadingController: LoadingController
    ) { }

  agendamentos: any = [];

  ngOnInit() {
    this.carregaAgendamentos();
  }

  doRefresh(event){
    
    setTimeout(() => {
      this.carregaAgendamentos();
      event.target.complete();
    }, 2000);
  }

  async load(){
    const loading = await this.loadingController.create({
      message: 'Buscando consultas...',
      duration: 2000
    });
    await loading.present();
  }

  carregaAgendamentos(){
    this.load();
    this.agendamentos = [];
    for(let i = 1; i<=12; i++){
      let mes =  i<10?`0${i}`:i;
      this.agendamentos.push(
      {
        paciente: 'Leonardo Mauricio',
        data: '23/'+mes+'/2020',
        procedimento: 'Consulta',
        plano: 'Unimed',
        medico: 'Carlito Lima',
        status: 'Realizada'
      });
    }
  }

}
