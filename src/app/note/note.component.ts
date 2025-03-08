import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  isPopupOpen = false; // Состояние попапа
  noteTitle = ''; // Данные заметки
  noteContent = '';

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  saveNote() {
    console.log("Note saved:", this.noteTitle, this.noteContent);
    this.closePopup(); 
  }
}
