import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
  REMOVE_ITEM = '[SHOPPING] Remove Item',
  REMOVE_ITEM_FAILURE = '[SHOPPING] Remove Item Failure',
  REMOVE_ITEM_SUCCESS = '[SHOPPING] Remove Item Success',
  LOAD_SHOPPING = '[SHOPPING] Load Shopping',
  LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
  LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success'
}
export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING
}
export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS

  constructor(public payload: Array<ShoppingItem>) {}

}
export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE
  
  constructor(public payload: Error) {}
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM

  constructor(public payload: ShoppingItem) { }
}
export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS

  constructor(public payload: ShoppingItem) { }
}
export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE

  constructor(public payload: Error) { }
}

export class RemoveItemAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM

  constructor(public payload: string) { }
}

export class RemoveItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM_SUCCESS

  constructor(public payload: string) { }
}
export class RemoveItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM_FAILURE

  constructor(public payload: string) { }
}

export type ShoppingAction = AddItemAction |
  AddItemSuccessAction |
  AddItemFailureAction |
  RemoveItemAction |
  RemoveItemSuccessAction |
  RemoveItemFailureAction |
  LoadShoppingAction |
  LoadShoppingFailureAction |
  LoadShoppingSuccessAction
