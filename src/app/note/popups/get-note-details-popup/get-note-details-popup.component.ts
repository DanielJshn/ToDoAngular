import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Note {
  title: string;
  content: string;
}

@Component({
  selector: 'app-get-note-details-popup',
  standalone: true,
  templateUrl: './get-note-details-popup.component.html',
  styleUrls: ['./get-note-details-popup.component.css']
})

export class GetNoteDetailsPopupComponent {
  @Input() note!: { title: string; content: string } | null;
  @Output() close = new EventEmitter<void>();
}
