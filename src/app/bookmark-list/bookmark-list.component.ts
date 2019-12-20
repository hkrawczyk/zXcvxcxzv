import { Component, OnInit } from '@angular/core';
import {Bookmark} from '../models/Bookmark';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {BookmarkRemove} from '../store/bookmark.actions';


@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {
  // parentMessage = {
  //   "chlam": [
  //     {
  //       "name": "Nazwa dupa",
  //       "url": "http://kaszana",
  //       "group": "priv"
  //     },
  //     {
  //       "name": "Nazwa palo",
  //       "url": "http://kielba",
  //       "group": "priv2"
  //     }
  //   ],
  //   "prak": [{
  //     "name": "aluo",
  //     "url": "http://prak",
  //     "group": "priv"
  //   }]
  // }

  bookmarks: Observable<{}>;


  movies$: Observable<Bookmark[]> = this.store.select(state => state.bookmarks);

  constructor(private store: Store<any>) {
    this.bookmarks = store.pipe(select('bookmarks'));
  }

  // constructor(private store: Store<fromRoot.State>) {
  //   this.bookmarks = store.pipe(select(getStates));
  // }

  removeBookmark(bookmarkIndex) {
    this.store.dispatch(new BookmarkRemove(bookmarkIndex));
  }

  ngOnInit() {
    console.log(this.movies$);
  }

  showInfo(item) {
    alert(item);
  }

}
