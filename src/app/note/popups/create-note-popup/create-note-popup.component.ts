import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../../../services/note.service';

@Component({
  selector: 'app-create-note-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-note-popup.component.html',
  styleUrl: './create-note-popup.component.css'
})

export class CreateNotePopupComponent {
  @Input() note: Note | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<{ id?: number; title: string; description: string }>();

  noteTitle = '';
  noteDescription = '';

  ngOnInit() {
    if (this.note) {
      this.noteTitle = this.note.title;
      this.noteDescription = this.note.description;
    }
  }

  saveNote() {
    if (this.noteTitle.trim() && this.noteDescription.trim()) {
      this.save.emit({
        id: this.note?.id,
        title: this.noteTitle,
        description: this.noteDescription
      });
      this.close.emit();
    }
  }
}