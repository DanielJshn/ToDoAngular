import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GetNoteDetailsPopupComponent } from "./popups/get-note-details-popup/get-note-details-popup.component";
import { CreateNotePopupComponent } from "./popups/create-note-popup/create-note-popup.component";

interface Note {
  title: string;
  content: string;
}

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, GetNoteDetailsPopupComponent, CreateNotePopupComponent],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})


export class NoteComponent {
  isPopupOpen = false;
  selectedNote: Note | null = null;
  notes: Note[] = [];

  openCreatePopup() {
    this.isPopupOpen = true;
  }

  closeCreatePopup() {
    this.isPopupOpen = false;
  }

  saveNote(note: Note) {
    this.notes.push(note);
    this.closeCreatePopup();
  }

  openPopupNote(note: Note) {
    this.selectedNote = note;
  }

  closePopupNote() {
    this.selectedNote = null;
  }
}