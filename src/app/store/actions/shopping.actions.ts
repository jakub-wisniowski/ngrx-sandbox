import {Action} from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    REMOVE_ITEM = '[SHOPPING] Remove Item',
    EDIT_ITEM = '[SHOPPING] Edit item'
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;

    constructor(public payload: ShoppingItem) {

    }
}

export type ShoppingAction = AddItemAction;