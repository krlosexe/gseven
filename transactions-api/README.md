# NestJS Backend Project

This project is a backend developed in NestJS and prepared to run in a Docker environment.

## Prerequisites

Make sure you have the following tools installed on your system:

- [Docker](https://www.docker.com/) (versión 20.10 o superior recomendada)
- [Docker Compose](https://docs.docker.com/compose/) (versión 2.0 o superior)

## Steps to execute the project

1. **Go to the project**

   ```bash
   cd transactions-api
   ```

2. **Build and run containers**

   Use Docker Compose to build the images and launch the containers:

   ```bash
   docker-compose up --build
   ```

3. **Access the backend**

   The backend will be available on port `80` of your local machine. You can access it from:

   ```
   http://localhost/
   ```

4. **Go to document api (Swagger)**

   The backend will be available on port `80` of your local machine. You can access it from:

   ```
   http://localhost/api
   ```

## Relevant file structure

- `Dockerfile`: Configuration file to build the container image.
- `docker-compose.yml`: File that defines and configures the services and their ports.

## Useful commands

- **Stop containers**

  ```bash
  docker-compose down
  ```

- **View container logs**

  ```bash
  docker-compose logs -f
  ```

- **Rebuild the containers**
  If you make changes to the code and need to rebuild the images, use:
  ```bash
  docker-compose up --build
  ```

## Additional notes

- Make sure port `80` is not being used by another service on your machine.
- If you need to expose the service on another port, you can change the configuration in the file `docker-compose.yml` under section`ports`.
