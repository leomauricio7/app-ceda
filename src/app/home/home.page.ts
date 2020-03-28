import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

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

  public router(page){
    
  }
}
