import { ServiceCategoryList, ServiceList } from './../../core/pages/service';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
  selector: 'app-shared-service',
  templateUrl: './shared-service.component.html',
  styleUrls: ['./shared-service.component.scss']
})
export class SharedServiceComponent implements OnInit {

  showInLargScreen!: boolean;
  showInSmallScreen!: boolean;
  serviceListItems: ServiceCategoryList[] = []

  constructor(private serviceList: ServiceService) { }

  ngOnInit(): void {
    this.changeViewInScreenSize();
    this.getServiceList()
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

  getServiceList() {
    this.serviceList.getAllService().subscribe((res: any) => {
      this.serviceListItems = res.data
      console.log(this.serviceListItems)
    })
  }
}
