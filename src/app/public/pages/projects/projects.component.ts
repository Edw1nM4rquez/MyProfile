import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Experience from 'src/app/core/interfaces/Experience';

@Component({
  selector: 'app-projects',
  standalone:true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule]
})
export class ProjectsComponent {

  public arrayExperience: Experience[]= [];
  public arrayProjects: Experience[] = [];

  constructor(
    private sanitizer: DomSanitizer
  ){
    let experienceOne: Experience ={
      title:'Repositorio de objetos de aprendizaje ROA',
      description:'Repositorio de objetos de\
      aprendizaje: Proyecto realizado para la Universidad Politecnica Salesiana\
      se uso IA, Sistema de recomendaciones, control de usuarios, sistema de evaluaciones, entre\
      otros.',
      date:'2019 - 2020',
      image:'https://roa.ups.edu.ec/assets/img/nuevoLogoRoa.jpg',
      urlDomain:'https://roa.ups.edu.ec/#/'
    }

    let experienceTwo: Experience ={
      title:'Herramienta de adaptacion OerAdap',
      description:'Es una herramienta que\
      adapta los objetos de aprendizaje: Proyecto se realizo como tesis dentro de la Universidad\
      Politecnica Salesiana\
      y se lanzo a produccion. Su uso es libre, se uso IA, WebScraping, Django, Angular.',
      date:'2020 - 2021',
      image:'https://oeradap.edutech-project.org/assets/img/image2vector.svg',
      urlDomain:'https://oeradap.ups.edu.ec/#/'
    }

    let experienceThree: Experience ={
      title:'Simuladores laborales Universidad del Azuay',
      description:'Es una herramienta que te\
      ayuda a obtener competencias laborales dentro de una empresa. Proyecto EduTech | Universidad del\
      Azuay.',
      date:'2020 - 2021',
      urlDomain:'https://simulab.edutech-project.org/'
    }

    let experienceFour: Experience ={
      title:' Diseño, modelado, entorno de video juegos | Universidad Politecnica Salesiana - EMOV EP',
      description:'Dentro del Proyecto\
       |Educación\
      vial de peatones y conductores de la\
      ciudad de Cuenca a través de sistemas de realidad virtual.',
      date:'2020 - 2021',
      urlDomain:'https://gihp4c.blog.ups.edu.ec/educacion-vial-de-peatones-y-conductores-de-la-ciudad-de-cuenca-a-traves-de-sistemas-de-realidad-virtual'
    }

    let experienceFive: Experience ={
      title:'Componentes Accessibles',
      description:'Propuesta de componentes\
      accesibles con el uso de PrimeNg y Aria accesibles (ATICA).',
      date:'2020 - 2021',
      urlDomain:'https://edutech-erasmus-project.github.io/accessible_frontend_database/#/'
    }

    let experienceSix: Experience ={
      title:'Quikly',
      description:'Participacion dentro de la creacion del Ecommerce perteneciente al\
      Grupo Quikly y desarrollo de software. Soporte dentro de plataformas que la empresa brinda servicios.\
      Optimizacion de codigo, modularizacion de la aplicacion. Uso de standalone en la nueva version de Angular',
      date:'2020 - 2021',
      urlDomain:'https://quikly.app'
    }

    let experienceSeven: Experience ={
      title:'Tarpuq | Universidad Politecnica Salesiana',
      description:'Soporte al sistema de\
      medición de agua Lorawan-Tarpuq.',
      date:'2020 - 2021',
      image:'http://tarpuq-ems.com/wp-content/uploads/2018/10/logo_tarpuq.png',
      urlDomain:'https://lorawan.tarpuq.com.ec'
    }

    let experienceEight: Experience ={
      title:'Freelancer',
      description:'Soporte a sistema contable\
      y sistemas ecommerce,\
      con el uso de tegnologías como Angular, Laravel, PostgreSql y Mysql.',
      date:'2020 - 2021',
      urlDomain:'https://jcev.ec/'
    }

    let experienceNine: Experience ={
      title:'Desarrollador de Aplicación para Facturación Electrónica',
      description:'Proyecto de sistema para\
      facturación electrónica de manera facíl y rapida.',
      date:'2020 - 2021',
     urlDomain:'https://facty.ecuadev.com/'
    }

    let experienceTen: Experience ={
      title:'Repositorio de objetos de aprendizaje EduTech',
      description:'Este proyecto es un\
      repositorio de objetos de aprendizaje del Proyecto EduTech.',
      date:'2020 - 2021',
     urlDomain:'https://repositorio.edutech-project.org/'
    }

    let experienceEleven: Experience ={
      title:'Herramienta de adaptacion OerAdap EduTech',
      description:'Es una herramienta que\
      adapta los objetos de aprendizaje.\
      Que se trabajo dentro del Proyecto EduTech.',
      date:'2020 - 2021',
     urlDomain:'https://oeradap.ups.edu.ec/#/'
    }

    this.addDataArrayExperience(experienceOne);
    this.addDataArrayExperience(experienceTwo);
    this.addDataArrayExperience(experienceThree);
    this.addDataArrayExperience(experienceFour);
    this.addDataArrayExperience(experienceFive);
    this.addDataArrayExperience(experienceSix);
    this.addDataArrayExperience(experienceSeven);
    this.addDataArrayExperience(experienceEight);
    this.addDataArrayExperience(experienceNine);
    this.addDataArrayExperience(experienceThree);
    this.addDataArrayExperience(experienceTen);
    this.addDataArrayExperience(experienceEleven)

    let projectsOne: Experience ={
      title:'Paleleria',
      description:'Este proyecto es una\
      pequeña página web\
      informativa que hace regencia a una papelería. Esta realizada con el framework de Angular',
      date:'2020 - 2021',
     urlDomain:'https://creative-speculoos-d2788c.netlify.app/'
    }
    
    let projectsTwo: Experience ={
      title:'Ricky & Morty',
      description:'Este proyecto es una\
      pequeña lista de personajes de\
      la seria Ricky & Morty fue desarrollada con React',
      date:'2020 - 2021',
     urlDomain:'https://64fe7fbfecfe8313b9586bb7--quiet-sawine-33d9bf.netlify.app/'
    }
    this.addDataArrayPersonalProjects(projectsOne);
    this.addDataArrayPersonalProjects(projectsTwo);
  }

  private addDataArrayExperience(data:Experience){
    this.arrayExperience.push(data)
  }

  private addDataArrayPersonalProjects(data:Experience){
    this.arrayProjects.push(data);
  }

  public sanitizerUrl(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
