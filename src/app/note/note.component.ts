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

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadNotes();  
  }

  loadNotes(): void {
    this.noteService.getNotes().subscribe({
      next: (response) => {
        if (response?.data && Array.isArray(response.data)) {
          this.notes = response.data; 
        }
  }});
  }

  openCreatePopup(): void {
    this.isPopupOpen = true;
  }

  closeCreatePopup(): void {
    this.isPopupOpen = false;
  }

  saveNote(note: Note): void {
    this.noteService.createNote(note).subscribe(() => {
      this.loadNotes(); 
      this.closeCreatePopup();
    });
  }

  openPopupNote(note: Note): void {
    this.selectedNote = note;
  }

  closePopupNote(): void {
    this.selectedNote = null;
  }
}