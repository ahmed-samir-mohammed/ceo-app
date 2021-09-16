import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    sectionTitle = "آخر الأخبار";
    id: string = "tsparticles";
    particlesOptions: {} = {
        fpsLimit: 60,
        particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#fff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#ff0000'
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: '',
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .3,
            random: true,
            anim: {
                enable: false,
                speed: 2,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 4,
            random: false,
            anim: {
                enable: false,
                speed: 20,
                size_min: 0,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#fff',
            opacity: .5,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 3000,
                rotateY: 3000
            }
        },
        array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: false,
        detectRetina: true
    };

    constructor() { }

    ngOnInit(): void {

    }
}

