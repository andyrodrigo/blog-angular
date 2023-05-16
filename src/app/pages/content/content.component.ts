import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://www.logistec.com/wp-content/uploads/2017/12/placeholder.png';
  contentTitle: string = '';
  contentDescription: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((valor) => {
      //console.log(valor);
      this.id = valor.get('id');
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    console.log(id);
    if (id) {
      const result = dataFake.filter((article) => article.id === this.id)[0];
      console.log(result);
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
    }
  }
}
