import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvoiesComponent } from './envoies/envoies.component';
import { AddEnvoieComponent } from './add-envoie/add-envoie.component';
import { FormsModule } from '@angular/forms';
import { UpdateEnvoieComponent } from './update-envoie/update-envoie.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EnvoiesComponent,
    AddEnvoieComponent,
    UpdateEnvoieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
