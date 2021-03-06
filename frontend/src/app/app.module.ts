import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ItemService } from './shared/item.service';
import { MessageService } from './shared/message.service';
import { ManageComponent } from './manage/manage.component';
import { MenuComponent } from './menu/menu.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ManageComponent,
    MenuComponent,
    LoadingSpinnerComponent,
    FeedComponent
  ],
  providers: [
    ItemService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
