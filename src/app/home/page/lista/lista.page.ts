import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  showTitle: boolean = false;
  title: string = 'Logo';
  constructor() { }

  ngOnInit() {
  }

}
