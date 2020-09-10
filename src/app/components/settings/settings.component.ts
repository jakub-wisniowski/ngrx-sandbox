import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppState } from 'src/app/store/models/app-state.model';
import { Store } from '@ngrx/store';
import { SettingsState } from 'src/app/store/reducers/settings.reducer';
import { Observable } from 'rxjs';
import { loadSettingsAction, saveSettingAction } from 'src/app/store/actions/settings.actions';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settings$: Observable<SettingsState>;

  persistent: boolean;

  form: FormGroup = new FormGroup({
    nrOfItems: new FormControl()
  });
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.settings$ = this.store.select((store) => store.settings);

    this.store.dispatch(loadSettingsAction());
  }


  saveSettings() {
    this.store.dispatch(saveSettingAction({payload: {nrOfItems: this.form.value.nrOfItems}}));
  }

}
