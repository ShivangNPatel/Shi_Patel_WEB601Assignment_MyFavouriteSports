import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contextDB';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  constructor(private http: HttpClient , private MessageService: MessageService) { }

  getSongs(): Observable<Content[]>
  {
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/songs");
  }

  addSong(newSong: Content): Observable<Content>{
    this.MessageService.add(`New Sport added`);
    return this.http.post<Content>("/api/songs", newSong, this.httpOptions);
  }

  getSongById(id: number): Observable<any> {
    const song = contents.find(content => content.id === id);

    if (song) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(song);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }

}