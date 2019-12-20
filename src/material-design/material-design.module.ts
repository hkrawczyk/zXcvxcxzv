import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { NgModule } from '@angular/core';


const modules: any[] = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
];

// Declare Module that imports/exports the @angular/material modules needed in the app
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialDesignModule {}
