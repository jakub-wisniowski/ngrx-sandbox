import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Settings } from '../store/models/settings.model';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private SETTINGS_URL = 'http://localhost:3000/settings';

  constructor(private http: HttpClient) {}

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(this.SETTINGS_URL).pipe(delay(500));
  }

  saveSetting(settings: Settings): Observable<Settings> {
    return this.http.post<Settings>(this.SETTINGS_URL, settings).pipe(delay(500));
  }
}
