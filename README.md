<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar repositorio
2. Ejecutar 
```bash
yarn install
```
3. Tener Nest CLI instalado
```bash
npm i -g @nestjs/cli
```

4. Levantar la base de datos con docker
```bash
docker-compose up -d
```

5. Clonar archivo __.env.example__ y renombrarlo a __.env__

6. Llenar las variables de entorno en el archivo __.env__

7. Ejecutar el proyecto
```bash
yarn start:dev
```

8. Reconstruir base de datos con la semilla
```bash
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* NestJS
* Node -v v18.13.0

#Notas
Heroku deploy sin cambios:
```bash
git commit --allow-empty -m "Trigger Heroku deploy"
git push heroku main
```