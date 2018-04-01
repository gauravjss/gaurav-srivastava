import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { Timeline2Component } from './timeline2/timeline2.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    PortfolioComponent,
    SkillsComponent,
    NavigationComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    Timeline2Component,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
