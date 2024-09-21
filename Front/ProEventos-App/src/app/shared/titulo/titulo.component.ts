import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})
export class TituloComponent  implements OnInit {

  @Input() titulo!: string;
  @Input() iconClass = 'fa fa-user';
  @Input() subtitulo = 'Desde 2011'
  constructor() {

  }

  ngOnInit(): void {

  }

}
