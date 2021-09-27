import { Component, OnInit } from '@angular/core';
import { GuideList } from 'src/app/core/pages/guide';
import { GuideService } from 'src/app/core/services/guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  guideListItems: GuideList[] = []
  filterTerm!: string;
  p: number = 1;

  constructor(private guideList: GuideService) { }

  ngOnInit(): void {
    this.getGuideList();
  }

   // Get All News List
   getGuideList() {
    this.guideList.getAllGuide().subscribe((res: any) => {
      this.guideListItems = res
    },
    error => {
      console.log(error);
    });
  }
}
