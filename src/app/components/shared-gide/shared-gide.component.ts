import { Component, OnInit } from '@angular/core';
import { GuideList } from 'src/app/core/pages/guide';
import { GuideService } from 'src/app/core/services/guide.service';

@Component({
  selector: 'app-shared-gide',
  templateUrl: './shared-gide.component.html',
  styleUrls: ['./shared-gide.component.scss']
})
export class SharedGideComponent implements OnInit {

  guideListItems: GuideList[] = []

  constructor(private guideList: GuideService) { }

  ngOnInit(): void {
    this.getGuideList()
  }

  // Get All News List
  getGuideList() {
    this.guideList.getAllGuide().subscribe((res: any) => {
      this.guideListItems = res
    })
  }

}
