import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';
@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
  titulo: string = "Probando interpolacion con clases";
  foto: string = "../assets/tux.jpg";
  alumno1 = new Alumno(1, 'Josito', 'Gutiérrez', 'Torremolinos');
  constructor() { }

  ngOnInit() {
  }

  getPueblo() { return this.alumno1.ciudad; }
}
