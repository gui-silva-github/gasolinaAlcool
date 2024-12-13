import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public logo: string = "../../assets/logo.png"

  public imagem: string = ""

  public resultado: string = "Resultado"

  public precoAlcool: string = ""
  public precoGasolina: string = ""

  constructor() {}

  ngOnInit(): void {
  }

  public calcular(): void{

    if(this.precoAlcool && this.precoGasolina){

      let pAlcool = parseFloat(this.precoAlcool)

      let pGasolina = parseFloat(this.precoGasolina)

      let res = (pAlcool/pGasolina)

      if(res>=0.7){
        this.resultado = "Melhor utilizar gasolina!"
        this.imagem = "../../assets/gasolina.png"
      } else {
        this.resultado = "Melhor utilizar álcool!"
        this.imagem = "../../assets/alcool.png"
      }

    } else{
      this.resultado = "Preencha corretamente os campos."
    }

  }

}
