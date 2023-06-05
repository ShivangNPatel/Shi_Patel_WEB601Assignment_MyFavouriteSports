import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {
  contents: any[] =[
    {
      id: 1,
      title: 'Cricket',
      description: 'One of the famous sport',
      creator: 'England',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HG2Zex_a1oIbRqjGFR7SzPXWp-9VjaCNmw&usqp=CAU',
      type: 'OutdoorGames',
      tags: ['Bat, Ball']
    },
    {
      id: 2,
      title: 'Badminton',
      description: 'indoor game played with 2 and 4 players',
      creator: 'India',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKFq8rF0v5vU5fpK5TyInezlmbtHgTt042XyKQe2EpJaOlR6Fjgs6HSdNqRpeyNHPdIU&usqp=CAU',
      type: '',
      tags: ['Shuttle, Cock']
    },
    {
      id: 3,
      title: 'Chess',
      description: 'Game of clever people',
      creator: 'India',
      imgURL: 'https://tse2.mm.bing.net/th?id=OIP.5VzfD4yIYpT4LbMWyldpFwHaEg&pid=Api&P=0',
      type: 'IndoorGames',
      tags: ['Black, White']
    },
    {
      id: 4,
      title: 'Ludo',
      description: 'Game of clever people',
      creator: 'India',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmDPNAV-h7u9ImIwkb6R-nkK_0H1nFO4tAA&usqp=CAU',
      type: 'IndoorGames',
      tags: ['Dice, Board']
    },
    {
      id: 5,
      title: 'Baseball',
      description: 'Similar to cricket',
      creator: 'USA',
      imgURL: '',
      // imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnps-tj9mZ8bLvrk1nEpgmO9qB4VWjpKSfYQ&usqp=CAU',
      type: 'OutdoorGames',
      tags: ['Bat, Ball']
    },
    {
      id: 6,
      title: 'Football',
      description: 'Also known as Soccer',
      creator: 'Europe',
      imgURL: 'https://football-observatory.com/local/adapt-img/450/10x/IMG/logo/mr84-2.jpg?1681037790',
      type: 'OutdoorGames',
      tags: ['Ball, GoalKeeper']
    },
    {
      id: 8,
      title: 'Golf',
      description: 'we have to hit ball into hole',
      creator: 'Scotland',
      imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8xFESAWhIfNs7sbzDifFDvNvbPRFIbD74WzVouqTP7-_TDR5-efgJdaLwLgFt7OZNjcQ&usqp=CAU',
      type: 'OutdoorGames',
      tags: ['Ball, Hole']
    }
  ];

// Inside the Content-List component class
searchTitle: string = '';
searchResult: boolean = false; 
searchMessage: string = '';

searchByTitle() {
  this.searchResult = this.contents.some(content => content.title.toLowerCase() === this.searchTitle.toLowerCase());
  this.searchMessage = this.searchResult
    ? `Content with title "${this.searchTitle}" exists.`
    : `Content with title "${this.searchTitle}" doesn't exist.`;
  }
}