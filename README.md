# Reto_API_Typescript-NodeJS-Sqlite

# Requisitos previos;

Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [Typescript](https://www.typescriptlang.org/)
- [SQlite](https://www.sqlite.org/index.html)


# Instalación 

Recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:
```
npm install -g ts-node
```
# Base de datos

Base de datos realizada con SQlite, nombre de la base de datos:
```
database
```

# Endpoints
### GET

Devuelve el listado de todos los users registrados, su nombre y su edad:
```
/users
```

Devuelve el user registrado indicando su id:
```
/user
```

### POST

Crea un nuevo user:
```
/user
```

### PUT

Modifica un user, hay que pasar en el body los parámetros "name", "edad":
```
/user
```

### DELETE

Elimina un user, hay que pasar en el body el parámetro "id":
```
/user
```




