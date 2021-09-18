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
  reportListItems: ReportList[] = [
    {
      id: 1,
      title: "تقرير 1",
      imgName: "img1.jpg",
      disc_1: "",
      disc_2: "",
      disc_3: ""
    },
    {
      id: 2,
      title: "تقرير 2",
      imgName: "img3.jpg",
      disc_1: "",
      disc_2: "",
      disc_3: ""
    },
    {
      id: 3,
      title: "تقرير 3",
      imgName: "img1.jpg",
      disc_1: "",
      disc_2: "",
      disc_3: ""
    },
    {
      id: 4,
      title: "تقرير 4",
      imgName: "img3.jpg",
      disc_1: "",
      disc_2: "",
      disc_3: ""
    }
  ];

  constructor(private report: ReportService) { }

  ngOnInit(): void {
  }



}
