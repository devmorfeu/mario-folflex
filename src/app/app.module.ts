import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NossoJogoComponent } from './pages/nosso-jogo/nosso-jogo.component';
import { FaseUmComponent } from './components/fases/fase-um/fase-um.component';
import { FaseDoisComponent } from './components/fases/fase-dois/fase-dois.component';
import { FaseTresComponent } from './components/fases/fase-tres/fase-tres.component';
import { FaseQuatroComponent } from './components/fases/fase-quatro/fase-quatro.component';
import { OrderModule } from 'ngx-order-pipe';
import { DicaComponent } from './components/dica/dica.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NossoJogoComponent,
    FaseUmComponent,
    FaseDoisComponent,
    FaseTresComponent,
    FaseQuatroComponent,
    DicaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
