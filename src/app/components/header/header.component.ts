import { Component, Input, OnInit } from '@angular/core';
import { Recursos } from 'src/recursos';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() showTitle: boolean;

  constructor(
    public recursos: Recursos
  ) { }

  ngOnInit() {
  }

}
