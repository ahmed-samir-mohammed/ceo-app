import { Component, OnInit } from '@angular/core';
import { CeoList } from 'src/app/core/pages/guide';
import { GuideService } from 'src/app/core/services/guide.service';

@Component({
  selector: 'app-shared-gide',
  templateUrl: './shared-gide.component.html',
  styleUrls: ['./shared-gide.component.scss']
})
export class SharedGideComponent implements OnInit {

  ceoList: CeoList[] = []

  constructor(private guideList: GuideService) { }

  ngOnInit(): void {
    this.getAllCeo()
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
