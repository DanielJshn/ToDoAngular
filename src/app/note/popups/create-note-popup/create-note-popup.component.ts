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
  @Output() save = new EventEmitter<{ title: string; description: string }>();

  noteTitle = '';
  noteDescription = '';

  saveNote() {
    if (this.noteTitle.trim() && this.noteDescription.trim()) {
      this.save.emit({ title: this.noteTitle, description: this.noteDescription });
      this.noteTitle = '';
      this.noteDescription = '';
    }
  }
}
