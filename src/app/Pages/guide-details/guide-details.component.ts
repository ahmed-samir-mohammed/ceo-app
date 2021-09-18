import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.component.html',
  styleUrls: ['./guide-details.component.scss']
})
export class GuideDetailsComponent implements OnInit {

  sectionTitle = 'الأخبار ذات العلاقة'
  classes: string = 'bg-f4f6fc'

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
  }

}
