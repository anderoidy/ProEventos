import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})
export class TituloComponent  implements OnInit {

  @Input() titulo!: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2011';
  @Input() botaoListar = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }

  listar(): void {
    this.router.navigate([`/${this.titulo.toLowerCase()}/lista`]);
  }

}
