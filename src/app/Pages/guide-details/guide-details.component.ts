import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from 'src/app/core/services/guide.service';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.component.html',
  styleUrls: ['./guide-details.component.scss']
})
export class GuideDetailsComponent implements OnInit {

  sectionTitle = 'الأخبار ذات العلاقة'
  classes: string = 'bg-f4f6fc'
  ceoItem: any;
  id!: any;

  constructor(private ceoListItem: GuideService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(id => {
      this.id = id.get('id')
    })

    this.getCeoItem()
  }
  getCeoItem() {
    this.ceoListItem.getCeoById(this.id).subscribe((res: any) => {
      this.ceoItem = res
    },
    err => {
      console.log(err);
    })
  }
}
