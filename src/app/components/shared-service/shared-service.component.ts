import { Service } from './../../core/pages/service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-service',
  templateUrl: './shared-service.component.html',
  styleUrls: ['./shared-service.component.scss']
})
export class SharedServiceComponent implements OnInit {

  serviceListItems: Service[] = [
    {
      id: 1,
      category: 'السفر',
      name: 'صالات كبار الزوار',
      imgName: 'img1.jpg'
    },
    {
      id: 2,
      category: 'السفر',
      name: 'صالات كبار الزوار',
      imgName: 'img3.jpg'
    },
    {
      id: 3,
      category: 'السفر',
      name: 'صالات كبار الزوار',
      imgName: 'img1.jpg'
    },
    {
      id: 4,
      category: 'السفر',
      name: 'صالات كبار الزوار',
      imgName: 'img3.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
