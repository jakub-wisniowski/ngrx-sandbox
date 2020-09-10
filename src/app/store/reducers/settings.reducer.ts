import {
  loadSettingsAction,
  loadSettingsSuccessAction,
  loadSettingsFailureAction,
  saveSettingAction,
  saveSettingSuccessAction,
  saveSettingFailureAction,
} from '../actions/settings.actions';
import { createReducer, on } from '@ngrx/store';
import { Settings } from '../models/settings.model';


export interface SettingsState {
  settings: Settings;
  loading: boolean;
  error: Error;
}
const initialState: SettingsState = {
  settings: {nrOfItems: 10},
  loading: false,
  error: undefined,
};

export const settingsReducer = createReducer<SettingsState>(
  initialState,
  on(loadSettingsAction, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadSettingsSuccessAction, (state, action) => {
    return {
      ...state,
      settings: action.payload,
      loading: false,
    };
  }),
  on(loadSettingsFailureAction, (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false
    }
  }),
  on(saveSettingAction, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(saveSettingSuccessAction, (state, action) => {
    return {
      ...state,
      settings: action.payload,
      loading: false
    }
  }),
  on(saveSettingFailureAction, (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false
    }
  }),
);
