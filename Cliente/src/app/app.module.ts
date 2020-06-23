import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Cliente
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AreaComponent } from './Components/Area/area/area.component';
import { CreateComponent } from './Components/Area/create/create.component';
import { ListComponent } from './Components/Area/list/list.component';
import { SeeComponent } from './Components/Area/see/see.component';
import { ArticleComponent } from './Components/Article/article/article.component';
import { ListArticleComponent } from './Components/Article/list-article/list-article.component';
import { CreateArticleComponent } from './Components/Article/create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AreaComponent,
    CreateComponent,
    ListComponent,
    SeeComponent,
    ArticleComponent,
    ListArticleComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
