import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Evento } from '../../../models/Evento';
import { EventoService } from '../../../services/evento.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrl: './evento-lista.component.scss'
})
export class EventoListaComponent {

  modalRef?: BsModalRef;
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
      );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() : void {
    this.spinner.show();
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
        error: (error: any) => {
          this.spinner.hide();
          this.toastr.error('Erro ao Carregar os Eventos', 'Erro');
        },
        complete: () => this.spinner.hide()
      });
  }

    public openModal(template: TemplateRef<void>): void {
      this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }

    confirm(): void {
      this.modalRef?.hide();
      this.toastr.success('Deletado', 'O Evento foi Deletado com Sucesso!');
    }

    decline(): void {
      this.modalRef?.hide();
    }
}
