import { Component, HostBinding, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('inOutPaneAnimation', [
      transition(':enter', [
          style({ opacity: 0, transform: 'translateY(-100%)' }),
          animate(
              '750ms ease-in-out',
              style({ opacity: 1, transform: 'translateY(0)' })
          )
      ]),
      transition(':leave', [
          style({ opacity: 1, transform: 'translateY(0)' }),
          animate(
              '600ms ease-in-out',
              style({ opacity: 0, transform: 'translateY(-100%)' })
          )
      ])
  ])
  ]
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  };
  certifications: any[] = [];

  listFrontEnd = false;
  listBackend = false;
  listSoftware = false;
  listOthers = false;
  currentYear: number;
  yearAgo: number;
  @HostBinding('class.navbar-opened') navbarOpened = false;

  private idiomas: Array<string>;
  lenguage: string = "";

  constructor(public translate: TranslateService) {
    this.idiomas = ['es', 'en'];
    translate.addLangs(this.idiomas);
    translate.setDefaultLang('es');
    this.lenguage = "es";
  }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.yearAgo = this.currentYear - 2014;

    this.certifications = [
      {
        imagePath: './../../../assets/img/CiscoCCNALogo.png',
        certificate: 'Cisco',
        nameCertificate: 'CCNA Routing and Switching: Introduccción a redes'
      },
      {
        imagePath: './../../../assets/img/CiscoCCNALogo.png',
        certificate: 'Cisco',
        nameCertificate: 'CCNA Routing and Switching: Principios básicos de routing y switching'
      },
      {
        imagePath: './../../../assets/img/CiscoCCNALogo.png',
        certificate: 'Cisco',
        nameCertificate: 'CCNA Routing and Switching: Escalamiento de redes'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Azure DevOps Fundamentals for Beginners'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'C# Advanced Topics Prepare for Technical Interviews'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Data Warehouse Developer-SQL Server ETL SSIS SSAS SSRS T-SQL'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Git+GitHub Todo un Sistema de Control de Versiones de Cero'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'JavaScript Moderno Guía Definitiva Construye +15 Proyectos'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'The Complete ASP.NET MVC 5 Course'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Using SQL, create analytical functions, grouping sets, ranking functions, spatial aggregates'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Web Design for Beginners Real World Coding int HTML & CSS'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Mastering SQL Server 2016 Integration Services (SSIS)-Part 1'
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Diseño de prototipos digitales con Marvel, ProtoIO y Figma'
      },
      {
        imagePath: './../../../assets/img/PMCLogo.png',
        certificate: 'Punto México Conecta',
        nameCertificate: 'Robótica Básica'
      },
      {
        imagePath: './../../../assets/img/PMCLogo.png',
        certificate: 'Punto México Conecta',
        nameCertificate: 'Robótica Intermedia'
      }
    ];
  }

  showFrontendList(): void {
    this.listFrontEnd = !this.listFrontEnd;
  }

  showBackendList(): void {
    this.listBackend = !this.listBackend;
  }

  showSoftwareList(): void {
    this.listSoftware = !this.listSoftware;
  }

  showOthersList(): void {
    this.listOthers = !this.listOthers;
  }

  toggleNavbar(): void {
    this.navbarOpened = !this.navbarOpened;
  }

  changeLanguage(lenguage: string): void {
    this.lenguage = lenguage;
    this.translate.setDefaultLang(lenguage);
  }

}
