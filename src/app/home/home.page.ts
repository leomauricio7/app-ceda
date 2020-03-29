import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public popoverController: PopoverController) {}

  public redeSocial(page){
    switch(page){
      case 'facebook':
        window.open('https://www.facebook.com/ClinicaCedaParnamirim', '_system');
        break;
      case 'instagram':
        window.open('http://instagram.com/_u/clinicacedarn', '_system');
        break;
      case 'whatsapp':
        window.open('http://api.whatsapp.com/send?1=pt_BR&phone=5584991686893', '_system');
        break;
    }
  }

  async profile(ev: any){
    console.log('click')
      const popover = await this.popoverController.create({
        component: PerfilComponent,
        event: ev,
        translucent: true,
        componentProps: { data: {
          nome: 'Leoanardo Mauricio',
          codigo: '121213233'
        } }
      });
      return await popover.present();
    }

}
