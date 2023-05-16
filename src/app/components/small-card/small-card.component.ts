import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input() id: string = '0';
  @Input()
  photoCover: string =
    'https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png';
  @Input()
  cardTitle: string = 'Titulo do cartão';
  @Input()
  cardDescription: string =
    'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla';

  constructor() {}

  ngOnInit(): void {}
}
