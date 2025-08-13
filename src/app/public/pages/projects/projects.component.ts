import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Experience from 'src/app/core/interfaces/Experience';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule],
})
export class ProjectsComponent {
  public arrayExperience: Experience[] = [];
  public arrayProjects: Experience[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.arrayExperience = [
      {
        title: 'Simuladores laborales Universidad del Azuay',
        description:
          'Participé en el desarrollo de simuladores laborales para la Universidad del Azuay, enfocados en fortalecer competencias profesionales en entornos empresariales simulados. La herramienta permite a los usuarios practicar habilidades laborales en escenarios realistas, contribuyendo a su preparación para el mercado laboral.',
        date: '2020 - 2021',
        urlDomain: 'https://simulab.edutech-project.org/',
      },
      {
        title:
          'Diseño, modelado, entorno de videojuegos | Universidad Politécnica Salesiana - EMOV EP',
        description:
          'Colaboré en el diseño y desarrollo de entornos de videojuegos educativos para el proyecto de educación vial en Cuenca. Utilicé sistemas de realidad virtual para crear experiencias interactivas que promueven la seguridad vial entre peatones y conductores, integrando modelado 3D y mecánicas de juego innovadoras.',
        date: '2020 - 2021',
        urlDomain:
          'https://gihp4c.blog.ups.edu.ec/educacion-vial-de-peatones-y-conductores-de-la-ciudad-de-cuenca-a-traves-de-sistemas-de-realidad-virtual',
      },
      {
        title: 'Componentes Accessibles',
        description:
          'Propuse y desarrollé una serie de componentes accesibles utilizando PrimeNg y estándares ARIA, como parte del proyecto ATICA. Estos componentes mejoran la usabilidad de aplicaciones web para personas con discapacidad, promoviendo la inclusión digital y el cumplimiento de normativas de accesibilidad.',
        date: '2020 - 2021',
        urlDomain:
          'https://edutech-erasmus-project.github.io/accessible_frontend_database/#/',
      },
      {
        title: 'Quikly',
        description:
          'Formé parte del equipo de desarrollo del ecommerce Quikly, optimizando el código y modularizando la aplicación para mejorar su rendimiento y escalabilidad. Implementé nuevas funcionalidades utilizando Angular standalone y brindé soporte técnico para las plataformas de servicios de la empresa.',
        date: '2020 - 2021',
        urlDomain: 'https://quikly.app',
      },
      {
        title: 'Tarpuq | Universidad Politécnica Salesiana',
        description:
          'Brindé soporte al sistema de medición de agua Lorawan-Tarpuq, contribuyendo a la integración de tecnologías IoT para el monitoreo eficiente de recursos hídricos. Mi trabajo incluyó la optimización de procesos y la mejora de la interfaz de usuario para facilitar la gestión de datos.',
        date: '2020 - 2021',
        image:
          'http://tarpuq-ems.com/wp-content/uploads/2018/10/logo_tarpuq.png',
        urlDomain: 'https://lorawan.tarpuq.com.ec',
      },
      {
        title: 'Freelancer',
        description:
          'Como freelancer, proporcioné soporte y desarrollo para sistemas contables y plataformas ecommerce, utilizando tecnologías como Angular, Laravel, PostgreSQL y MySQL. Implementé soluciones personalizadas para clientes, asegurando la eficiencia y seguridad de sus sistemas.',
        date: '2020 - 2021',
        urlDomain: 'https://jcev.ec/',
      },
      {
        title: 'Desarrollador de Aplicación para Facturación Electrónica',
        description:
          'Desarrollé una aplicación para facturación electrónica, enfocada en simplificar y agilizar el proceso para pequeñas y medianas empresas. Implementé funcionalidades intuitivas y seguras, facilitando la emisión y gestión de comprobantes electrónicos conforme a la normativa vigente.',
        date: '2020 - 2021',
        urlDomain: 'https://facty.ecuadev.com/',
      },
      {
        title: 'Repositorio de objetos de aprendizaje EduTech',
        description:
          'Participé en la creación del repositorio de objetos de aprendizaje para el Proyecto EduTech, facilitando el acceso y la gestión de recursos educativos digitales. El sistema permite a docentes y estudiantes encontrar materiales relevantes de manera eficiente.',
        date: '2020 - 2021',
        urlDomain: 'https://repositorio.edutech-project.org/',
      },
      {
        title: 'Herramienta de adaptación OerAdap EduTech',
        description:
          'Contribuí al desarrollo de la herramienta OerAdap dentro del Proyecto EduTech, enfocada en adaptar objetos de aprendizaje a diferentes contextos educativos. Implementé mejoras en la interfaz y en los algoritmos de adaptación para optimizar la experiencia de los usuarios.',
        date: '2020 - 2021',
        urlDomain: 'https://oeradap.ups.edu.ec',
      },
      {
        title: 'Repositorio de objetos de aprendizaje ROA',
        description:
          'Desarrollé el Repositorio de Objetos de Aprendizaje (ROA) para la Universidad Politécnica Salesiana, integrando inteligencia artificial para mejorar la búsqueda y recomendación de recursos educativos. Implementé sistemas de control de usuarios y evaluaciones, permitiendo una gestión eficiente y segura de los contenidos. El proyecto facilitó el acceso a materiales didácticos y optimizó la experiencia de aprendizaje digital.',
        date: '2019 - 2020',
        image: 'https://roa.ups.edu.ec/assets/img/nuevoLogoRoa.jpg',
        urlDomain: 'https://roa.ups.edu.ec/#/',
      },
      {
        title: 'Herramienta de adaptación OerAdap',
        description:
          'Diseñé y desarrollé OerAdap como parte de mi tesis en la Universidad Politécnica Salesiana. Esta herramienta adapta objetos de aprendizaje utilizando IA y técnicas de WebScraping, permitiendo personalizar recursos educativos según las necesidades de los usuarios. El proyecto fue implementado con Django y Angular, y se lanzó como una solución de acceso libre para la comunidad educativa.',
        date: '2020 - 2021',
        image:
          'https://oeradap.edutech-project.org/assets/img/image2vector.svg',
        urlDomain: 'https://oeradap.ups.edu.ec/#/',
      },
      {
        title: 'Orion Governance',
        description:
          'En Orion Governance, trabajé en el desarrollo y mejora de la plataforma de gobernanza de datos, utilizando el framework React. Implementé nuevas funcionalidades y optimicé la experiencia de usuario, contribuyendo a la gestión eficiente y segura de datos en organizaciones internacionales.',
        date: '2023 - 2024',
        urlDomain: 'https://www.oriongovernance.com/',
      },
      {
        title: 'Ecuador Direct Roses',
        description:
          'Desarrollo de una plataforma de comercio electrónico con nuevas funcionalidades, experiencia de usuario y diseño responsivo. Esta plataforma permite a los usuarios realizar pedidos personalizados y gestionar la logística de envío de rosas desde Ecuador.',
        date: '2024 - Actualidad',
        urlDomain: 'https://ecuadordirectroses.com',
      },
    ];
    this.arrayExperience = this.arrayExperience.reverse();

    let projectsOne: Experience = {
      title: 'Paleleria',
      description:
        'Este proyecto es una\
      pequeña página web\
      informativa que hace regencia a una papelería. Esta realizada con el framework de Angular',
      date: '2020 - 2021',
      urlDomain: 'https://creative-speculoos-d2788c.netlify.app/',
    };

    let projectsTwo: Experience = {
      title: 'Ricky & Morty',
      description:
        'Este proyecto es una\
      pequeña lista de personajes de\
      la seria Ricky & Morty fue desarrollada con React',
      date: '2020 - 2021',
      urlDomain:
        'https://64fe7fbfecfe8313b9586bb7--quiet-sawine-33d9bf.netlify.app/',
    };
    this.addDataArrayPersonalProjects(projectsOne);
    this.addDataArrayPersonalProjects(projectsTwo);
  }

  private addDataArrayExperience(data: Experience) {
    this.arrayExperience.push(data);
  }

  private addDataArrayPersonalProjects(data: Experience) {
    this.arrayProjects.push(data);
  }

  public sanitizerUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
