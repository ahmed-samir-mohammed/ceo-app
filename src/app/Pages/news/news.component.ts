import { Component, OnInit } from '@angular/core';
import { NewsList } from 'src/app/core/pages/news';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsListItems: NewsList[] = []

  constructor(private newsList: NewsService) { }

  ngOnInit(): void {
    this.getAllNewsList()
  }

  // Get All News List
  getAllNewsList() {
    this.newsList.getAllNews().subscribe((res: any) => {
      this.newsListItems = res.data
    },
    err => {
      console.log(err);
    })
  }
}
