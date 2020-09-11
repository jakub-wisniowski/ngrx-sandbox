import { SettingsService } from 'src/app/services/settings.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppState } from 'src/app/store/models/app-state.model';
import { Store } from '@ngrx/store';
import { SettingsState } from 'src/app/store/reducers/settings.reducer';
import { Observable, of } from 'rxjs';
import { saveSettingAction } from 'src/app/store/actions/settings.actions';
import { FormGroup, FormControl } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  settings$: Observable<SettingsState>;
  x: number;

  form: FormGroup = new FormGroup({
    nrOfItemsGroup: new FormGroup({
      nrOfItems: new FormControl(),
      persistent: new FormControl(),
    }),
  });
  constructor(
    private store: Store<AppState>,
    private settingSrv: SettingsService
  ) {}

  ngOnInit() {
    this.settings$ = this.settingSrv.loadSettings();

    // This solves the problem, but I'd rather avoid it

    // this.settings$.subscribe((el) => {
    //   this.form.patchValue({
    //     nrOfItemsGroup: {
    //       nrOfItems: el.settings.nrOfItems,
    //     },
    //   });
    // });
  }

  saveSettings() {
    const persistent = this.form.value.nrOfItemsGroup.persistent;
    this.store.dispatch(
      saveSettingAction({
        payload: { nrOfItems: this.form.value.nrOfItemsGroup.nrOfItems },
        persistent,
      })
    );
  }
}
