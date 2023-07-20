import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contextDB';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SportsServiceService {

  constructor(private MessageService: MessageService) { }

  getSongs(): Observable<Content[]>
  {
    const sports = contents;
    this.MessageService.add("Content array loaded!");
    return of(sports);
  }

  getSongById(id: number): Observable<any> {
    const sports = contents.find(content => content.id === id);

    if (sports) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(sports);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }

}