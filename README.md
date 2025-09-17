# Tienda de Productos Electrónicos

Aplicación web desarrollada con Angular para la gestión y visualización de productos electrónicos. Permite a los usuarios navegar por diferentes categorías, consultar información de productos y contactar con el administrador.

## Características principales

- Visualización de productos electrónicos (móviles, ordenadores, etc.)
- Navegación entre diferentes secciones mediante rutas
- Formulario de contacto para usuarios
- Panel de administración
- Estilos personalizados con SCSS
- Consumo de servicios HTTP para consultas

## Estructura del proyecto

```
TiendaProductosElectronicos/
├── angular.json
├── package.json
├── server.ts
├── src/
│   ├── app/
│   │   ├── admin/
│   │   ├── contacto/
│   │   ├── inicio/
│   │   ├── moviles/
│   │   ├── ordenadores/
│   │   ├── models/
│   │   ├── services/
│   │   ├── app.component.*
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.routings.ts
│   ├── assets/
│   ├── css/
│   ├── styles.scss
│   ├── index.html
│   ├── main.ts
│   ├── main.server.ts
├── README.md
```

## Instalación y ejecución

1. Instala [Node.js](https://nodejs.org/) y npm.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor de desarrollo:
   ```bash
   npm start
   ```
4. Abre tu navegador en [http://localhost:4200](http://localhost:4200)

## Despliegue en producción con XAMPP (Apache)

1. Compila la aplicación:
   ```bash
   ng build --prod
   ```
2. Copia el contenido de la carpeta `dist/` al directorio público de tu servidor web (por ejemplo, `C:/xampp/htdocs/TiendaProductosElectronicos`).
3. Inicia Apache desde el panel de control de XAMPP.
4. Accede a [http://localhost/TiendaProductosElectronicos](http://localhost/TiendaProductosElectronicos)

## Autor

José María García Conde

## Licencia

Este proyecto está bajo la licencia MIT.
