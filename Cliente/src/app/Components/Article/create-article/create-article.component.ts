import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

//Service
import { AreaService } from '../../../Service/area.service';
import { ArticleService } from '../../../Service/article.service';

//Model
import { Article } from '../../../Models/Article';
import { Area } from '../../../Models/Area';

import { from } from 'rxjs';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  listAreas: Area[];
  Article: FormGroup;
  control: string;

  constructor(private areaService: AreaService, private fb: FormBuilder, private route: Router, private service: ArticleService) {
    this.Article = fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      Type: ['', Validators.required],
      Serial: ['', Validators.required],
      Value: [0, Validators.required],
      Date: ['', Validators.required],
      State: ['', Validators.required],
      AreaForeignKey: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAreas();
  }

  loadAreas() {
    this.areaService.getListAreas().subscribe(data => {
      this.listAreas = data;
    });
  }

  guardarArticle() {
    console.log(this.Article.get('AreaForeignKey').value)
    const article: Article = {
      name: this.Article.get('Name').value,
      description: this.Article.get('Description').value,
      type: this.Article.get('Type').value,
      serial: this.Article.get('Serial').value,
      value: this.Article.get('Value').value,
      dateOfPurchase: this.Article.get('Date').value,
      state: this.Article.get('State').value,
      areaForeignKey: +this.Article.get('AreaForeignKey').value,
    };
    this.service.createArticle(article).subscribe(data =>{
      this.route.navigate(['']);
    })
  }

}
