import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Bookmark} from '../models/Bookmark';
import {Observable} from 'rxjs';
import {BookmarkAdd} from '../store/bookmark.actions';

@Component({
  selector: 'app-bookmark-add-dialog',
  templateUrl: './bookmark-add-dialog.component.html',
  styleUrls: ['./bookmark-add-dialog.component.scss']
})
export class BookmarkAddDialogComponent implements OnInit {
  bookmarks: Observable<{}>;

  form: FormGroup;
  name: string;

  constructor(
    // private fb: FormBuilder,
    private dialogRef: MatDialogRef<BookmarkAddDialogComponent>,
    private store: Store<{ bookmarks: {} }>
  ) {
    this.bookmarks = store.pipe(select('bookmarks'));

  }

  // constructor(
  //    // private fb: FormBuilder,
  //    private dialogRef: MatDialogRef<BookmarkAddDialogComponent>,
  //    @Inject(MAT_DIALOG_DATA) {name}:Bookmark ) {
  //
  //    this.name = name;
  //
  //
  //    this.form = fb.group({
  //      name: [name, Validators.required]
  //    });
  //
  //  }
  //

  ngOnInit() {
  }

  // save() {
  //   this.dialogRef.close(this.form.value);
  // }
  AddBookmark(
    _name: string,
    _url: string,
    _group: string,
  ) {
    const bookmark = new Bookmark();
    bookmark.name = _name;
    bookmark.url = _url;
    bookmark.group = _group;
    this.store.dispatch(new BookmarkAdd(bookmark));

    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}

// https://medium.com/@pbelikov/ngrx-made-simple-1fab3a3d4f28
// https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0
