import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Note {
  title: string;
  description: string;
  done?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:5233/Note';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<{ success: boolean; data: Note[] }> {
    return this.http.get<{ success: boolean; data: Note[] }>(this.apiUrl);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }

  updateNote(noteId: string, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/noteId?noteId=${noteId}`, note);
  }

  deleteNote(noteId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/noteId?noteId=${noteId}`);
  }
}
