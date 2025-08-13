import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  template: `<div class="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
    <h2 class="flex items-center text-3xl font-extrabold mb-6 text-blue-800">
      <img
        src="https://icons.veryicon.com/png/o/miscellaneous/ecological-desktop-icon-library/test1.png"
        alt="Testing Icon"
        class="h-10 w-10 mr-3 drop-shadow"
      />
      Experiencia en Testing
    </h2>
    <p class="mb-6 text-gray-700 text-lg">
      Tengo experiencia en testing de aplicaciones, incluyendo la realización de
      pruebas unitarias y de integración.
    </p>
    <ul class="space-y-4">
      <li
        class="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 shadow transition hover:scale-[1.02] hover:shadow-md"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          alt="Unit Test Icon"
          class="h-7 w-7 mr-3"
        />
        <span class="text-gray-800 text-base">
          <strong class="font-semibold text-red-700">Pruebas unitarias</strong>
          para asegurar la calidad del código.
        </span>
      </li>
      <li
        class="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 shadow transition hover:scale-[1.02] hover:shadow-md"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
          alt="Selenium Icon"
          class="h-7 w-7 mr-3"
        />
        <span class="text-gray-800 text-base">
          Automatización de pruebas con
          <strong class="font-semibold text-green-700">Selenium</strong> para
          aplicaciones web.
        </span>
      </li>
      <li
        class="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 shadow transition hover:scale-[1.02] hover:shadow-md"
      >
        <img
          src="https://playwright.dev/img/playwright-logo.svg"
          alt="Playwright Icon"
          class="h-7 w-7 mr-3"
        />
        <span class="text-gray-800 text-base">
          Uso de
          <strong class="font-semibold text-purple-700">Playwright</strong> para
          pruebas end-to-end modernas y eficientes.
        </span>
      </li>
    </ul>
    <p class="mt-6 text-gray-700 text-lg">
      Estas herramientas me permiten garantizar la funcionalidad y estabilidad
      de los proyectos en los que participo.
    </p>
  </div> `,
  standalone: true,
  imports: [CommonModule],
})
export class TestingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
