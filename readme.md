# Pre-requisitos

- Node.js
- npm
- PostgreSQL

## Pasos para la instalación

1. **Descargar el proyecto**: Primero, debes clonar el repositorio del proyecto en tu máquina local usando `git clone`.

2. **Instalar las dependencias**: Navega hasta el directorio del proyecto y ejecuta `npm install` para instalar todas las dependencias necesarias para el proyecto.

3. **Crear la base de datos PostgreSQL**: Debes crear una base de datos PostgreSQL en tu máquina local o en un servidor remoto.

4. **Configurar las variables de entorno**: Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:

    ```
    USER_DB = 'tu_usuario_de_base_de_datos'
    PASSWORD_DB = 'tu_contraseña_de_base_de_datos'
    HOST_DB = 'tu_host_de_base_de_datos'
    PORT_DB = 'tu_puerto_de_base_de_datos'
    DATABASE_DB = 'tu_nombre_de_base_de_datos'
    SERVER_PORT = 'tu_puerto_de_servidor'
    ```

    Asegúrate de reemplazar los valores de ejemplo con tus propios valores.

5. **Crear la tabla e insertar datos**: Ejecuta `npm run seed` para crear la tabla en la base de datos e insertar algunos datos de prueba.

6. **Ejecutar el proyecto**: Finalmente, puedes ejecutar el proyecto con `npm run dev`. Tu aplicación Express ahora debería estar ejecutándose y conectándose a tu base de datos PostgreSQL.

¡Disfruta codificando! 😊

---

Espero que esto sea útil. Si tienes alguna pregunta o necesitas más ayuda, no dudes en preguntar. ¡Buena suerte con tu proyecto! 😊