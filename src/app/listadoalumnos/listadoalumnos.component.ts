import { Alumno } from './../modelos/alumno.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.css']
})
export class ListadoalumnosComponent implements OnInit {
  mostrarForm: boolean = false;
  newAlumno: boolean = false;
  public alumnos: Array<Alumno> = [
    { id: 1, nombre: 'Juan', apellidos: 'Gutierrez', ciudad: 'Madrid' },
    { id: 2, nombre: 'Pedro', apellidos: 'Lopez', ciudad: 'Sevilla' },
    { id: 3, nombre: 'Alex', apellidos: 'pipo', ciudad: 'Valencia' },
    { id: 4, nombre: 'Josito', apellidos: 'Perez', ciudad: 'Torremolinos' }
  ];
  constructor() { }

  ngOnInit() {
  }

  modificarForm(alumno) {
    this.mostrarForm = true;
    if (alumno != null) {
      
    }
  }

  toggleFormDisplay(){
    this.mostrarForm = !this.mostrarForm;
  }

}
