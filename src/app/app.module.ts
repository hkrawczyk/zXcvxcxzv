import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { BookmarkReducer } from './store/bookmark.reducer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkAddComponent } from './bookmark-add/bookmark-add.component';
import { BookmarkAddDialogComponent } from './bookmark-add-dialog/bookmark-add-dialog.component';



import { MaterialDesignModule } from '../material-design/material-design.module';
import { BookmarkListItemComponent } from './bookmark-list-item/bookmark-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BookmarkListComponent,
    BookmarkAddComponent,
    BookmarkAddDialogComponent,
    BookmarkListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    StoreModule.forRoot({ bookmarks: BookmarkReducer })

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BookmarkAddDialogComponent]
})
export class AppModule { }
