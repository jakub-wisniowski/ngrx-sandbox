import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import {
  ShoppingActionTypes,
  loadShoppingSuccessAction,
  loadShoppingFailureAction,
  addItemSuccessAction,
  addItemFailureAction,
  removeItemSuccessAction,
  removeItemFailureAction,
} from '../actions/shopping.actions';
import { ShoppingService } from 'src/app/shopping.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ShoppingEffects {
  loadShopping$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(() =>
        this.shoppingService.getShoppingItems().pipe(
          map((data) => loadShoppingSuccessAction({ payload: data })),
          catchError((error) =>
            of(loadShoppingFailureAction({ payload: error }))
          )
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingActionTypes.ADD_ITEM),
      map(action => (action as any).payload),
      mergeMap((data) =>
        this.shoppingService.addShoppingItem(data).pipe(
          map((data) => addItemSuccessAction({payload: data})
          ),
          catchError((error) => of(addItemFailureAction(error)))
        )
      )
    )
  );

  removeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShoppingActionTypes.REMOVE_ITEM),
      map(action => (action as any).payload),
      mergeMap((data) =>
        this.shoppingService.removeShoppingItem(data).pipe(
          map(() => removeItemSuccessAction({payload: data })),
          catchError((error) => of(removeItemFailureAction(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {}
}
