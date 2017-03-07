import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';

import { Pages } from './pages.component';
import { AuthGuard } from './_guards'
import { AuthenticationService, UserService } from './_services/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule, 
    NgaModule, 
    routing
    ],
  declarations: [Pages],
  providers: [AuthGuard,
    AuthenticationService,
    UserService]
})
export class PagesModule {
}
