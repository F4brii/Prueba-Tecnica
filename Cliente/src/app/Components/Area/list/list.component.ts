import { Component, OnInit } from '@angular/core';

//Model
import { Area } from '../../../Models/Area'

//Service
import { AreaService } from '../../../Service/area.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listAreas: Area[];
  loading= false;
  constructor( private service: AreaService ) { }

  ngOnInit(): void {
    this.loadAreas();
  }

  loadAreas(){
    this.loading = true;
    this.service.getListAreas().subscribe( data => {
      this.loading = false;
      this.listAreas = data;
    } )
  }

  deleteArea(id: number){
    this.loading = true;
    this.service.deleteArea(id).subscribe(data =>{
      this.loadAreas();
      this.loading = false;
    });
  }

}
