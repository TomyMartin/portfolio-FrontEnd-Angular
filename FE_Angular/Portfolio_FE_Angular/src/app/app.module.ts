import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GeneralComponent } from './components/general/general.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreMiComponent,
    ContactoComponent,
    PortfolioComponent,
    GeneralComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
