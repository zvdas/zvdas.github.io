import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { AboutOriginalComponent } from './main/about_original/about_original.component';
import { MessagesComponent } from './main/messages/messages.component';
import { ErrorComponent } from './main/error/error.component';
import { TemplateComponent } from './main/template/template.component';

const routes: Routes = [
  { path:'home', component: AboutComponent },
  { path:'about_original', component: AboutOriginalComponent },
  { path:'details/:id/:code', component: TemplateComponent },
  /*
  // all routes moved to TemplateComponent with path as code in params
  { path:'fba', component: BlogAppComponent },
  { path:'ota', component: OnlineTestAppComponent },
  { path:'tma', component: ThreedAppComponent },
  { path:'efa', component: EventFinderAppComponent },
  { path: 'psa', component: PokemonSearchAppComponent },
  { path:'lms', component: LmsAppComponent },
  { path:'oms', component: OmsAppComponent },
  */
  { path:'messages', component: MessagesComponent },
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }