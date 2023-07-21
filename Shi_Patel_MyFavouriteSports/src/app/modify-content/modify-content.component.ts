import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  newSong: any = {};
  @Output() addSongEvent = new EventEmitter<Content>();

  addNewSong(){
    this.addSongEvent.emit(this.newSong);
    this.newSong = {};
  }

}