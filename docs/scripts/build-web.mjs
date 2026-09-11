import {readFile,writeFile} from 'node:fs/promises';
import {pages} from '../src/manual-content.mjs';
const manifest=JSON.parse(await readFile(new URL('../assets/screenshots/manifest.json',import.meta.url),'utf8'));
const articles=pages.filter(p=>!p.cover&&!p.toc&&p.id!=='pendientes');
const data=JSON.stringify({articles,manifest}).replaceAll('<','\\u003c');
/* Enlace de regreso al panel de Todo al Día. Ajustar si el sistema cambia de dirección. */
const plataforma='https://todoaldia.cl/app';
const sv=d=>`<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ico={
 menu:sv('<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>'),
 home:sv('<path d="M4 11 12 4l8 7"/><path d="M6 10.5V19h12v-8.5"/>'),
 search:sv('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-3.7-3.7"/>'),
 check:sv('<path d="m5 12.5 4.5 4.5L19 7"/>'),
 moon:sv('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>'),
 sun:sv('<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>'),
 exit:sv('<path d="M14 5h4.5v14H14"/><path d="M10.5 15.5 14 12l-3.5-3.5"/><path d="M14 12H4.5"/>'),
};
await writeFile(new URL('../src/index.html',import.meta.url),`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light dark"><title>Primeros pasos · Ayuda Todo al Día</title><link rel="stylesheet" href="../styles/tokens.css"><link rel="stylesheet" href="../styles/typography.css"><link rel="stylesheet" href="../styles/help.css"><script>try{document.documentElement.dataset.theme=localStorage.getItem('todoaldia-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch{}</script></head>
<body><a class="skip" href="#content">Saltar al contenido</a>
<header class="topbar"><a class="tenant" href="#ayuda"><span class="tenant-avatar"><img src="../assets/screenshots/marca-todoaldia.png" alt="" width="34" height="34"></span><span class="tenant-name">Centro de ayuda</span><span class="tenant-status">${ico.check}Todo al Día</span></a><nav class="top-actions" aria-label="Acciones de la ayuda"><button class="pill" id="index-toggle" aria-controls="sidebar" aria-expanded="true">${ico.menu}<span class="btn-label" id="index-label">Ocultar los temas</span></button><a class="pill" href="#ayuda">${ico.home}<span class="btn-label">Inicio</span></a><button class="pill" id="search-jump">${ico.search}<span class="btn-label">Buscar</span></button><button class="pill" id="theme-toggle" aria-pressed="false"><span class="ico-moon">${ico.moon}</span><span class="ico-sun">${ico.sun}</span><span class="btn-label" id="theme-label">Modo oscuro</span></button><a class="pill pill-exit" href="${plataforma}">${ico.exit}<span class="btn-label">Volver al sistema</span></a></nav></header>
<div class="workspace"><aside id="sidebar" aria-label="Temas de la ayuda"><div class="sidebar-heading"><strong>Todos los temas</strong><span>ELIGE DÓNDE NECESITAS AYUDA</span></div><nav id="index-nav" aria-label="Temas por módulo"></nav><div class="sidebar-note">Cada tema explica una pantalla del sistema. Puedes leerlos en orden o ir directo al que necesitas.</div></aside><button id="scrim" tabindex="-1" aria-label="Cerrar los temas" hidden></button>
<main id="content" tabindex="-1"><section class="hero" id="hero"><p class="eyebrow">CENTRO DE AYUDA · PRIMEROS PASOS</p><h1>¿Con qué necesitas<br><span>ayuda</span> hoy?</h1><p>Aquí explicamos, paso a paso, para qué sirve cada módulo del sistema y cómo hacer las tareas del día. Elige el módulo que tienes abierto o empieza por el principio.</p></section><div class="search-box"><label for="search">¿Qué necesitas hacer?</label><div class="search-input">${ico.search}<input id="search" type="search" placeholder="Escribe aquí: abrir caja, mesas, productos…" autocomplete="off"><button id="clear-search" hidden>Limpiar</button></div><p class="search-help">Escribe una palabra y te mostramos los temas que hablan de eso.</p></div><section id="search-results" aria-label="Resultados de búsqueda" hidden><p id="search-status" role="status"></p><div id="result-list"></div></section><div id="view"></div><footer class="web-footer">Todo al Día · Primeros pasos <span>Una ayuda para cada momento de tu negocio.</span></footer></main></div>
<dialog id="image-dialog"><button id="close-image">Cerrar imagen ×</button><img alt=""><p></p></dialog>
<script id="help-data" type="application/json">${data}</script><script src="../scripts/help.js" defer></script></body></html>`);
console.log(`Ayuda web: ${articles.length} artículos en index.html.`);
