



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingCart';
  quantity:any=[0,1,2,3,4,5,6,7,8,9,10];
  oneplusQuantity: number;
  iphoneQuantity: number;
  oneplusMobile:number=30000;
  iphoneMobile:number=50000;



  iPhoneRemove() {
    document.getElementById("iphone").innerHTML = "";
  }
  
  onePlusRemove() {
    document.getElementById("oneplus").innerHTML = "";
  }

}
