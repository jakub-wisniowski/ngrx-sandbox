import { Component, OnInit } from '@angular/core';
import { AppState } from './store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AddItemAction, RemoveItemAction, LoadShoppingAction } from './store/actions/shopping.actions';
import {v4 as uuid} from 'uuid';
import { ShoppingState } from './store/reducers/shopping.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shopping$: Observable<ShoppingState>;
  newShoppingItem: ShoppingItem = {id: '', name: ''};

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shopping$ = this.store.select(store => store.shopping);

    this.store.dispatch(new LoadShoppingAction);
  }

  addItem() {
    this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));
    this.newShoppingItem = {id: '', name: ''};
  }

  removeItem(id: string) {
    this.store.dispatch(new RemoveItemAction(id));
  }
}
