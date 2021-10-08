import { NewsList } from './../../core/pages/news';
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
  newsItem: any;
  id!: unknown | undefined;

  constructor(private newsListItem: NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(id => {
      this.id = id.get('id')
      this.getNewsItem()
    }, err => {
      console.log(err);
    })
  }

  // Get News By ID
  getNewsItem() {
    this.newsListItem.getNewsById(this.id).subscribe(res => {
      this.newsItem = res
    },
    err => {
      console.log(err);
    })
  }
}

