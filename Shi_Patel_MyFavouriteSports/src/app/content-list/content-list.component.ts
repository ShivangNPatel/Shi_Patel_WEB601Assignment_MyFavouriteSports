import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {
  contentList: Content[] = [
    {
      id: 1,
      title: 'Cricket',
      description: 'One of the famous sport',
      creator: 'England',
      imgURL: 'https://4.bp.blogspot.com/-QyIkFxPedak/TZe_pW2PnLI/AAAAAAAAASE/dDz6DIaFnhI/s1600/131002.jpg',
      type: 'Sports, OutdoorGame',
      tags: ['Bat, Ball']
    },
    {
      id: 2,
      title: 'Badminton',
      description: 'indoor game played with 2 and 4 players',
      creator: 'India',
      imgURL: 'https://blog.playo.co/wp-content/uploads/2017/04/indian-badminton-player-ashwini-1536x1037.jpg',
      type: 'Sport, IndoorGame',
      tags: ['Shuttle, Cock']
    },
    {
      id: 3,
      title: 'Chess',
      description: 'Game of clever people',
      creator: 'India',
      imgURL: 'https://tse2.mm.bing.net/th?id=OIP.5VzfD4yIYpT4LbMWyldpFwHaEg&pid=Api&P=0',
      type: 'BoardGame, IndoorGame',
      tags: ['Black, White']
    }
  ];

  constructor() {}
}