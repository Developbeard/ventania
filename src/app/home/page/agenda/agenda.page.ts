import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  showTitle: boolean = true;
  title: string = 'Agenda';
  constructor() { }

  ngOnInit() {
  }

}
