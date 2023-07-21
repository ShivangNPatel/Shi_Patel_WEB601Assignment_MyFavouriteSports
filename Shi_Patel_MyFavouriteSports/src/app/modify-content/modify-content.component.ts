import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from '../services/message.service';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';


@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {

  newSong: any = {};
  @Output() addSongEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog, private MessageService: MessageService){}

  openDialog(){
    const dialogRef = this.dialog.open(AddContentDialogComponent,{
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(newSongFromDialog => {
      if(newSongFromDialog){
        if(newSongFromDialog.title && newSongFromDialog.description && newSongFromDialog.creator){
          this.newSong = newSongFromDialog;
          this.addNewSong();
        } else {
          this.MessageService.add('No content added. Required fields were empty');
        }
      }
    });
  }

  addNewSong(){
    this.addSongEvent.emit(this.newSong);
    this.newSong = {};
  }

}