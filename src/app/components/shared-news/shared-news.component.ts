import { Component, OnInit } from '@angular/core';
import { NewsList } from 'src/app/core/pages/news';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-shared-news',
  templateUrl: './shared-news.component.html',
  styleUrls: ['./shared-news.component.scss']
})
export class SharedNewsComponent implements OnInit {

  newsListItems: NewsList[] = []

  constructor( private newsList: NewsService) { }

  ngOnInit(): void {
    this.getNewsList()
  }

    // Get All News List
  getNewsList() {
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
