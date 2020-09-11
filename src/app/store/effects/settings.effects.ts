import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import {
  SettingsActionTypes,
  loadSettingsSuccessAction,
  loadSettingsFailureAction,
  saveSettingSuccessAction,
  saveSettingFailureAction,
} from '../actions/settings.actions';
import { SettingsService } from 'src/app/services/settings.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class SettingsEffects {
  loadSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActionTypes.LOAD_SETTINGS),
      mergeMap(() =>
        this.settingsService.getSettings().pipe(
          map((data) => loadSettingsSuccessAction({ payload: data })),
          catchError((error) =>
            of(loadSettingsFailureAction({ payload: error }))
          )
        )
      )
    )
  );

  saveSetting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SettingsActionTypes.SAVE_SETTING),
      map((action) => {
        return {
          payload: (action as any).payload,
          persistent: (action as any).persistent,
        };
      }),
      mergeMap((data) => {
        if (data.persistent) {
          return this.settingsService.saveSetting(data.payload).pipe(
            map((savedData) =>
              saveSettingSuccessAction({ payload: savedData })
            ),
            catchError((error) => of(saveSettingFailureAction(error)))
          );
        } else {
          return of(saveSettingSuccessAction({ payload: data.payload }));
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
  ) {}
}
