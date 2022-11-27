import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle = 'Conversor';
  isNotLogin = true;
  getDat: any[] = [];
  constructor(public _services: GetapiService) {

    this._services.getDataEuro<any[]>("").subscribe(data => {
      this.getDat = data;
      console.log(this.getDat)


    })
    this._services.getDataEuro<any[]>("").subscribe(data => {
      this.getDat = data;
      console.log(this.getDat)


    })
  }
  ngOnInit() {
  }

}
