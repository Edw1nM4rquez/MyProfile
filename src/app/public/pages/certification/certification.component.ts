import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import Certificate from 'src/app/core/interfaces/Certificate';

@Component({
  selector: 'app-certification',
  standalone: true,
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
  imports: [CommonModule],
})
export class CertificationComponent {
  @Input() isPreview: boolean = false;
  
  public arrayCertificate: Certificate[] = [];
  private udemyUrlImage =
    'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg';
  private ciscoUrlImage =
    'https://www.netacad.com/sites/all/themes/custom/prelogin/assets/img/cisco_netacad_logo.png';
  private uahUrlImage =
    'https://www.uah.es/export/sites/uah/.galleries/imagenes-estructura/logo1.png_105938625.png';
  private upsUrlImage = '';

  get displayedCertificates() {
    return this.isPreview ? this.arrayCertificate.slice(0, 4) : this.arrayCertificate;
  }

  openCertificate(url: string) {
    window.open(url, '_blank');
  }

  constructor() {
    this.arrayCertificate = [
      {
        urlCertificate:
          'https://www.udemy.com/certificate/UC-0aad2eee-b8f1-4166-8dda-caf237e09d66/',
        urlImageReference: this.udemyUrlImage,
        descriptionCertificate:
          'Universidad JavaScript - De Cero a Experto JavaScript!',
      },
      {
        urlCertificate:
          'https://www.udemy.com/certificate/UC-c0838d5a-f72c-4006-a291-2a6331e8bf72/',
        urlImageReference: this.udemyUrlImage,
        descriptionCertificate:
          'Universidad Angular - De Cero a Experto en Angular!',
      },
      {
        urlCertificate:
          'https://www.udemy.com/certificate/UC-0aad2eee-b8f1-4166-8dda-caf237e09d66/',
        urlImageReference: this.udemyUrlImage,
        descriptionCertificate:
          'Web Scraping con Python - Extracción y Automatización Web',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252Fciberseguridad-1%2ejpeg%3Falt%3Dmedia%26token%3D6427694a-5e29-4f66-abed-8a217842a379',
        urlImageReference: this.udemyUrlImage,
        descriptionCertificate: 'Hacking Ético - Paginas web y Bases de Datos',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252Fhacking%2520redes%2ejpeg%3Falt%3Dmedia%26token%3D2730f84e-7d31-4270-8004-f8cf8e25f36c',
        urlImageReference: this.udemyUrlImage,
        descriptionCertificate: 'Hacking Ético para Redes y Comunicaciones',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252FIntr%2520Ciberseguridad%2ejpeg%3Falt%3Dmedia%26token%3Da911db20-53c3-492a-af03-dcd57691861c',
        urlImageReference: this.ciscoUrlImage,
        descriptionCertificate: 'Introducción a la Seguridad Cibernética',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252FBig%2520data%2ejpeg%3Falt%3Dmedia%26token%3D315b50b8-90b2-4e8c-9adc-a89a2bbbb7ea',
        urlImageReference: this.ciscoUrlImage,
        descriptionCertificate: 'IoT Fundamentals: Big Data y Analytics',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252FAtica%2520Expo%2520Cert%2ePNG%3Falt%3Dmedia%26token%3Dcad5afab-4f5d-4ada-8439-7899d1c230e8',
        urlImageReference: this.uahUrlImage,
        descriptionCertificate:
          'Frontend accesible: Una propuesta de componentes de Angular basados en la W3C',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252FAtica%2520Expo%2520Cert%2ePNG%3Falt%3Dmedia%26token%3Dcad5afab-4f5d-4ada-8439-7899d1c230e8',
        urlImageReference: this.uahUrlImage,
        descriptionCertificate:
          'Propuesta de herramienta para la adaptabilidad de objetos de aprendizaje',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252FFrontEdutech%2ejpeg%3Falt%3Dmedia%26token%3Db0a10d24-3377-4913-b494-bf5b3b16bba2',
        urlImageReference: this.uahUrlImage,
        descriptionCertificate:
          'Asistencia tecnológica a la accesibilidad en la Educación Superior',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252FFrontEdutech%2ejpeg%3Falt%3Dmedia%26token%3Db0a10d24-3377-4913-b494-bf5b3b16bba2',
        urlImageReference: this.uahUrlImage,
        descriptionCertificate: 'Desarrollador de Software',
      },
      {
        urlCertificate:
          'https://www.linkedin.com/redir/general-malware-page?url=https%3A%2F%2Ffirebasestorage%2egoogleapis%2ecom%2Fv0%2Fb%2Fcoorpmarquez%2eappspot%2ecom%2Fo%2FCertificados%252FFrontEdutech%2ejpeg%3Falt%3Dmedia%26token%3Db0a10d24-3377-4913-b494-bf5b3b16bba2',
        urlImageReference: this.upsUrlImage,
        descriptionCertificate: 'Creando soluciones con inteligencia artificial usando la API de DeepSeek.',
      },
    ];
  }
}
