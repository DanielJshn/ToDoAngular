import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from '../services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GetNoteDetailsPopupComponent } from "./popups/get-note-details-popup/get-note-details-popup.component";
import { CreateNotePopupComponent } from "./popups/create-note-popup/create-note-popup.component";

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, GetNoteDetailsPopupComponent, CreateNotePopupComponent],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  isPopupOpen = false;
  selectedNote: Note | null = null;
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getNotes().subscribe({
      next: (response) => {
        if (response?.data && Array.isArray(response.data)) {
          this.notes = response.data;
        }
      }
    });
  }

  
  openPopup(note: Note | null = null): void {
    this.selectedNote = note; 
    this.isPopupOpen = true;
  }

  closePopup(): void {
    this.isPopupOpen = false;
    this.selectedNote = null;
  }

  saveNote(note: Note): void {
    if (this.selectedNote && this.selectedNote.id !== undefined) {
      
      this.noteService.updateNote(this.selectedNote.id, note).subscribe(() => {
        this.loadNotes();
        this.closePopup();
      });
    } else {
      
      this.noteService.createNote(note).subscribe(() => {
        this.loadNotes();
        this.closePopup();
      });
    }

  }
}
