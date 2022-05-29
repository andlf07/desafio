# Desafio

Este proyecto fue realizado con HapiJS. Postgresql, Prisma ORM
Para utilizar este proyecto, descargar y correr

    npm install

Luego las migraciones de Prisma

    npx prisma migrate

Agregar variables de entorno

    DB_USER=
    DB_PASSWORD=
    DB_HOST=
    DB_PORT=
    DATABASE=

Para iniciar el servidor. El servidor por defecto corre en el puerto 3000 y 127.0.0.1.

    npm run start:dev

Obtener lista de usuarios, si aun no realizar el registro de Profile sera null

    GET /users
    {
        "statusCode": 200,
        "data": [
    	    {
    		    "id":  3,
    		    "email":  "panfilo@gmail.com",
    		    "name":  "panfilo",
    		    "profile":  {
    			    "id":  1,
    			    "address":  "Colombia",
    				"picture":  "url",
    			    "userId":  3
    		    },
    		    "purchases":  []
    		    }
    	]
    }

Para crear usuarios

    POST /users
    {
        "email":  string,
        "name":  string
    }

Obtener perfil

    GET /profiles/{id}
    {
        "statusCode": 200,
        "data": {
            "id": 1,
            "address": "Colombia",
            "picture": "picture url",
            "userId": 3,
            "user": {
                "id": 3,
                "email": "panfilo@gmail.com",
                "name": "Panfilo"
            }
        }
    }

Crear Perfil, el API relacionara el Profile a crear con el Usuario mediante el email

    POST /profiles
    {
        "address": "Tucapel",
        "picture": "picture url",
        "email": "panfilo@gmail.com"
    }

Actualizar Profile, campos address y picture

    PUT /profiles
    		{
            "address": "pintana",
            "picture": "picture url"
            }

Obtener los productos listados

    GET /products
    {
        "statusCode": 200,
        "data": [
            {
                "id": 2,
                "count": 20,
                "books": {
                    "id": 2,
                    "ISBN": 13323,
                    "title": "title",
                    "price": price,
                    "author": "author",
                    "publisher": "publisher",
                    "productId": 2
                },
                "sales": []
            },
        ]
    }

Agregar productos, mediante count = cantidad, este estara relacionado a Book

    POST /products
    {
        "count": 20
    }

Agregar Book a la base de datos, este estara relacionada a Products mediante el id productId

    POST /products/books
    {
              "ISBN": 13323,
              "title": "title",
              "price": 3244,
              "author": "author",
              "publisher": "publisher",
              "productId": 2
    }

Login

    POST /login
    {
        "token": "token",
        "statusCode": 200
    }

Los endpoints al presentar problemas o error devolveran un objeto de esta manera

    {
    	"statusCode": code,
    	"message": message,
    	"error": error
    }
