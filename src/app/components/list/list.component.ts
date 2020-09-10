import { loadSettingsAction } from 'src/app/store/actions/settings.actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingState } from 'src/app/store/reducers/shopping.reducer';
import { ShoppingItem } from 'src/app/store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import {
  loadShoppingAction,
  addItemAction,
  removeItemAction,
} from 'src/app/store/actions/shopping.actions';
import { AppState } from '../../store/models/app-state.model';
import { v4 as uuid } from 'uuid';
import { SettingsState } from 'src/app/store/reducers/settings.reducer';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  shopping$: Observable<ShoppingState>;
  settings$: Observable<SettingsState>;

  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.shopping$ = this.store.select((store) => store.shopping);
    this.settings$ = this.store.select((store) => store.settings);

    this.store.dispatch(loadShoppingAction());
    this.store.dispatch(loadSettingsAction());
  }

  addItem() {
    this.newShoppingItem.id = uuid();

    this.store.dispatch(addItemAction({ payload: this.newShoppingItem }));
    this.newShoppingItem = { id: '', name: '' };
  }

  removeItem(id: string) {
    this.store.dispatch(removeItemAction({ payload: id }));
  }
}
