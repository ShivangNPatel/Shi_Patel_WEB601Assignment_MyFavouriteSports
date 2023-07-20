import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { SportsServiceService } from './services/sports-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Shi_Patel_MyFavouriteSports';
  songId:number = 8;
  oneSongById: any = {};

  constructor(private SportsServiceService: SportsServiceService){}

  ngOnInit(){
    this.findSongById();
  }

  findSongById(){
    this.SportsServiceService.getSongById(this.songId).subscribe(result => {
      if (typeof result === "object"){
        this.oneSongById = result;
      }
    });
  }
}
