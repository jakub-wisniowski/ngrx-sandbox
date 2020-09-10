import { ShoppingState } from '../reducers/shopping.reducer';
import { SettingsState } from '../reducers/settings.reducer';

export interface AppState {
    readonly shopping: ShoppingState;
    readonly settings: SettingsState;
}