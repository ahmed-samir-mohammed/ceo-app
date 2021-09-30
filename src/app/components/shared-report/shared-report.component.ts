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
  reportListItems: ReportList[] = [
    {
      id: 1,
      title: "تقرير 1",
      imgName: "report1.png",
      disc_1: "",
      disc_2: "",
      disc_3: ""
    },
    {
      id: 2,
      title: "تقرير 2",
      imgName: "report2.png",
      disc_1: "",
      disc_2: "",
      disc_3: ""
    },
    {
      id: 3,
      title: "تقرير 3",
      imgName: "report1.png",
      disc_1: "",
      disc_2: "",
      disc_3: ""
    },
    {
      id: 4,
      title: "تقرير 4",
      imgName: "report2.png",
      disc_1: "",
      disc_2: "",
      disc_3: ""
    }
  ];

  constructor(private report: ReportService) { }

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
