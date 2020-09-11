import { createAction, props } from '@ngrx/store';
import { Settings } from '../models/settings.model';

export enum SettingsActionTypes {
  SAVE_SETTING = '[SETTINGS] Save Setting',
  SAVE_SETTING_FAILURE = '[SETTINGS] Save Setting Failure',
  SAVE_SETTING_SUCCESS = '[SETTINGS] Save Setting Success',
  LOAD_SETTINGS = '[SETTINGS] Load Settings',
  LOAD_SETTINGS_FAILURE = '[SETTINGS] Load Settings Failure',
  LOAD_SETTINGS_SUCCESS = '[SETTINGS] Load Settings Success'
}
export const loadSettingsAction = createAction(SettingsActionTypes.LOAD_SETTINGS);

export const loadSettingsSuccessAction = createAction(SettingsActionTypes.LOAD_SETTINGS_SUCCESS, props<{payload: Settings}>());

export const loadSettingsFailureAction = createAction(SettingsActionTypes.LOAD_SETTINGS_FAILURE, props<{payload: Error}>());



export const saveSettingAction = createAction(SettingsActionTypes.SAVE_SETTING, props<{payload: Settings, persistent: boolean}>());

export const saveSettingSuccessAction = createAction(SettingsActionTypes.SAVE_SETTING_SUCCESS, props<{payload: Settings}>());

export const saveSettingFailureAction = createAction(SettingsActionTypes.SAVE_SETTING_FAILURE, props<{payload: Error}>());
