import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent implements OnInit {

  public eventos: any = []
  public eventosFiltrados: any = []
  larguraImagem: number = 150
  margemImagem: number = 2
  exibirImagem: boolean = true
  private _filtroLista: string = ""


  public get filtroLista(): string {
    return this._filtroLista
  }

  public set filtroLista( value: string) {
    this._filtroLista = value
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos
  }

  filtrarEventos(filtrarPor: string): any {
      filtrarPor = filtrarPor.toLocaleLowerCase()
      return this.eventos.filter(
        //                   evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
        //            (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1
        (evento: { tema: string, local: string; }) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1

      )
  }

  constructor(private http: HttpClient) { }

  ngOnInit() : void {
      this.getEventos();
  }

  alterarImagem() {
    this.exibirImagem = !this.exibirImagem
  }

  FiltroLista() {

  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => {
        this.eventos = response
        this.eventosFiltrados = response
      },
      error => console.log(error)
    );
  }

}



