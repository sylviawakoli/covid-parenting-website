import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpreadsheetService } from './shared/services/spreadsheet.service';
import { CaseworkersComponent } from './caseworkers/caseworkers.component';
import { PsaComponent } from './psa/psa.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TipSheetsComponent } from './tip-sheets/tip-sheets.component';
import { TipSheetService } from './tip-sheets/tip-sheet.service';
import {WebAnalyticsService} from './web-analytics.service';
import { ContactusComponent } from './contactus/contactus.component';
import { SocialMediaIconsComponent } from './social-media-icons/social-media-icons.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContributorsComponent,
    CaseworkersComponent,
    PsaComponent,
    HomeComponent,
    TipsComponent,
    TipSheetsComponent,
    ContactusComponent,
    SocialMediaIconsComponent,
    BlogComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    ScullyLibModule
  ],
  providers: [
    SpreadsheetService,
    TipSheetService,
    WebAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
