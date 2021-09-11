import { Component, OnInit } from '@angular/core';
import { ReportList } from 'src/app/core/pages/Report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

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
    },
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

  constructor() { }

  ngOnInit(): void {
  }

}
