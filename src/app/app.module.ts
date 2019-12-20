import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer.reducer';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToolbarComponent } from './toolbar/toolbar.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkAddComponent } from './bookmark-add/bookmark-add.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';


import { MaterialDesignModule } from '../material-design/material-design.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BookmarkListComponent,
    BookmarkAddComponent,
    CustomerAddComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    StoreModule.forRoot({ customers: CustomerReducer })
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
