import { ReportService } from './../../core/services/report.service';
import { Component, Input, OnInit } from '@angular/core';
import { ReportList } from 'src/app/core/pages/Report';

@Component({
  selector: 'app-shared-report',
  templateUrl: './shared-report.component.html',
  styleUrls: ['./shared-report.component.scss']
})
export class SharedReportComponent implements OnInit {

  @Input() classes!: string;
  showInLargScreen!: boolean;
  showInSmallScreen!: boolean;
  reportListItems: ReportList[] = [];

  constructor(private reportList: ReportService) { }

  ngOnInit(): void {
    this.changeViewInScreenSize();
    this.getReportList();
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

  getReportList() {
    this.reportList.getAllReport().subscribe((res: any) => {
      this.reportListItems = res.data
    })
  }
}
