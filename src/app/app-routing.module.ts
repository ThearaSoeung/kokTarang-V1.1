import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { KoktarangPageComponent } from './pages/koktarang-page/koktarang-page.component';
import { OpponentPageComponent } from './pages/opponent-page/opponent-page.component';
import { OpponentsComponent } from './pages/opponents/opponents.component';
import { PagesComponent } from './pages/pages.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TarangComponent } from './pages/tarang/tarang.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'support', component: HelpCenterComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'page', component: PagesComponent },
  { path: 'opponents', component: OpponentPageComponent}, 
  { path: 'koktarang', component: KoktarangPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
