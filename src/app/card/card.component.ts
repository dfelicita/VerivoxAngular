import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() specs: any;
  promoUrl: string;

  constructor() { }

  ngOnInit() {
    console.log('Specs:',this.specs);
    this.promoUrl = this.specs.signup.desktop ? this.specs.signup.desktop.url : this.specs.signup.responsive ? this.specs.signup.responsive.url : "#";
  }

}
