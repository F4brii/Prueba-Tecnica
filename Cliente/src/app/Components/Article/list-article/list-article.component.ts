import { Component, OnInit } from '@angular/core';

//Model
import { Article } from '../../../Models/Article';

//Service
import { ArticleService } from '../../../Service/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  listArticles: Article[];
  loading = false;

  constructor(private service: ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    this.loading = true;
    this.service.getListArticles().subscribe(data => {
      this.loading = false;
      this.listArticles = data;
    })
  }

  deleteArticle(id: number){
    this.loading = true;
    this.service.deleteArticle(id).subscribe(data =>{
      this.loadArticles();
      this.loading = false;
    });
  }

}