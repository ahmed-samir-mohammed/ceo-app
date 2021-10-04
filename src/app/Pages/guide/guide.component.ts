import { Component, OnInit } from '@angular/core';
import { CeoList } from 'src/app/core/pages/guide';
import { GuideService } from 'src/app/core/services/guide.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  ceoList: CeoList[] = []
  filterTerm!: string;
  p: number = 1;

  constructor(private guideList: GuideService) { }

  ngOnInit(): void {
    this.getAllCeo();
  }

   // Get All News List
   getAllCeo() {
    this.guideList.getAllCeo().subscribe((res: any) => {
      this.ceoList = res.data
      console.log(this.ceoList);
    },
    err => {
      console.log(err);
    });
  }
}
