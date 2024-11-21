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


