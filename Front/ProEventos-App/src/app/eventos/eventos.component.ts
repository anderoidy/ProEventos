import { EventoService } from '../services/evento.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Evento } from '../models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DateTimeFormatPipe } from '../helpers/DateTimeFormat.pipe';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
  //providers: [EventoService]
})
export class EventosComponent implements OnInit {

  public modalRef?: BsModalRef;
  public eventos: Evento[] = []
  public eventosFiltrados: Evento[] = []

  public larguraImagem = 150
  public margemImagem = 2
  public exibirImagem = true
  private filtroListado = ""

  public get filtroLista(): string {
    return this.filtroListado
  }

  public set filtroLista( value: string) {
    this.filtroListado = value
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos
  }

  public filtrarEventos(filtrarPor: string): Evento[] {
      filtrarPor = filtrarPor.toLocaleLowerCase();
      return this.eventos.filter(
        evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
      )
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService
  ) { }

  ngOnInit() : void {
      this.getEventos();
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem
  }

  public getEventos(): void {
    this.eventoService.getEventos().subscribe({
        next: (eventos: Evento[]) => {
          this.eventos = eventos;
          this.eventosFiltrados = this.eventos
        },
        error: (error: any) => console.log(error)
      });
  }

    public openModal(template: TemplateRef<void>): void {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }

    confirm(): void {
      this.modalRef?.hide();
    }

    decline(): void {
      this.modalRef?.hide();
    }
}



