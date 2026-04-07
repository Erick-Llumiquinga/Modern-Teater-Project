# 🎭 Modern Teater Project (LEGACY) - Angular 7 + Lumen 5.7

Este proyecto es una aplicación web legacy con **frontend en Angular 7** y **backend en Lumen 5.7**, corriendo con **Docker** para facilitar el desarrollo y despliegue.  

---

## 📝 Descripción

La aplicación incluye:

- Backend en Lumen con autenticación y manejo seguro de contraseñas con **Hash::make**.
- Frontend en Angular 7 legacy (`@angular/http`) interactuando con el backend.
- Base de datos PostgreSQL.
- Configuración completa con Docker para desarrollo local.

---

## ⚙️ Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Node.js v10+ (solo si ejecutas Angular fuera de Docker)
- Composer (solo si ejecutas Lumen fuera de Docker)

> ⚠️ Se recomienda usar Docker para evitar problemas con dependencias legacy.

---

## 🚀 Instalación y ejecución con Docker

1. Clonar el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd <DIRECTORIO_DEL_PROYECTO>
```
2. Construir y levantar los contenedores:
```bash
 docker-compose up --build
 ```
Esto levantará:
- Backend (Lumen) en http://localhost:8000
- Frontend (Angular) en http://localhost:4200
- Base de datos PostgreSQL en localhost:5432
  
3. Acceder al frontend:
Abre tu navegador en:
```bash
http://localhost:4200
```
- Si accedes desde fuera de Docker, environment.ts debe usar localhost:8000 para el backend.
- Si accedes desde dentro del contenedor Angular, usar server_app:8000.

---

## 📦 Estructura del proyecto
```bash
/
├── Client/       # Angular 7
│   ├── src/
│   ├── package.json
│   └── angular.json
├── Server/       # Lumen 5.7
│   ├── app/
│   ├── routes/
│   ├── composer.json
│   └── bootstrap/app.php
├── docker-compose.yml
└── README.md
```

--- 

## 🔧 Configuración
Frontend

Archivo de configuración: Client/src/environments/environment.ts

- Para Docker:
  ```bash
  export const environment = {
    production: false,
    api: 'http://server_app:8000'
  };
  ```
- Para desarrollo local fuera de Docker:
  ```bash
  export const environment = {
    production: false,
    api: 'http://localhost:8000'
  };
  ```
Backend
- Middleware CORS incluido para aceptar requests desde Angular.
- Base de datos PostgreSQL configurada en docker-compose.yml.
- Variables de entorno en .env (copiar de .env.example).

---

## 🔐 Autenticación
- Contraseñas guardadas con Hash::make.
- Validación con Hash::check.
- Mensajes de error genéricos: Credenciales incorrectas.

---

## 💡 Comandos útiles
Docker
```bash
docker-compose up --build        # Levantar contenedores
docker-compose down              # Detener contenedores
docker-compose exec server_app bash # Entrar al contenedor del backend
docker-compose exec angular_app bash # Entrar al contenedor del frontend
```
Angular (fuera de Docker)
```bash
cd Client
npm install --legacy-peer-deps
ng serve
```
Lumen (fuera de Docker)
```bash
cd Server
composer install
php -S localhost:8000 -t public
```

---

## ⚠️ Notas importantes
- Proyecto usa Angular 7 legacy, no HttpClient.
- Todos los requests POST desde Angular deben usar Content-Type: application/json.
- Middleware CORS obligatorio en Lumen para evitar problemas con preflight requests.

---

## 📚 Recursos adicionales
- [Documentación Lumen 5.7](https://lumen.laravel.com/docs/5.7)
- [Documentación Angular 7](https://v7.angular.io/)
- [Docker Compose](https://docs.docker.com/compose/)


