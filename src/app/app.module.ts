import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { MainComponent } from './components/home/main/main.component';
import { BankComponent } from './components/home/bank/bank.component';
import { HomeCardComponent } from './components/home/main/home-card/home-card.component';
import { BuyComponent } from './components/home/buy/buy.component';
import { TravelComponent } from './components/home/travel/travel.component';
import { SportComponent } from './components/home/sport/sport.component';
import { InstructionComponent } from './components/home/bank/instruction/instruction.component';
import { TopMenuComponent } from './components/home/top-menu/top-menu.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    BankComponent,
    HomeCardComponent,
    BuyComponent,
    TravelComponent,
    SportComponent,
    InstructionComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
