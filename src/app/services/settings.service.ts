import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Settings } from '../store/models/settings.model';
import { AppState } from '../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { SettingsState } from '../store/reducers/settings.reducer';
import { loadSettingsAction } from '../store/actions/settings.actions';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private SETTINGS_URL = 'http://localhost:3000/settings';

  settings$: Observable<SettingsState>;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  loadSettings(): Observable<SettingsState> {
    if (this.settings$) {
      return this.settings$;
      this.store.dispatch(loadSettingsAction());
    }

    this.settings$ = this.store.select((store) => store.settings);

    this.store.dispatch(loadSettingsAction());

    return this.settings$;
  }

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(this.SETTINGS_URL).pipe(delay(500));
  }

  saveSetting(settings: Settings): Observable<Settings> {
    return this.http
      .post<Settings>(this.SETTINGS_URL, settings)
      .pipe(delay(500));
  }
}
