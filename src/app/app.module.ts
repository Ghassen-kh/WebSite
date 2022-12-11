import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActivityComponent } from './activity/activity.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ActivityComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
