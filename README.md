# 📝 E-commerce: Papelería La Web

Esta **Single Page Application (SPA)**, desarrollada con **React JS**, ofrece una experiencia de compra integral para artículos de papelería. El proyecto destaca por su arquitectura profesional e integración con **Firebase** como núcleo para la gestión de datos, permitiendo una gestión de inventario en tiempo real, persistencia de datos segura y un sistema dinámico de consulta de pedidos realizados.


## 🚀 Capacidades del E-commerce

* **Exploración y Visualización Detallada:** Catálogo interactivo con **buscador en tiempo real** y filtrado por categorías, complementado con una **vista de detalle individual** donde el usuario puede seleccionar la cantidad deseada de cada producto antes de añadirlo al carrito.
* **Gestión de Carrito:** Sistema de control de compras que permite visualizar los artículos seleccionados, eliminar productos y calcular automáticamente el costo total de la orden.
* **Finalización de Compra Segura:** Proceso de Checkout integrado que genera órdenes únicas en Firestore y garantiza la integridad de la transacción del cliente.
* **Control de Inventario Automatizado:** Lógica de negocio avanzada que sincroniza y descuenta el stock de los artículos tras cada compra, evitando errores de disponibilidad.
* **Módulo de Rastreo de Órdenes:** Buscador especializado donde el cliente puede recuperar el detalle completo de su pedido mediante su ID único para verificar su **persistencia** en el sistema.


## 🛠️ Tecnologías Utilizadas

* **React JS + Vite:** Librería base para la gestión de la interfaz y de los estados globales y locales de la aplicación.
* **Firebase (Firestore):** Base de datos NoSQL utilizada para la persistencia de  productos, órdenes de compra y el almacenamiento del inventario.
* **React Router Dom:** Implementación de navegación dinámica que permite el flujo entre las diferentes secciones de la tienda.
* **SweetAlert2 / React-Toastify:** Implementación de notificaciones y alertas interactivas para proporcionar feedback inmediato al usuario y optimizar la experiencia de navegación (UX).
* **CSS3:** Estilado personalizado para una interfaz moderna, limpia y responsiva.


## 📂 Arquitectura del Proyecto

El código se organizó bajo el principio de **Separación de Responsabilidades**, facilitando el mantenimiento y la escalabilidad del sistema:

1.  **Capa de Servicios (`/services`):** Lógica aislada que gestiona todas las peticiones a Firebase (consultas y mutaciones).
2.  **Contenedores (`/containers`):** Componentes lógicos que manejan el estado, las llamadas a servicios y la lógica de negocio.
3.  **Componentes de Presentación:** Enfocados exclusivamente en la interfaz visual y recepción de datos vía props.
4.  **Context API:** Manejo del estado global para la persistencia del carrito en toda la aplicación.


## 🔧 Instalación y Ejecución

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Itzrp/Papeleria-e-commerce
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3. **Configurar Firebase:** Crea un archivo `.env` en la raíz del proyecto utilizando el prefijo `VITE_` para las variables de entorno, o configura el objeto de acceso en `src/services/firebase.js`.
    > **Nota:** Si realizas cambios en el archivo `.env`, recuerda reiniciar el servidor de desarrollo (`npm run dev`) para que Vite reconozca las nuevas variables.

4.  **Iniciar el proyecto:**
    ```bash
    npm run dev
    ```

5.  **Prueba de Rastreo:** Al finalizar una compra, utilice el ID proporcionado en la sección de **"Mis Pedidos"** para validar la recuperación de datos desde Firebase.


---
*Proyecto desarrollado para el curso de React 2026.*
