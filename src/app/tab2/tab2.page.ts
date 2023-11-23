import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string;



  constructor(
    private shoppingList: ShoppingItemsService,
    private alertController: AlertController
  ) { }


  addItem(){
    console.log(this.item);

    if(!this.shoppingList.existsItem(this.item)){
      this.shoppingList.addItem(this.item);
      this.item = '';
      console.log(this.shoppingList.items);
      this.alertSuccess();
    }else{
      this.alertError();
    }

  }


  async alertSuccess(){
    const alert = await this.alertController.create({
      header: 'Exito',
      message: 'Item añadido!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertError(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El item ya existe',
      buttons: ['OK']
    });

    await alert.present();
  }


}
