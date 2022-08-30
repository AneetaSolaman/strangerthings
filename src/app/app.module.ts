import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { QuoteComponent } from './quote/quote.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule} from 'ngx-bootstrap/typeahead';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ClockComponent } from './clock/clock.component';
import { GameCardComponent } from './game-card/game-card.component';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';
import { TrailerComponent } from './trailer/trailer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddprofileComponent,
    QuoteComponent,
    ViewComponent,
    LoginComponent,
    ClockComponent,
    GameCardComponent,
    RestartDialogComponent,
    TrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
