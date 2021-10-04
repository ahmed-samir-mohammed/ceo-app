import { Service } from './../../core/pages/service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-service',
  templateUrl: './shared-service.component.html',
  styleUrls: ['./shared-service.component.scss']
})
export class SharedServiceComponent implements OnInit {

  showInLargScreen!: boolean;
  showInSmallScreen!: boolean;
  serviceListItems: Service[] = [
    {
      id: 1,
      category: 'خدمة 1',
      name: 'خدمة 1',
      imgName: 'service1.png',
      serviceList: [
        {
          id: 1,
          linkName: 'خدمة 1'
        }
      ]
    },
    {
      id: 2,
      category: 'خدمة 2',
      name: 'خدمة 2', 
      imgName: 'service2.png',
      serviceList: [
        {
          id: 1,
          linkName: 'خدمة 1'
        }
      ]
    },
    {
      id: 3,
      category: 'خدمة 3',
      name: 'خدمة 3',
      imgName: 'service3.png',
      serviceList: [
        {
          id: 1,
          linkName: 'خدمة 1'
        }
      ]
    },
    {
      id: 4,
      category: 'خدمة 4',
      name: 'خدمة 4',
      imgName: 'service4.png',
      serviceList: [
        {
          id: 1,
          linkName: 'خدمة 1'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.changeViewInScreenSize();
  }

  changeViewInScreenSize() {
    if (window.innerWidth >= 991) {
      this.showInLargScreen = true;
      this.showInSmallScreen = false;
    } else {
      this.showInLargScreen = false;
      this.showInSmallScreen = true;
    }
  }
}
