import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { shoppingReducer } from './store/reducers/shopping.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './store/effects/shopping.effects';
import { SettingsComponent } from './components/settings/settings.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsEffects } from './store/effects/settings.effects';
import { settingsReducer } from './store/reducers/settings.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    ListComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ListComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'item/:id', component: DetailComponent },
      { path: '**', redirectTo: '' },
    ]),
    NgbModule,
    StoreModule.forRoot({
      shopping: shoppingReducer,
      settings: settingsReducer
    }),
    EffectsModule.forRoot([ShoppingEffects, SettingsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
