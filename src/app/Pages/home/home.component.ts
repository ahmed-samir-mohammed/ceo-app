import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsList } from 'src/app/core/pages/news';
import { NewsService } from 'src/app/core/services/news.service';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id: string = "tsparticles";

  particlesOptions: {} = {
    fpsLimit: 60,
    interactivity: {
        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: "#ffffff"
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 4,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            random: true,
            value: 5
        }
    },
    detectRetina: true
  };

  newsListItems: NewsList[] = []

  constructor(private router: Router, private newsList: NewsService) { }

  ngOnInit(): void {

    // News List Section
    this.newsList.getAllNews().subscribe((res: any) => {
      this.newsListItems = res
    })
  }

  goToNewsDetails(id: number) {
    this.router.navigate(['/news', id])
  }

  particlesLoaded(container: Container): void {}
  particlesInit(main: Main): void {}
}

