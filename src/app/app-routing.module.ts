import { ReportComponent } from './Pages/report/report.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { GuideDetailsComponent } from './Pages/guide-details/guide-details.component';
import { GuideComponent } from './Pages/guide/guide.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsDetailsComponent } from './Pages/news-details/news-details.component';
import { NewsComponent } from './pages/news/news.component';
import { ServicesComponent } from './pages/services/services.component';
import { ReportDetailesComponent } from './Pages/report-detailes/report-detailes.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'guide/:id', component: GuideDetailsComponent },
  { path: 'report', component: ReportComponent },
  { path: 'report/:id', component: ReportDetailesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
