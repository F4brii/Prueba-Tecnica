import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//Model
import { Area } from '../../../Models/Area';

//Service
import { AreaService } from '../../../Service/area.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  Area: FormGroup;
  idArea = 0;
  action = "Agregar"
  area: Area;

  constructor(private fb: FormBuilder, private router: ActivatedRoute, private service: AreaService, private route: Router) {
    this.Area = fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required]
    });
    if (+this.router.snapshot.paramMap.get('id') > 0) {
      this.idArea = +this.router.snapshot.paramMap.get('id');
    }
  }

  ngOnInit(): void {
  }

  guardarArea() {
    if (this.action === 'Agregar') {
      const area: Area = {
        name: this.Area.get('Name').value,
        description: this.Area.get('Description').value
      };
      this.service.createArea(area).subscribe(data => {
        this.route.navigate(['']);
      });
    }
  }
}
