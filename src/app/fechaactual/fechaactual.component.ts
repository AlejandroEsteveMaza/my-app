import { Alumno } from './../modelos/alumno.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  templateUrl: './fechaactual.component.html',
  styleUrls: ['./fechaactual.component.css']
})
export class FechaactualComponent implements OnInit {

  hoy: any = new Date();
  cursos: string[];
  public alumnos: Array<Alumno> = [
    { id: 1, nombre: 'Juan', apellidos: 'Gutierrez', ciudad: 'Madrid' },
    { id: 2, nombre: 'Pedro', apellidos: 'Lopez', ciudad: 'Sevilla' }
  ];
  constructor() {
    this.cursos = ['Angular', 'HTML', 'CSS', 'super-maric0n!!11!'];
  }

  getInfo(alumno) {
    alert(alumno.nombre + " " + alumno.apellidos);
  }

  ngOnInit() {
  }


}
