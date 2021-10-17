import { Component, OnInit } from '@angular/core';
import { ServiceList } from 'src/app/core/pages/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  serviceListItems:  any[] = [];
  p: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
