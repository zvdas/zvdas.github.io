import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';
import { AboutComponent } from './about/about.component';
import { AboutOriginalComponent } from './about_original/about_original.component';
import { ErrorComponent } from './error/error.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TemplateComponent,
    AboutComponent,
    AboutOriginalComponent,
    ErrorComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    TemplateComponent
  ]
})

export class MainModule { }