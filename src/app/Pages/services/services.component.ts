import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/core/pages/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  serviceListItems: Service[] = [
    {
      id: 1,
      category: 'خدمة 1',
      name: 'خدمة 1',
      imgName: 'img1.jpg'
    },
    {
      id: 2,
      category: 'خدمة 2',
      name: 'خدمة 2', 
      imgName: 'img3.jpg'
    },
    {
      id: 3,
      category: 'خدمة 3',
      name: 'خدمة 3',
      imgName: 'img1.jpg'
    },
    {
      id: 4,
      category: 'خدمة 4',
      name: 'خدمة 4',
      imgName: 'img3.jpg'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
