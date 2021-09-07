import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { ServicesComponent } from './pages/services/services.component'
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { GuideComponent } from './Pages/guide/guide.component';
import { NewsDetailsComponent } from './Pages/news-details/news-details.component';
import { ReportComponent } from './Pages/report/report.component';
import { NgParticlesModule } from 'ng-particles';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ContactUsComponent,
    ServicesComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    GuideComponent,
    NewsDetailsComponent,
    ReportComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
