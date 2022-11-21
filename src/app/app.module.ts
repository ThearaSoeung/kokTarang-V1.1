import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootersComponent } from './footers/footers.component';
import { TarangComponent } from './pages/tarang/tarang.component';
import { OpponentsComponent } from './pages/opponents/opponents.component';
import { PagesComponent } from './pages/pages.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { OpponentPageComponent } from './pages/opponent-page/opponent-page.component';
import { KoktarangPageComponent } from './pages/koktarang-page/koktarang-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootersComponent,
    TarangComponent,
    OpponentsComponent,
    PagesComponent,
    HelpCenterComponent,
    AboutUsComponent,
    HomepageComponent,
    SignInComponent,
    OpponentPageComponent,
    KoktarangPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    NgbModule,
    MatSelectModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule, 
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
