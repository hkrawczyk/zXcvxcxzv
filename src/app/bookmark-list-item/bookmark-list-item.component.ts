import { Component, Input } from '@angular/core';
import {Bookmark} from '../models/Bookmark';

@Component({
  selector: 'app-bookmark-list-item',
  templateUrl: './bookmark-list-item.component.html',
  styleUrls: ['./bookmark-list-item.component.scss']
})
export class BookmarkListItemComponent {
  @Input() bookmark: string;
  @Input() id: number;

  constructor() { }
}
