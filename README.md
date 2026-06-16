# ABP M2 - Proyecto de curso

Proyecto de entrega correspondiente al módulo 2 del curso "Desarrollo de aplicaciones Full Stack JavaScript Trainee".

## Descripción

Esta es una pequeña aplicación web estática que simula funcionalidades básicas de una aplicación de transacciones: depósitos, envíos de dinero y visualización de transacciones.

El propósito del proyecto es demostrar comprensión de HTML, CSS y JavaScript para construir interfaces y manejar eventos en el navegador.

## Estructura del proyecto

- `index.html` — Página de inicio.
- `menu.html` — Menú de navegación.
- `deposito.html` — Interfaz para realizar depósitos.
- `enviardinero.html` — Interfaz para enviar dinero.
- `transaccion.html` — Página para ver/gestionar transacciones.
- `assets/css/style.css` — Estilos del sitio.
- `assets/js/` — Lógica JavaScript para cada vista:
  - `inicio.js`, `menu.js`, `deposit.js`, `enviardinero.js`, `transaccion.js`

## Cómo ejecutar

1. Abrir el archivo `index.html` en un navegador moderno (Chrome, Firefox, Edge).
2. No se requiere servidor ni instalación; es una aplicación estática.

Si prefieres levantar un servidor local (opcional), puedes usar Python desde la raíz del proyecto:

```
python -m http.server 8000
```

y luego abrir `http://localhost:8000` en el navegador.

## Funcionalidades

- Formularios básicos para simular depósitos y envíos de dinero.
- Validaciones simples en el cliente.
- Registro y visualización de transacciones (local, en memoria durante la sesión del navegador).

## Tecnologías

- HTML
- CSS
- JavaScript 

## Entrega

Este repositorio contiene los archivos necesarios para la entrega del trabajo práctico del curso. 

## Autor

- Nombre: Gabriela López
- Email: lopz.gau@gmail.com
- GitHub: https://github.com/lopzgau/abp-m2

