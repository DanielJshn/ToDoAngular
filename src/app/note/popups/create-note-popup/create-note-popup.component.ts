import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-note-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-note-popup.component.html',
  styleUrl: './create-note-popup.component.css'
})

export class CreateNotePopupComponent {
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ title: string; content: string }>();

  noteTitle = '';
  noteContent = '';

  saveNote() {
    if (this.noteTitle.trim() && this.noteContent.trim()) {
      this.save.emit({ title: this.noteTitle, content: this.noteContent });
      this.noteTitle = '';
      this.noteContent = '';
    }
  }
}
