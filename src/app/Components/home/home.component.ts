import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { animate, style, transition, trigger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { PortfolioViewModel } from 'src/app/models/portfolioViewModel';

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
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate(
          '600ms ease-in-out',
          style({ opacity: 0, transform: 'translateY(-100%)' })
        ),
      ]),
    ]),
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.5, .5, .5)' }),
        animate(300),
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'scale3d(.0, .0, .0)' })),
      ]),
    ]),
  ],
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
    navText: [
      '<i class="fa fa-caret-left"></i>',
      '<i class="fa fa-caret-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: true,
  };
  certifications: any[] = [];
  portfolio: PortfolioViewModel;

  listFrontEnd = false;
  listBackend = false;
  listSoftware = false;
  listOthers = false;
  currentYear: number;
  yearAgo: number;
  modal: boolean;
  backToTopButton: boolean;
  @HostBinding('class.navbar-opened') navbarOpened = false;

  private idiomas: Array<string>;
  lenguage: string;

  constructor(public translate: TranslateService) {
    this.idiomas = ['es', 'en'];
    translate.addLangs(this.idiomas);
    translate.setDefaultLang('es');
    this.lenguage = 'es';
  }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.yearAgo = this.currentYear - 2014;
    this.modal = false;
    this.backToTopButton = false;

    this.certifications = [
      {
        imagePath: './../../../assets/img/CiscoCCNALogo.png',
        certificate: 'Cisco',
        nameCertificate: 'CCNA Routing and Switching: Introduccción a redes',
      },
      {
        imagePath: './../../../assets/img/CiscoCCNALogo.png',
        certificate: 'Cisco',
        nameCertificate:
          'CCNA Routing and Switching: Principios básicos de routing y switching',
      },
      {
        imagePath: './../../../assets/img/CiscoCCNALogo.png',
        certificate: 'Cisco',
        nameCertificate: 'CCNA Routing and Switching: Escalamiento de redes',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Azure DevOps Fundamentals for Beginners',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'C# Advanced Topics Prepare for Technical Interviews',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate:
          'Data Warehouse Developer-SQL Server ETL SSIS SSAS SSRS T-SQL',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate:
          'Git+GitHub Todo un Sistema de Control de Versiones de Cero',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate:
          'JavaScript Moderno Guía Definitiva Construye +15 Proyectos',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'The Complete ASP.NET MVC 5 Course',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate:
          'Using SQL, create analytical functions, grouping sets, ranking functions, spatial aggregates',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate:
          'Web Design for Beginners Real World Coding int HTML & CSS',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate:
          'Mastering SQL Server 2016 Integration Services (SSIS)-Part 1',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate:
          'Diseño de prototipos digitales con Marvel, ProtoIO y Figma',
      },
      {
        imagePath: './../../../assets/img/UdemyLogo.png',
        certificate: 'Udemy',
        nameCertificate: 'Web Server IIS Mastery Course',
      },
      {
        imagePath: './../../../assets/img/Plurasight.png',
        certificate: 'Plurasight',
        nameCertificate: 'Csharp Clean Coding Principles',
      },
      {
        imagePath: './../../../assets/img/PMCLogo.png',
        certificate: 'Punto México Conecta',
        nameCertificate: 'Robótica Básica',
      },
      {
        imagePath: './../../../assets/img/PMCLogo.png',
        certificate: 'Punto México Conecta',
        nameCertificate: 'Robótica Intermedia',
      },
    ];
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event): void {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      this.backToTopButton = true;
    } else {
      this.backToTopButton = false;
    }
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

  backtoTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  hideModal(): void {
    this.modal = false;
  }

  showPopUpByWebPage(webPage: string): void {
    this.modal = true;
    switch (webPage) {
      case 'DIME':
        this.portfolio = {
          imgPath: './../../../assets/img/pwDIME.png',
          descriptionText: 'DIMEDescriptionText',
          technologyUsed: [
            {
              technologyName: 'HTML',
              imgPath: './../../../assets/img/html.png',
            },
            {
              technologyName: 'CSS3',
              imgPath: './../../../assets/img/css.png',
            },
            {
              technologyName: 'JS',
              imgPath: './../../../assets/img/js.png',
            },
            {
              technologyName: 'Bootstrap',
              imgPath: './../../../assets/img/bootstrap.png',
            },
            {
              technologyName: 'PHP',
              imgPath: './../../../assets/img/php.png',
            },
          ],
          demo: {
            hasADemo: true,
            linkDemo: '',
          },
        };
        break;

      case 'COVID':
        this.portfolio = {
          imgPath: './../../../assets/img/pwCovid.png',
          descriptionText: 'COVIDDescriptionText',
          technologyUsed: [
            {
              technologyName: 'HTML',
              imgPath: './../../../assets/img/html.png',
            },
            {
              technologyName: 'CSS3',
              imgPath: './../../../assets/img/css.png',
            },
            {
              technologyName: 'JS',
              imgPath: './../../../assets/img/js.png',
            },
            {
              technologyName: 'Bootstrap',
              imgPath: './../../../assets/img/bootstrap.png',
            },
            {
              technologyName: 'PHP',
              imgPath: './../../../assets/img/php.png',
            },
            {
              technologyName: 'Laravel',
              imgPath: './../../../assets/img/laravel.png',
            },
          ],
          demo: {
            hasADemo: true,
            linkDemo: '',
          },
        };
        break;

      case 'University':
        this.portfolio = {
          imgPath: './../../../assets/img/pwUniversidad.png',
          descriptionText: 'UniversityDescriptionText',
          technologyUsed: [
            {
              technologyName: 'HTML',
              imgPath: './../../../assets/img/html.png',
            },
            {
              technologyName: 'CSS3',
              imgPath: './../../../assets/img/css.png',
            },
            {
              technologyName: 'JS',
              imgPath: './../../../assets/img/js.png',
            },
            {
              technologyName: 'Bootstrap',
              imgPath: './../../../assets/img/bootstrap.png',
            },
          ],
          demo: {
            hasADemo: true,
            linkDemo: '',
          },
        };
        break;

      case 'RFID':
        this.portfolio = {
          imgPath: './../../../assets/img/pwRFID.png',
          descriptionText: 'RFIDDescriptionText',
          technologyUsed: [
            {
              technologyName: 'HTML',
              imgPath: './../../../assets/img/html.png',
            },
            {
              technologyName: 'CSS3',
              imgPath: './../../../assets/img/css.png',
            },
            {
              technologyName: 'JS',
              imgPath: './../../../assets/img/js.png',
            },
            {
              technologyName: 'Bootstrap',
              imgPath: './../../../assets/img/bootstrap.png',
            },
            {
              technologyName: 'jQuery',
              imgPath: './../../../assets/img/jQuery.png',
            },
            {
              technologyName: 'MVC',
              imgPath: './../../../assets/img/net.png',
            },
            {
              technologyName: 'SQL',
              imgPath: './../../../assets/img/sql.png',
            }
          ],
          demo: {
            hasADemo: false,
            linkDemo: '',
          },
        };
        break;

      case 'eQuoting':
        this.portfolio = {
          imgPath: './../../../assets/img/pweQuoting.png',
          descriptionText: 'eQuotingDescriptionText',
          technologyUsed: [
            {
              technologyName: 'HTML',
              imgPath: './../../../assets/img/html.png',
            },
            {
              technologyName: 'CSS3',
              imgPath: './../../../assets/img/css.png',
            },
            {
              technologyName: 'TypeScript',
              imgPath: './../../../assets/img/typeScript.png',
            },
            {
              technologyName: 'Bootstrap',
              imgPath: './../../../assets/img/bootstrap.png',
            },
            {
              technologyName: 'Angular',
              imgPath: './../../../assets/img/angular.png',
            },
            {
              technologyName: 'MVC',
              imgPath: './../../../assets/img/net.png',
            },
            {
              technologyName: 'SQL',
              imgPath: './../../../assets/img/sql.png',
            }
          ],
          demo: {
            hasADemo: false,
            linkDemo: '',
          },
        };
        break;

      case 'Portafolio':
        this.portfolio = {
          imgPath: './../../../assets/img/pweQuoting.png',
          descriptionText: 'portfolioDescriptionText',
          technologyUsed: [
            {
              technologyName: 'HTML',
              imgPath: './../../../assets/img/html.png',
            },
            {
              technologyName: 'CSS3',
              imgPath: './../../../assets/img/css.png',
            },
            {
              technologyName: 'TypeScript',
              imgPath: './../../../assets/img/typeScript.png',
            },
            {
              technologyName: 'Bootstrap',
              imgPath: './../../../assets/img/bootstrap.png',
            },
            {
              technologyName: 'Angular',
              imgPath: './../../../assets/img/angular.png',
            }
          ],
          demo: {
            hasADemo: false,
            linkDemo: '',
          },
        };
        break;

      default:
        this.modal = false;
        break;
    }
  }

  goToRepositoryByWebPage(webPage: string): void {
    switch (webPage) {
      case 'DIME':
        break;

      case 'Portafolio':
        const win = window.open(
          'https://github.com/MartinRaygozaLopez/MyPortfolio',
          '_blank'
        );
        win.focus();
        break;

      default:
        this.modal = false;
        break;
    }
  }
}
