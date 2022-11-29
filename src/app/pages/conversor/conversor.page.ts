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
  dataDolar = null;
  monedaEuro: any = {
    euro: 0,
  };
  monedaDolar: any = {
    dolar: 0,
  };
  getDat: DataInterface = {
    serie: [],
  };
  constructor(private services: GetapiService) {
    this.services.getDataEuro().then((data) => {
      this.getDat = data as unknown as DataInterface;
      const valor = this.getDat.serie[0].valor;
      console.log({ valor });
      this.dataEuro = valor;
    });
    this.services.getDataDolar().then((data) => {
      this.getDat = data as unknown as DataInterface;
      const valor = this.getDat.serie[0].valor;
      console.log({ valor });
      this.dataDolar = valor;
    });
    // this._services.getDataEuro<any[]>("").subscribe(data => {
    //   this.getDat = data as unknown as DataInterface;
    //   const valor = this.getDat.serie[0].valor;
    //   console.log({ valor });
    //   this.dataEuro = valor;
    //   this.dataEuroAPeso = valor;
    // })
    // this._services.getDataDolar<any[]>("").subscribe(data => {
    //   this.getDat = data as unknown as DataInterface;
    //   this.getDat = data as unknown as DataInterface;
    //   const valor = this.getDat.serie[0].valor;
    //   console.log({ valor });
    //   this.dataDolar = valor;
    //   this.dataDolarAPeso = valor;
    // })
  }
  clickConvertEuro() {
    this.monedaEuro.euro = this.monedaEuro.euro * this.dataEuro;
    console.log(this.monedaEuro.euro);
    console.log('euro');
  }
  clickConvertDolar() {
    this.monedaDolar.dolar = this.monedaDolar.dolar * this.dataDolar;
    console.log(this.monedaDolar.dolar);
    console.log('dolar');
  }

  ngOnInit() { }
}
