import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsList } from 'src/app/core/pages/news';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsListItems: NewsList[] = []

  constructor(private router: Router, private newsList: NewsService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.getAllNewsList()
  }

  // Get All News List
  getAllNewsList() {
    this.newsList.getAllNews().subscribe((res: any) => {
      this.newsListItems = res
    })
  }

  // Get News By ID
  getNewsItem(id: number) {
    this.newsList.getNewsById(id).subscribe((res: any) => {
      this.newsListItems = res
      console.log(this.newsListItems)
    })
  }
}
