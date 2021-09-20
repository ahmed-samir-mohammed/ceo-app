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
import { GuideDetailsComponent } from './Pages/guide-details/guide-details.component';
import { SharedNewsComponent } from './components/shared-news/shared-news.component';
import { SharedGideComponent } from './components/shared-gide/shared-gide.component';
import { SharedReportComponent } from './components/shared-report/shared-report.component';
import { SharedServiceComponent } from './components/shared-service/shared-service.component';
import { ReportDetailesComponent } from './Pages/report-detailes/report-detailes.component';
import { AdsBanerComponent } from './components/ads-baner/ads-baner.component';
import { ServiceDetailsComponent } from './Pages/service-details/service-details.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    AboutUsComponent,
    GuideDetailsComponent,
    SharedNewsComponent,
    SharedGideComponent,
    SharedReportComponent,
    SharedServiceComponent,
    ReportDetailesComponent,
    AdsBanerComponent,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
