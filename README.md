# 🧪 Pipes App Angular 🚀

¡Bienvenido a la aplicación **Pipes App Angular**! Este proyecto es una demostración exhaustiva del poder y la versatilidad de los Pipes en Angular, tanto los integrados como los personalizados. Es una herramienta ideal para entender cómo transformar datos directamente en las plantillas de Angular y cómo crear lógica de transformación reutilizable.

La aplicación está organizada en varias categorías intuitivas que facilitan la exploración de cada tipo de Pipe y sus casos de uso.

## ✨ Características Principales

La aplicación se estructura en diferentes secciones para explorar los Pipes:

### 💡 Pipes Básicos

Esta sección demuestra el uso de los Pipes más fundamentales de Angular:

* **`Lowercase Pipe`**: Transforma el texto a minúsculas.
* **`Uppercase Pipe`**: Transforma el texto a mayúsculas.
* **`TitleCase Pipe`**: Convierte la primera letra de cada palabra a mayúscula.
* **`Date Pipe`**: Formatea fechas de diversas maneras, incluyendo:
    * Formato básico de fecha.
    * Formato largo (`Date|long|GMT-6`).
    * Formato de año y mes (`Date: "yyyy MM"`).
    * Formato corto (`Date|short|GMT-4`).
* **Cambio de Idioma Dinámico**: Botones que permiten cambiar el idioma de visualización de las fechas y otros elementos a **inglés, español y francés**, mostrando la capacidad de internacionalización.

### 🔢 Pipes Numéricos

Explora cómo formatear valores numéricos:

* **`Number Pipe`**: Formatea números con precisión decimal (`Number:'1.2-2'`, `Number:"1.1-2"`).
* **`Currency Pipe`**: Formatea números como moneda.
* **`Percent Pipe`**: Formatea números como porcentajes.

### 🧩 Pipes No Tan Comunes (Avanzados)

Esta sección profundiza en Pipes más específicos y potentes:

* **`i18nSelectPipe`**: Permite cambiar dinámicamente un saludo (o cualquier texto) basándose en una condición (ej., si el usuario es hombre o mujer).
* **`i18nPluralPipe`**: Utilizado para manejar la pluralización de palabras de forma dinámica, ideal para mensajes como "X clientes esperando". En esta aplicación, simula una **lista de espera de clientes** para comprar.
* **`JsonPipe`**: Muestra cualquier objeto o array de JavaScript en formato JSON.
* **`KeyValuePipe`**: Permite iterar sobre las propiedades de un objeto y mostrar cada par clave-valor.
* **`SlicePipe`**: Se utiliza para extraer una porción de una cadena o un array. En esta aplicación, se usa para **contar las cadenas de un array** (como parte de la simulación de la lista de clientes esperando).
* **`AsyncPipe`**: Desenvuelve automáticamente los valores de Observables o Promesas, mostrando datos asíncronos directamente en la plantilla.

### ✍️ Pipes Personalizados

Demostración de cómo crear tus propios Pipes para transformaciones específicas:

* **`ToggleCase Pipe`**: Un Pipe personalizado que alterna entre mayúsculas y minúsculas para un texto dado (ej., para mostrar un nombre en mayúsculas y minúsculas alternas).

### 🦸‍♂️ Tabla Dinámica de Superhéroes

La aplicación incluye una **tabla dinámica** que muestra una lista de superhéroes, permitiendo filtrar y ordenar por diferentes categorías:

* **Por Nombre**: Búsqueda o filtro por el nombre del superhéroe.
* **Puede Volar**: Filtro para mostrar solo los superhéroes que pueden volar.
* **Color Propuesto**: Filtro o agrupación por un color asociado al superhéroe.
* **Creador**: Filtro o agrupación por el creador del superhéroe.

## 🛠️ Tecnologías Utilizadas

### Frontend:

* [**Angular**](https://angular.io/) - Framework robusto para la construcción de la interfaz de usuario.
* [**RxJS**](https://rxjs.dev/) - Para la gestión de flujos de datos asíncronos y la manipulación de datos reactiva.

---

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha la aplicación **Pipes App Angular** en tu entorno local, sigue estos pasos:

### Requisitos Previos

* Node.js (versión 18 o superior)
* npm o Yarn

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Jose-designer-23/Pipes-App-Angular](https://github.com/Jose-designer-23/Pipes-App-Angular)
    cd Pipes-App-Angular
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    # yarn install
    ```

3.  **Iniciar la aplicación:**
    ```bash
    ng serve
    ```

4.  **Acceder a la Aplicación:**
    Abre tu navegador y ve a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

---

## 💻 Comandos de Desarrollo (Angular CLI)

Esta sección proporciona una referencia rápida a los comandos más comunes de Angular CLI.

* **Arrancar el Servidor de Desarrollo:**
    ```bash
    ng serve
    ```
* **Generar Componentes, Servicios, etc.:**
    ```bash
    ng generate component nombre-del-componente
    ng generate service services/mi-servicio
    # Para ver una lista completa de esquemas: ng generate --help
    ```
* **Construir el Proyecto para Producción:**
    ```bash
    ng build
    ```
* **Ejecutar Pruebas Unitarias:**
    ```bash
    ng test
    ```
