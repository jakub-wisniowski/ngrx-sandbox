import { Action, createAction, props } from '@ngrx/store';
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
export const loadShoppingAction = createAction(ShoppingActionTypes.LOAD_SHOPPING);

export const loadShoppingSuccessAction = createAction(ShoppingActionTypes.LOAD_SHOPPING_SUCCESS, props<{payload: Array<ShoppingItem>}>());

export const loadShoppingFailureAction = createAction(ShoppingActionTypes.LOAD_SHOPPING_FAILURE, props<{payload: Error}>());



export const addItemAction = createAction(ShoppingActionTypes.ADD_ITEM, props<{payload: ShoppingItem}>());

export const addItemSuccessAction = createAction(ShoppingActionTypes.ADD_ITEM_SUCCESS, props<{payload: ShoppingItem}>());

export const addItemFailureAction = createAction(ShoppingActionTypes.ADD_ITEM_FAILURE, props<{payload: Error}>());



export const removeItemAction = createAction(ShoppingActionTypes.REMOVE_ITEM, props<{payload: string}>());

export const removeItemSuccessAction = createAction(ShoppingActionTypes.REMOVE_ITEM_SUCCESS, props<{payload: string}>());

export const removeItemFailureAction = createAction(ShoppingActionTypes.REMOVE_ITEM_FAILURE, props<{payload: Error}>());
