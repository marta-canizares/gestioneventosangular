import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevoevento',
  templateUrl: './nuevoevento.component.html',
  styleUrls: ['./nuevoevento.component.css']
})
export class NuevoeventoComponent implements OnInit {


  eventos: {
    id: string,
    titulo: string,
    facilitador: string,
    fecha: string,
    email: string,
    hora: string,
    maxparticipantes: number,
    descripcion: string;
  };

  arrEventos: any[];
  todayString: string;


  constructor() {
    this.arrEventos = [{
      id: 1,
      titulo: 'Charla de Javasript',
      facilitador: 'Manuel',
      fecha: '2020-5-25',
      email: 'manuel@mail.com',
      hora: '15:00',
      maxparticipantes: 10,
      numparticipantes: 0,
      descripcion: 'curso online'
    },
    {
      id: 2,
      titulo: 'Curso de Angular',
      facilitador: 'Juan',
      fecha: '2020-5-26',
      email: 'juan@mail.com',
      hora: '19:00',
      maxparticipantes: 10,
      numparticipantes: 0,
      descripcion: 'curso presencial'
    },
    {
      id: 3,
      titulo: 'Curso de nodeJs',
      facilitador: 'Marina',
      fecha: '2020-5-13',
      email: 'marina@mail.com',
      hora: '20:00',
      maxparticipantes: 10,
      numparticipantes: 0,
      descripcion: 'curso para programadores'
    }];

    this.eventos = {
      id: '',
      titulo: '',
      facilitador: '',
      fecha: '',
      email: '',
      hora: '',
      maxparticipantes: 0,
      descripcion: ''
    };

    this.todayString = '';



  }

  ngOnInit(): void {
    // console.log(this.arrEventos);
  }


  addEvent() {
    this.arrEventos.push(this.eventos);
  }



  guardaParticipantes(valor, jevento, i) {

    if (valor <= jevento.maxparticipantes) {
      jevento.numparticipantes = valor;
      this.arrEventos[i] = jevento;
      console.log(this.arrEventos)

    } else {
      alert('numero de participantes superado, no es posible guardarlo')
    }

  }

  today() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return this.todayString = year + '-' + month + '-' + day;
  }



  deleteEvent(index, evento) {
    // console.log(index);
    if (evento.fecha < this.todayString) {
      alert('el evento no se puede borrar')

    } else {
      this.arrEventos.splice(index, 1);
    }

  }

}
