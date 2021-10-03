import { Component, Input, OnInit } from '@angular/core';
import { NewsList } from 'src/app/core/pages/news';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-shared-news',
  templateUrl: './shared-news.component.html',
  styleUrls: ['./shared-news.component.scss']
})
export class SharedNewsComponent implements OnInit {

  @Input() sectionTitle!: string;
  @Input() classes!: string;
  showInLargScreen!: boolean;
  showInSmallScreen!: boolean;
  newsListItems: NewsList[] = []

  constructor( private newsList: NewsService) { }

  ngOnInit(): void {
    this.getNewsList()
    this.changeViewInScreenSize();
  }

  changeViewInScreenSize() {
    if (window.innerWidth >= 991) {
      this.showInLargScreen = true;
      this.showInSmallScreen = false;
    } else {
      this.showInLargScreen = false;
      this.showInSmallScreen = true;
    }
  }

  getNewsList() {
    this.newsList.getAllNews().subscribe((res: any) => {
      this.newsListItems = res.data
    })
  }

}
