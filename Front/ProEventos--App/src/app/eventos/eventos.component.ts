import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent implements OnInit {

    public evento: any;

    constructor(private http: HttpClient) { }

    ngOnInit() : void {
        this.getEventos();
    }

    public getEventos(): void {
      this.http.get('https://localhost:5001/api/eventos').subscribe(
        response => this.evento = response,
        error => console.log(error)
      );
    }
}
