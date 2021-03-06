import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateComponent } from './template/template.component';
import { SafeUrlPipe } from '../pipes/safe-url/safe-url.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TemplateComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    TemplateComponent
  ]
})

export class MainModule { }