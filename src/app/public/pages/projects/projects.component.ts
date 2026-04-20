import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import Experience from 'src/app/core/interfaces/Experience';
import { LangService } from 'src/app/core/services/lang.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule, RouterLink],
})
export class ProjectsComponent {
  private readonly experienceEs: Experience[] = [
    { title: 'Tifozzi Ecuador - Desarrollador Web', description: 'Desarrollé el sitio web oficial de Tifozzi, cadena de restaurantes de cocina italo-argentina con más de 5 sucursales en Azogues, Cuenca y Cañar, fundada en 2013. Implementé catálogo de menú interactivo, sistema de reservaciones, carta digital en PDF, selector de sucursales y diseño responsivo acorde a la identidad de la marca.', date: 'mar.2026', urlDomain: 'https://www.tifozziecuador.com/' },
    { title: 'Ecuador Direct Roses', description: 'Desarrollo de una plataforma de comercio electrónico con nuevas funcionalidades, experiencia de usuario y diseño responsivo. Esta plataforma permite a los usuarios realizar pedidos personalizados y gestionar la logística de envío de rosas desde Ecuador.', date: '2024 - Actualidad', urlDomain: 'https://ecuadordirectroses.com' },
    { title: 'Orion Governance', description: 'En Orion Governance, trabajé en el desarrollo y mejora de la plataforma de gobernanza de datos, utilizando el framework React. Implementé nuevas funcionalidades y optimicé la experiencia de usuario, contribuyendo a la gestión eficiente y segura de datos en organizaciones internacionales.', date: '2023 - 2024', urlDomain: 'https://www.oriongovernance.com/' },
    { title: 'Herramienta de adaptación OerAdap', description: 'Diseñé y desarrollé OerAdap como parte de mi tesis en la Universidad Politécnica Salesiana. Esta herramienta adapta objetos de aprendizaje utilizando IA y técnicas de WebScraping, permitiendo personalizar recursos educativos según las necesidades de los usuarios. El proyecto fue implementado con Django y Angular, y se lanzó como una solución de acceso libre para la comunidad educativa.', date: '2020 - 2021', image: 'https://oeradap.edutech-project.org/assets/img/image2vector.svg', urlDomain: 'https://oeradap.ups.edu.ec/#/' },
    { title: 'Repositorio de objetos de aprendizaje ROA', description: 'Desarrollé el Repositorio de Objetos de Aprendizaje (ROA) para la Universidad Politécnica Salesiana, integrando inteligencia artificial para mejorar la búsqueda y recomendación de recursos educativos. Implementé sistemas de control de usuarios y evaluaciones, permitiendo una gestión eficiente y segura de los contenidos. El proyecto facilitó el acceso a materiales didácticos y optimizó la experiencia de aprendizaje digital.', date: '2019 - 2020', image: 'https://roa.ups.edu.ec/assets/img/nuevoLogoRoa.jpg', urlDomain: 'https://roa.ups.edu.ec/#/' },
    { title: 'Herramienta de adaptación OerAdap EduTech', description: 'Contribuí al desarrollo de la herramienta OerAdap dentro del Proyecto EduTech, enfocada en adaptar objetos de aprendizaje a diferentes contextos educativos. Implementé mejoras en la interfaz y en los algoritmos de adaptación para optimizar la experiencia de los usuarios.', date: '2020 - 2021', urlDomain: 'https://oeradap.ups.edu.ec' },
    { title: 'Repositorio de objetos de aprendizaje EduTech', description: 'Participé en la creación del repositorio de objetos de aprendizaje para el Proyecto EduTech, facilitando el acceso y la gestión de recursos educativos digitales. El sistema permite a docentes y estudiantes encontrar materiales relevantes de manera eficiente.', date: '2020 - 2021', urlDomain: 'https://repositorio.edutech-project.org/' },
    { title: 'Desarrollador de Aplicación para Facturación Electrónica', description: 'Desarrollé una aplicación para facturación electrónica, enfocada en simplificar y agilizar el proceso para pequeñas y medianas empresas. Implementé funcionalidades intuitivas y seguras, facilitando la emisión y gestión de comprobantes electrónicos conforme a la normativa vigente.', date: '2020 - 2021', urlDomain: 'https://facty.ecuadev.com/' },
    { title: 'Freelancer', description: 'Como freelancer, proporcioné soporte y desarrollo para sistemas contables y plataformas ecommerce, utilizando tecnologías como Angular, Laravel, PostgreSQL y MySQL. Implementé soluciones personalizadas para clientes, asegurando la eficiencia y seguridad de sus sistemas.', date: '2020 - 2021', urlDomain: 'https://jcev.ec/' },
    { title: 'Tarpuq | Universidad Politécnica Salesiana', description: 'Brindé soporte al sistema de medición de agua Lorawan-Tarpuq, contribuyendo a la integración de tecnologías IoT para el monitoreo eficiente de recursos hídricos. Mi trabajo incluyó la optimización de procesos y la mejora de la interfaz de usuario para facilitar la gestión de datos.', date: '2020 - 2021', image: 'http://tarpuq-ems.com/wp-content/uploads/2018/10/logo_tarpuq.png', urlDomain: 'https://lorawan.tarpuq.com.ec' },
    { title: 'Quikly', description: 'Formé parte del equipo de desarrollo del ecommerce Quikly, optimizando el código y modularizando la aplicación para mejorar su rendimiento y escalabilidad. Implementé nuevas funcionalidades utilizando Angular standalone y brindé soporte técnico para las plataformas de servicios de la empresa.', date: '2020 - 2021', urlDomain: 'https://quikly.app' },
    { title: 'Componentes Accessibles', description: 'Propuse y desarrollé una serie de componentes accesibles utilizando PrimeNg y estándares ARIA, como parte del proyecto ATICA. Estos componentes mejoran la usabilidad de aplicaciones web para personas con discapacidad, promoviendo la inclusión digital y el cumplimiento de normativas de accesibilidad.', date: '2020 - 2021', urlDomain: 'https://edutech-erasmus-project.github.io/accessible_frontend_database/#/' },
    { title: 'Diseño, modelado, entorno de videojuegos | Universidad Politécnica Salesiana - EMOV EP', description: 'Colaboré en el diseño y desarrollo de entornos de videojuegos educativos para el proyecto de educación vial en Cuenca. Utilicé sistemas de realidad virtual para crear experiencias interactivas que promueven la seguridad vial entre peatones y conductores, integrando modelado 3D y mecánicas de juego innovadoras.', date: '2020 - 2021', urlDomain: 'https://gihp4c.blog.ups.edu.ec/educacion-vial-de-peatones-y-conductores-de-la-ciudad-de-cuenca-a-traves-de-sistemas-de-realidad-virtual' },
    { title: 'Simuladores laborales Universidad del Azuay', description: 'Participé en el desarrollo de simuladores laborales para la Universidad del Azuay, enfocados en fortalecer competencias profesionales en entornos empresariales simulados. La herramienta permite a los usuarios practicar habilidades laborales en escenarios realistas, contribuyendo a su preparación para el mercado laboral.', date: '2020 - 2021', urlDomain: 'https://simulab.edutech-project.org/' },
  ];

  private readonly experienceEn: Experience[] = [
    { title: 'Tifozzi Ecuador - Web Developer', description: 'Developed the official website for Tifozzi, an italo-argentinian restaurant chain with 5+ locations in Azogues, Cuenca and Cañar, founded in 2013. Implemented an interactive menu catalog, reservation system, digital PDF menu, branch selector and responsive design aligned with brand identity.', date: 'Mar.2026', urlDomain: 'https://www.tifozziecuador.com/' },
    { title: 'Ecuador Direct Roses', description: 'Developed an e-commerce platform with new features, improved user experience and responsive design. The platform allows users to place custom orders and manage shipping logistics for roses from Ecuador.', date: '2024 - Present', urlDomain: 'https://ecuadordirectroses.com' },
    { title: 'Orion Governance', description: 'At Orion Governance, I worked on developing and improving the data governance platform using the React framework. Implemented new features and optimized the user experience, contributing to efficient and secure data management for international organizations.', date: '2023 - 2024', urlDomain: 'https://www.oriongovernance.com/' },
    { title: 'OerAdap Adaptation Tool', description: 'Designed and developed OerAdap as part of my thesis at Universidad Politécnica Salesiana. The tool adapts learning objects using AI and web scraping techniques, enabling personalized educational resources for users. Built with Django and Angular, released as a free solution for the educational community.', date: '2020 - 2021', image: 'https://oeradap.edutech-project.org/assets/img/image2vector.svg', urlDomain: 'https://oeradap.ups.edu.ec/#/' },
    { title: 'ROA Learning Object Repository', description: 'Developed the Learning Object Repository (ROA) for Universidad Politécnica Salesiana, integrating AI to improve search and recommendation of educational resources. Implemented user control and evaluation systems for efficient and secure content management.', date: '2019 - 2020', image: 'https://roa.ups.edu.ec/assets/img/nuevoLogoRoa.jpg', urlDomain: 'https://roa.ups.edu.ec/#/' },
    { title: 'OerAdap EduTech Adaptation Tool', description: 'Contributed to the development of the OerAdap tool within the EduTech Project, aimed at adapting learning objects to different educational contexts. Improved interface and adaptation algorithms to enhance user experience.', date: '2020 - 2021', urlDomain: 'https://oeradap.ups.edu.ec' },
    { title: 'EduTech Learning Object Repository', description: 'Participated in the creation of the learning object repository for the EduTech Project, facilitating access and management of digital educational resources. The system helps teachers and students efficiently find relevant materials.', date: '2020 - 2021', urlDomain: 'https://repositorio.edutech-project.org/' },
    { title: 'Electronic Invoicing Application', description: 'Developed an electronic invoicing application focused on simplifying and streamlining the process for small and medium-sized businesses. Implemented intuitive and secure features for issuing and managing electronic documents per local regulations.', date: '2020 - 2021', urlDomain: 'https://facty.ecuadev.com/' },
    { title: 'Freelancer', description: 'As a freelancer, provided support and development for accounting systems and e-commerce platforms using Angular, Laravel, PostgreSQL and MySQL. Delivered custom solutions for clients ensuring efficiency and security.', date: '2020 - 2021', urlDomain: 'https://jcev.ec/' },
    { title: 'Tarpuq | Universidad Politécnica Salesiana', description: 'Provided support for the Lorawan-Tarpuq water measurement system, contributing to IoT technology integration for efficient water resource monitoring. Optimized processes and improved the user interface for better data management.', date: '2020 - 2021', image: 'http://tarpuq-ems.com/wp-content/uploads/2018/10/logo_tarpuq.png', urlDomain: 'https://lorawan.tarpuq.com.ec' },
    { title: 'Quikly', description: 'Joined the Quikly e-commerce development team, optimizing and modularizing the application to improve performance and scalability. Implemented new features using Angular standalone and provided technical support for company service platforms.', date: '2020 - 2021', urlDomain: 'https://quikly.app' },
    { title: 'Accessible Components', description: 'Proposed and developed a series of accessible components using PrimeNg and ARIA standards as part of the ATICA project. These components improve web app usability for people with disabilities, promoting digital inclusion and accessibility compliance.', date: '2020 - 2021', urlDomain: 'https://edutech-erasmus-project.github.io/accessible_frontend_database/#/' },
    { title: 'Game Design & Modeling | UPS - EMOV EP', description: 'Collaborated in the design and development of educational video game environments for a road safety project in Cuenca. Used virtual reality systems to create interactive experiences promoting road safety among pedestrians and drivers, integrating 3D modeling and innovative game mechanics.', date: '2020 - 2021', urlDomain: 'https://gihp4c.blog.ups.edu.ec/educacion-vial-de-peatones-y-conductores-de-la-ciudad-de-cuenca-a-traves-de-sistemas-de-realidad-virtual' },
    { title: 'Labor Simulators - Universidad del Azuay', description: 'Participated in the development of labor simulators for Universidad del Azuay, focused on strengthening professional competencies in simulated business environments. The tool allows users to practice workplace skills in realistic scenarios.', date: '2020 - 2021', urlDomain: 'https://simulab.edutech-project.org/' },
  ];

  private readonly projectsEs: Experience[] = [
    { title: 'Paleleria', description: 'Pequeña página web informativa para una papelaría. Realizada con el framework de Angular.', date: '2020 - 2021', urlDomain: 'https://creative-speculoos-d2788c.netlify.app/' },
    { title: 'Ricky & Morty', description: 'Lista de personajes de la serie Ricky & Morty desarrollada con React.', date: '2020 - 2021', urlDomain: 'https://64fe7fbfecfe8313b9586bb7--quiet-sawine-33d9bf.netlify.app/' },
  ];

  private readonly projectsEn: Experience[] = [
    { title: 'Stationery Store', description: 'Small informational website for a stationery store, built with the Angular framework.', date: '2020 - 2021', urlDomain: 'https://creative-speculoos-d2788c.netlify.app/' },
    { title: 'Ricky & Morty', description: 'List of Ricky & Morty characters developed with React.', date: '2020 - 2021', urlDomain: 'https://64fe7fbfecfe8313b9586bb7--quiet-sawine-33d9bf.netlify.app/' },
  ];

  get arrayExperience(): Experience[] {
    return this.lang.lang === 'en' ? this.experienceEn : this.experienceEs;
  }

  get arrayProjects(): Experience[] {
    return this.lang.lang === 'en' ? this.projectsEn : this.projectsEs;
  }

  constructor(public lang: LangService) {}

  /** Hostname for lightweight preview (avoids embedding many third-party iframes). */
  displayHost(url: string): string {
    try {
      const normalized = /^https?:\/\//i.test(url) ? url : `https://${url}`;
      return new URL(normalized).hostname;
    } catch {
      return url.replace(/^https?:\/\//i, '').split('/')[0] || url;
    }
  }
}
