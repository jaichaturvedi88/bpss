import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trust-members',
  templateUrl: './trust-members.component.html',
  styleUrls: ['./trust-members.component.scss']
})
export class TrustMembersComponent implements OnInit {
  members:any = [
    {
      src: '../../assets/images/updates/updates1.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }, {
      src: '../../assets/images/updates/updates2.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }, {
      src: '../../assets/images/updates/updates3.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }, {
      src: '../../assets/images/updates/updates4.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }, {
      src: '../../assets/images/updates/updates5.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }, {
      src: '../../assets/images/updates/updates6.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }, {
      src: '../../assets/images/updates/updates7.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }, {
      src: '../../assets/images/updates/updates8.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }, {
      src: '../../assets/images/updates/updates9.jpeg',
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]

  ngOnInit() {
    this.members.forEach((member:any)=> {
      fetch('https://randomuser.me/api/1.4/?nat=in&gender,name,picture')
        .then(response => response.json())
        .then((data: any) => {
          console.log(data.results[0])
          member.src = data.results[0].picture.large;
          let name = data.results[0].name;
          let formattedName = name.first + ' ' + name.last;;
          member['name'] = formattedName;
          console.log(formattedName);
        })
    })

    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))

  }

  getFakeImages() {

  }
}
