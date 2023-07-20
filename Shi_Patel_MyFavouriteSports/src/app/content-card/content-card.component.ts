import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() song: any;
  @Input() class: string = '';
  defaultSong: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HG2Zex_a1oIbRqjGFR7SzPXWp-9VjaCNmw&usqp=CAU';

  handleClick(content: Content){
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
}