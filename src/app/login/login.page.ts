import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  erroMsgUser='';
  erroMsgPassword='';
  erroUser=false;
  erroPassword=false;

  constructor(
    private router: Router,
    public loadingController: LoadingController,
    private storage: Storage
    ) {
      this.storage.clear();
    }

  ngOnInit() {
    this.storage.clear();
  }

  login(form: NgForm){
    console.log(form.value.user, form.value.password)
    if(!form.value.user){
      this.erroUser  = true;
      this.erroMsgUser = 'Preencha o campo usuário!'
      return false;
    }
    this.erroUser = false; 

    if(!form.value.password){
      this.erroPassword  = true;
      this.erroMsgPassword = 'Preencha o campo senha!'
      return false;
    }
    this.erroPassword = false;

    this.load();
    setTimeout(() => {
      this.loadingController.dismiss();
      this.storage.set('isLogado', true);
      this.router.navigate(['/tabs']);
    }, 2000);
    console.log('logado com sucesso.')

  }
  async load(){
    const loading = await this.loadingController.create({
      message: 'Autenticando...'
    });
    await loading.present();
  }

}
