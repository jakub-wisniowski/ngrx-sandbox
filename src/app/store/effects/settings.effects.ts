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
      map((action) => (action as any).payload),
      mergeMap((data) =>
        this.settingsService.saveSetting(data).pipe(
          map((data) => saveSettingSuccessAction({ payload: data })),
          catchError((error) => of(saveSettingFailureAction(error)))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private settingsService: SettingsService
  ) {}
}
