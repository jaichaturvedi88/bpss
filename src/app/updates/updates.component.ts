import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.scss']
})
export class UpdatesComponent implements OnInit {
  public isUpdatesPage = false;

  allCards = [
    {
      src:'assets/images/updates/updates1.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates2.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates3.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates4.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates5.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates6.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates7.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates8.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates9.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates10.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates12.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },{
      src:'assets/images/updates/updates14.jpeg',
      title:"Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]
  cards: Array<any> = [];

  constructor(private router: Router) {
    this.isUpdatesPage = this.router.url === '/gallery' ? true : false;
  }

  ngOnInit(): void {
    this.bindcards();
  }

  bindcards(){
    if(this.isUpdatesPage){
      this.cards = [...this.allCards];
    } else {
      this.cards = this.allCards.slice(6);
    }
  }
}
