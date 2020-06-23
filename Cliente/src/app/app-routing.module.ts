import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AreaComponent } from './Components/Area/area/area.component';
import { CreateComponent } from './Components/Area/create/create.component';
import { ListComponent } from './Components/Area/list/list.component';
import { SeeComponent } from './Components/Area/see/see.component';

import { ArticleComponent } from './Components/Article/article/article.component';
import { CreateArticleComponent } from './Components/Article/create-article/create-article.component';

const routes: Routes = [
  { path: 'area', component: AreaComponent },
  { path: 'area/list', component: ListComponent },
  { path: 'area/create', component: CreateComponent },
  { path: 'area/edit/:id', component: CreateComponent },
  { path: 'area/see/:id', component: SeeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'article/create', component: CreateArticleComponent },
  { path: '', redirectTo: '/area', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: AreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
