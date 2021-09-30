import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  sectionTitle = 'الأخبار ذات العلاقة'
  classes: string = 'bg-f4f6fc'
  newsListItems!: any;
  id!:number;

  constructor(private newsListItem: NewsService, active: ActivatedRoute) {
    this.id = active.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getNewsItem()
  }

  // Get News By ID
  getNewsItem() {
    this.newsListItem.getNewsById(this.id).subscribe((res: any) => {
      this.newsListItems = res
      console.log(this.newsListItems)
    })
  }
}

