import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  
  async init(): Promise<void> {
    function init() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      let contend_div = document.getElementById("containerThree");

      contend_div?.appendChild(renderer.domElement);
     
      // Crear la luna
      const moonGeometry = new THREE.SphereGeometry(1, 32, 32);
      const moonTexture = new THREE.TextureLoader().load('./assets/img/luna.jpg'); // Ruta de la imagen de textura de la luna
      const moonMaterial = new THREE.MeshPhongMaterial({ map: moonTexture });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      scene.add(moon);

      // Agregar una luz para iluminar la luna
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(2, 1, 1);
      scene.add(light);


      // Rotar y animar la luna
      function animate() {
        requestAnimationFrame(animate);
        moon.rotation.y += 0.005;
        renderer.render(scene, camera);

      
      }

      animate();
    }

    init();
   }

}
