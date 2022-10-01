# imageCloud

Aplicación CRUD de gestión de imagenes.

## Requisitos

- Nodejs

## Instalación y Ejecución

1. Descargar repositorio de git
2. Desde una terminal:
    1. `npm install` para instalar las dependencias (desde la carpeta principal del proyecto)
    2. `npm run build` para construir carpeta public con webpack
    3. `npm start` para iniciar la aplicación (se abre desde http://localhost:3000)
    
## Proceso de desarrollo

### Tecnologias usadas

- Para el front he usado Vue con un framework de css llamado Materialize.
- Para el back he utilizado Nodejs con express.
- Para la base de datos he usado mongoDB.

### Proceso de creación

He usado un proceso en espiral con mini cascadas.

Primero creé la BBDD y la enlacé con el back-end. Después fuí creando los cruds primero en el back-end y después en el front-end en minicascadas por cada función del CRUD.
