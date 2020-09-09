import { ShoppingItem } from '../models/shopping-item.model';
import {
  loadShoppingAction,
  loadShoppingSuccessAction,
  loadShoppingFailureAction,
  addItemAction,
  addItemSuccessAction,
  addItemFailureAction,
  removeItemAction,
  removeItemSuccessAction,
  removeItemFailureAction,
} from '../actions/shopping.actions';
import { createReducer, on } from '@ngrx/store';

export interface ShoppingState {
  list: ShoppingItem[];
  loading: boolean;
  error: Error;
}
const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined,
};

export const shoppingReducer = createReducer<ShoppingState>(
  initialState,
  on(loadShoppingAction, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadShoppingSuccessAction, (state, action) => {
    return {
      ...state,
      list: action.payload,
      loading: false,
    };
  }),
  on(loadShoppingFailureAction, (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false
    }
  }),
  on(addItemAction, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(addItemSuccessAction, (state, action) => {
    return {
      ...state,
      list: [...state.list, action.payload],
      loading: false
    }
  }),
  on(addItemFailureAction, (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false
    }
  }),
  on(removeItemAction, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(removeItemSuccessAction, (state, action) => {
    return {
      ...state,
      list: state.list.filter(item => item.id !== action.payload),
      loading: false
    }
  }),
  on(removeItemFailureAction, (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false
    }
  }),
);
