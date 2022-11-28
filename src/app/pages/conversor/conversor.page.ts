import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';


interface SerieInterface {
  fecha: string;
  valor: number;
}

interface DataInterface {
  serie: SerieInterface[];
}


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})


export class ConversorPage implements OnInit {

  pageTitle = 'Conversor';
  isNotLogin = true;
  dataEuro = null;
  dataEuroAPeso = null;
  dataDolar = null;
  dataDolarAPeso = null;
  getDat:DataInterface = {
   serie: []
  };
  constructor(public _services: GetapiService) {

    this._services.getDataEuro<any[]>("").subscribe(data => {
      this.getDat = data as unknown as DataInterface;
      const valor = this.getDat.serie[0].valor;
      console.log({ valor });
      this.dataEuro = valor;
      this.dataEuroAPeso = valor/100;
    })
    this._services.getDataDolar<any[]>("").subscribe(data => {
      this.getDat = data as unknown as DataInterface;
      this.getDat = data as unknown as DataInterface;
      const valor = this.getDat.serie[0].valor;
      console.log({ valor });
      this.dataDolar = valor;
      this.dataDolarAPeso = valor/100;


    })
  }
  ngOnInit() {
  }

}
