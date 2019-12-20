import { Component, OnInit } from '@angular/core';

import {Customer} from '../models/customer';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CustomerRemove} from '../customer.actions';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {
  links = ['kupa','dupa','analog'];
  customers: Observable<Customer[]>;
  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = store.pipe(select('customers'));
  }

  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  ngOnInit() {
  }

  showInfo(item) {
    alert(item);
  }

}
