# Walmart-App
Aplicación web desarrollada en ReactJs que permite visualizar productos según nombre o id obtenidos desde una Api **NETCore2.1** con base de datos **MongoDB**

Para correr esta aplicación en Docker, debes realizar lo siguiente:

1. Descarga proyecto en un directorio de preferencia. Ejemplo:
`D:\Walmart>`
2. Abrir CMD y acceder a la carpeta del proyecto. En la carpeta, se debe visualizar el archivo Dockerfile.

3. Ejecutar el siguiente código para crear una imagen del proyecto.
`docker build -t walmart-siep-frontend:v1 .`
Con ese script, estamos construyendo la imagen del proyecto, le asignamos un nombre y una version. No olvides el punto `.` al final del script, para que el script utilice el archivo Dockerfile del directorio.
4. Una vez instaladas las dependencias del proyecto y creada la imagen, puedes consultar la imagen que esté creada en Docker.
`docker images`

5. Ahora, debes ejecutar cualquiera el siguiente script.

`docker run -it -d -p 3000:3000 --name walmart-frontend walmart-siep-frontend:v1`
- Crea un nuevo contenedor, en modo iniciado `-d` luego se publica `-p` se mapea el puerto 3000, se le asigna un nombre al contenedor `--name` y finalmente, se le indica el nombre de la imagen.

6. Ahora ejecutas `docker ps` verás el contenedor corriendo en `localhost:3000`

7. Ahora solo debes ir a tu navegador favorito e ingresar la siguiente url `localhost:3000` y verás esto.
![](https://github.com/sechalarp/imagenes-varias/blob/master/AppFrontend.png)