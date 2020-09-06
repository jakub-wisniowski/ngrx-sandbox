import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LoadShoppingAction,
  ShoppingActionTypes,
  LoadShoppingSuccessAction,
  LoadShoppingFailureAction,
  AddItemAction,
  AddItemSuccessAction,
  AddItemFailureAction,
  RemoveItemAction,
  RemoveItemSuccessAction,
  RemoveItemFailureAction,
} from '../actions/shopping.actions';
import { ShoppingService } from 'src/app/shopping.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ShoppingEffects {
  @Effect() loadShopping$ = this.actions$.pipe(
    //filters only those Observables that are of type LoadShoppingAction
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(
      () => this.shoppingService.getShoppingItems().pipe(
          map(data => new LoadShoppingSuccessAction(data)),
          catchError(error => of(new LoadShoppingFailureAction(error)))
        )
    )
  );

  @Effect() addItem$ = this.actions$.pipe(
    ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
    mergeMap(
      (data) => this.shoppingService.addShoppingItem(data.payload).pipe(
        map(data => new AddItemSuccessAction(data)),
        catchError(error => of(new AddItemFailureAction(error)))
      )
    )
  )

  @Effect() removeItem$ = this.actions$.pipe(
    ofType<RemoveItemAction>(ShoppingActionTypes.REMOVE_ITEM),
    mergeMap(
      (data) => this.shoppingService.removeShoppingItem(data.payload).pipe(
        map(() => new RemoveItemSuccessAction(data.payload)),
        catchError(error => of(new RemoveItemFailureAction(error)))
      )
    )
  )

  constructor(private actions$: Actions, private shoppingService: ShoppingService) {}
}
