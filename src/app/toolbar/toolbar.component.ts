import {Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {NgModule} from '@angular/core';


@NgModule({
  imports: [MatToolbar],
})
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  amount = 5;

  constructor() {
  }

  ngOnInit() {
  }

}
