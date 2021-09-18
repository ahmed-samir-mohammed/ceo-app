import { Component, OnInit } from '@angular/core';
import { GuideList } from 'src/app/core/pages/guide';
import { GuideService } from 'src/app/core/services/guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  guideListItems: GuideList[] = [{
    id: 1,
    name: "طارق بن عبد الله النعيم",
    job: "الرئيس التنفيذي لشركة نقل وتقنيات المياه",
    imgName: "img_1.jpeg"
  },
  {
    id: 2,
    name: "عبدالعزيز بن سالم الزيد",
    job: "الرئيس التنفيذي لشركة خدمات الملاحة الجوية السعودية",
    imgName: "img_2.jpeg"
  },
  {
    id: 3,
    name: "تركي عدنان عبد المجيد",
    job: "الرئيس التنفيذي لقطاع الأغذية في مجموعة المداح التجارية",
    imgName: "img_3.jpeg"
  },
  {
    id: 4,
    name: "عبدالله بن ناصر البدر",
    job: "الرئيس التنفيذي لشركة المراعي",
    imgName: "img_4.jpg"
  }]

  constructor(private guideList: GuideService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    // this.getGuideList();
  }

   // Get All News List
   getGuideList() {
    this.guideList.getAllGuide().subscribe((res: any) => {
      this.guideListItems = res
    })
  }
}
