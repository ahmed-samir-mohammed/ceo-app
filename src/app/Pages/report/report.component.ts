import { Component, OnInit } from '@angular/core';
import { ReportList } from 'src/app/core/pages/Report';
import { ReportService } from 'src/app/core/services/report.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  reportListItems: ReportList[] = [];

  constructor(private reportList: ReportService) { }

  ngOnInit(): void {
    this.getReportList()
  }

  getReportList() {
    this.reportList.getAllReport().subscribe((res: any) => {
      this.reportListItems = res.data
    })
  }

}
