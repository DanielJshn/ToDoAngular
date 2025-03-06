import { Component } from '@angular/core';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  showPopup = false;
  isEditing = false;
  notes: any[] = [];

  openPopup(editing: boolean = false) {
    this.isEditing = editing;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}
