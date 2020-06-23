import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Service
import { AreaService } from '../../../Service/area.service';

//Model
import { Area } from '../../../Models/Area';

@Component({
  selector: 'app-see',
  templateUrl: './see.component.html',
  styleUrls: ['./see.component.css']
})
export class SeeComponent implements OnInit {

  area: Area;
  constructor(private service: AreaService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.seeArea();
  }

  seeArea() {
    if (+this.router.snapshot.paramMap.get('id') > 0) {
      this.service.seeArea(+this.router.snapshot.paramMap.get('id')).subscribe(data => {
        this.area = data;
      })
    }
  }

}
