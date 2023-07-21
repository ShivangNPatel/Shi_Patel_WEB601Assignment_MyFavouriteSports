import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SongServiceService } from '../services/sports-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultSong: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKFq8rF0v5vU5fpK5TyInezlmbtHgTt042XyKQe2EpJaOlR6Fjgs6HSdNqRpeyNHPdIU&usqp=CAU';

  constructor(private SongServiceService: SongServiceService){
    
  }

  ngOnInit() {
    this.SongServiceService.getSongs().subscribe(songs => this.contents = songs );
  }

  addNewSong(newSong: Content){
    this.SongServiceService.addSong(newSong).subscribe(newSongFromServer => {
      this.contents.push(newSongFromServer);
      this.contents = [...this.contents];
    });
  }


  searchByTitle() {
    const matchingSong = this.contents.find(song => song.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`.card`);
    if(matchingSong){
      this.titleFound = true;
      cardElements.forEach(card => {
        if(parseInt(card.id) === matchingSong.id){
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }
}