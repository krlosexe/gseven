# Prueba Técnica

Este proyecto contiene dos partes principales:

- **Frontend (FE):** Implementado en la carpeta `fe`.
- **Backend (Transactions API):** Implementado en la carpeta `transactions-api`.

A continuación, se proporcionan enlaces directos a cada uno de los directorios con sus respectivas instrucciones para levantarlos.

## Instrucciones

### Frontend (Ionic + Angular): 
El código fuente del frontend se encuentra en la carpeta [`fe`](./fe). Sigue las instrucciones dentro del archivo `README.md` de esa carpeta para configurarlo y ejecutarlo.

### Backend (NestJS + TypeORM):
El código fuente del backend se encuentra en la carpeta [`transactions-api`](./transactions-api). Sigue las instrucciones dentro del archivo `README.md` de esa carpeta para configurarlo y ejecutarlo.

---

**Nota:** Asegúrate de tener instaladas todas las dependencias y configuraciones necesarias para cada parte del proyecto antes de intentar levantar los servicios.



## Preguntas Teóricas
### Preguntas Frontend (Ionic + Angular)

- **¿Cómo gestionarías la comunicación entre componentes en Angular para una aplicación como G7BsPay?:** 

  -**Opcion 1:**  Uso de servicios compartidos estos servicios pueden emplear Subject o BehaviorSubject de RxJS

  -**Opcion 2:** @Input() para pasar datos desde padre al hijo, @Output con EventEmitter para enviar eventos desde el hijo al padre

  -**Opcion 3** (mi favorita): con un administrador de estado como NgRx (actions, store, reducers, selectors)


- **¿Qué estrategia usarías para optimizar el rendimiento de una app híbrida desarrollada con Ionic?:** 

  Usar prácticas sólidas de desarrollo con las herramientas que el framework proporciona, Una de las estrategias más importantes sería implementar el lazy loading de componentes y páginas
  

- **Explica cómo funcionan los "Lifecycle Hooks" en Angular y cómo los aplicarías en un componente.:** 

  -**ngOnInit:**  inicializar el componente, ideal para hacer peticiones de datos

  -**ngOnChanges:**  Si necesitas ejecutar código cuando el componente cambie, se dispara cada vez que hay un cambio en las propiedades de entrada

  -**ngOnDestroy:**  Para destruir el componente, limpiar recursos, suscripciones...



### Preguntas Backend (NestJS + TypeORM)
- **Describe cómo configurarías un nuevo endpoint en NestJS y validarías losdatos de entrada usando class-validator:** 

Primero crearía un controlador con el decorador @Controller y un metodo que maneje la solicitud HTTP correspondiente, como @Get o @Post.

Dentro del método, definiría la lógica para procesar la peticion.

Para validar los datos de entrada con class-validator junto con DTOs (Dats Transfer Objects)

Genero una clase DTO con las propiedades que espero recibir y defino cada propiedad con los decoradores de class-validator, como @IsString(), @IsInt(), @IsOptional, @IsDateString



- **¿Cómo manejarías las relaciones entre tablas en TypeORM, por ejemplo, entre usuarios y transacciones?** 

Yo usaría los decoradores de relación que ofrece TypeORM, en la entidad de Usuario, coloco un decorador @OneToMany para indicar que un usuario puede tener muchas transacciones. Luego, en la entidad de Transacción, defino @ManyToOne para indicar que cada transacción pertenece a un usuario. 

Con eso me permite establecer la relación entre ambas tablas, y TypeORM se encarga de gestionar las claves foraneas y las consultas necesarias.


- **Explica las medidas que implementarías para proteger un endpoint RESTful contra ataques comunes como SQL Injection y XSS.** 

Lo primero para evitar SQL Injection seria usar consultas parametrizadas o un ORM como TypeORM, asi automaticamente se maneja estas protecciones, con respecto a XSS seria implementar una correcta sanitización de las entradas del usuario, validando y escapando cualquier contenido que pueda interpretarse como código


Además, defino cabeceras de seguridad como Content Security Policy (CSP) para mitigar estos ataques.




### Preguntas de Seguridad
- **¿Cómo implementarías autenticación basada en JWT para un sistema como G7BsPay?.** 

Lo pimero seria instalar e implementar la libreria de JWT, y asignar esos tokens  con una clave secreta a la autenticacion de cada usuario, luego se definiria un Guard o middleware para protejer las rutas apis y solo se acceda con el token al api

- **¿Qué estrategia usarías para gestionar la rotación de claves JWT en producción?.** 

Lo ideal es usar un sistema de claves públicas y privadas.

La clave privada se usa para firmar los tokens y la clave pública para validarlos. De esta forma, puedes cambiar la clave privada sin afectar la validación de los tokens existentes, ya que los tokens antiguos seguirán siendo válidos hasta que expiren. Implementar un mecanismo de versión de claves permite mantener una clave nueva sin invalidar los tokens anteriores, y puedes actualizar la clave de forma gradual, asegurándote de que todas las aplicaciones o servicios que consumen la API estén al tanto de la nueva clave.


- **¿Cómo manejarías el cifrado de contraseñas almacenadas en la base de datos?.** 

Implementaria una funcion de hashing robusta como bcrypt, 


### Preguntas de DevOps

- **¿Qué configuraciones básicas harías para desplegar un backend NestJS en AWS usando Docker?.** 

Primero configuraría un contenedor Docker con un Dockerfile donde defino las imagenes a utilizar en la aplicacion ejemplo node18

luego creo un docker-compose.yml para gestionar los servicios, incluyendo la base de datos y puertos, subiria el la imagen y el codigo del proyecto a una instancia EC2 y compilaria las imagenes, el proyecto tendria configurado el ci/cd para hacer deploy continuo

- **¿Cómo estructurarías un pipeline CI/CD básico para automatizar pruebas y despliegues en un entorno de desarrollo?.** 


Para estructurar un pipeline CI/CD básico, primero configuraría un repositorio en GitHub, GitLab o cualquier otro servicio que soporte integraciones. Luego, integraría una herramienta de CI/CD como Jenkins, GitHub Actions o GitLab CI para que, cada vez que se realice un commit o push al repositorio, se ejecute automáticamente una serie de pasos. Esto incluiría la instalación de dependencias, la ejecución de pruebas unitarias y de integración, y la construcción de la aplicación. Después, si las pruebas son exitosas, el pipeline desplegaría el código a un entorno de desarrollo o staging, ya sea en un servidor o mediante contenedores Docker


### Corrección del error existente:

- **Codigo Corregido:.** 

Se agrega el campo user en el where para poder filtrar por el id de usuario

```typescript
const transactions = await this.transactionRepository.find({
  where: { 
    status: 'COMPLETED',
    user: userId, 
  },
});

P
