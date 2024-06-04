# SISTEMA DE GESTIÓN DE TURNOS

### **1. Requisitos del Proyecto**

**1.  Identificar las Necesidades**: ¿Qué servicios del banco requieren
    turnos? Por ejemplo, atención al cliente, cajas, asesoría
    financiera, etc.

**R/:** Solo incluirá atención al cliente.


2.  **Usuarios**: ¿Quiénes serán los usuarios del sistema? Personal del
    banco, clientes, administradores.

**R/:** Los usuarios les sistema serán, exclusivamente, los **clientes
del banco registrados** en la página web. También de manera informativo los **usuarios no registrados.**

3.  **Funcionalidades**:

    -   **Reserva de Turnos**: Permitir a los clientes registrados
        reservar turnos.

    -   **Gestión de Turnos**: Cancelar turnos por parte del personal.

    -   **Notificaciones**: Enviar recordatorios y confirmaciones a
        los clientes.

### **2. Diseño del Sistema.**

4.  **Interfaz de Usuario (UI)**: Diseñar una interfaz amigable y fácil
    de usar para los clientes y el personal del banco.

**TODO:**

-   Hacer mockup.

-   Hacer interfaz básica mientras se realiza con React.

5.  **Base de Datos**: Diseñar una base de datos para almacenar la
    información de los turnos, clientes y empleados.

<https://onedrive.live.com/personal/ea451b2ee98a66c2/_layouts/15/Doc.aspx?resid=EA451B2EE98A66C2!s924d8e4ee42f4d7fa05d586341d818cd&cid=ea451b2ee98a66c2&migratedtospo=true&app=Excel>

6.  **Backend**: Desarrollar el servidor que manejará las solicitudes de
    turnos y gestionará la lógica del negocio.
    
    **R/:** Pendiente

7.  **Frontend**: Desarrollar la interfaz que interactuará con los
    usuarios finales.

### **3. Desarrollo Tecnológico**

8.  **Lenguajes y Frameworks**:

    -   **Frontend**: HTML, CSS, JavaScript, React, Angular o Vue.js.

    -   **Backend**: Node.js, Django, Flask, Spring Boot.

    -   **Base de Datos**: MySQL, PostgreSQL, MongoDB.

9.  **Integración**: APIs para la comunicación entre el frontend y el
    backend.

10. **Seguridad**: Asegurarse de que la información de los clientes esté
    protegida.

### **4. Pruebas y Despliegue**

11. **Pruebas Unitarias**: Probar cada componente individualmente.

12. **Pruebas de Integración**: Asegurarse de que todos los componentes
    funcionen juntos correctamente.

13. **Pruebas de Usuario**: Obtener feedback de usuarios reales y hacer
    ajustes necesarios.

14. **Despliegue**: Implementar el sistema en un entorno de producción.

### **5. Mantenimiento y Mejoras**

15. **Monitorización**: Vigilar el rendimiento y uso del sistema.

16. **Actualizaciones**: Implementar mejoras y nuevas funcionalidades
    basadas en el feedback de los usuarios.

17. **Soporte Técnico**: Proveer asistencia a los usuarios en caso de
    problemas.

### **Consideraciones Adicionales**

-   **Escalabilidad**: Asegurarse de que el sistema pueda manejar un
    incremento en el número de usuarios y turnos.

-   **Accesibilidad**: Garantizar que el sistema sea accesible para
    personas con discapacidades.

-   **Multicanal**: Considerar una versión móvil o integración con una
    app existente del banco.

**Homework 1:**

**Historias de usuario:**

1.  **Registro de Cuenta**

    a.  **Como**: Usuario invitado

    b.  **Quiero**: Poder registrarme y crear una cuenta nueva

    c.  **Para**: Acceder a la plataforma y reservar turnos

    d.  **Criterios de aceptación**:

        i.  Poder rellenar un formulario de registro con los campos:
            nombre, apellido, email, teléfono, y contraseña.

        ii. Recibir un email de confirmación de registro.\*

2.  **Iniciar Sesión**

    a.  **Como**: Usuario registrado

    b.  **Quiero**: Poder iniciar sesión con mis credenciales

    c.  **Para**: Acceder a mi cuenta y gestionar mis turnos

    d.  **Criterios de aceptación**:

        i.  Introducir mi nombre de usuario y contraseña.

        ii. Ver un mensaje de error si las credenciales son incorrectas.

        iii. Ser redirigido a mi página de inicio al iniciar sesión
             exitosamente.\*

3.  **Reservar un Turno**

    a.  **Como**: Usuario registrado

    b.  **Quiero**: Poder reservar un turno

    c.  **Para**: Ser atendido por el personal del banco

    d.  **Criterios de aceptación**:

        i.  Seleccionar el servicio que necesito.

        ii. Elegir una sucursal.

        iii. Seleccionar una fecha y hora disponibles.

        iv. Confirmar la reserva del turno y recibir una confirmación.

4.  **Cerrar Sesión**

    a.  **Como**: Usuario registrado

    b.  **Quiero**: Poder cerrar sesión cuando no seguiré usando la
        plataforma

    c.  **Para**: Asegurar que mi cuenta esté protegida

    d.  **Criterios de aceptación**:

        i.  Hacer clic en el botón de cerrar sesión.

        ii. Ser redirigido a la página de inicio de sesión.

### 

### **Historias Adicionales**

5.  **Ver Turnos Reservados**

    a.  **Como**: Usuario registrado

    b.  **Quiero**: Poder ver la lista de mis turnos reservados

    c.  **Para**: Tener un registro de mis próximas citas

    d.  **Criterios de aceptación**:

        i.  Acceder a una sección de \"Mis Turnos\".

        ii. Ver detalles de cada turno (fecha, hora, servicio, estado).

6.  **Cancelar un Turno**

    a.  **Como**: Usuario registrado

    b.  **Quiero**: Poder cancelar un turno reservado

    c.  **Para**: Liberar el horario si no puedo asistir

    d.  **Criterios de aceptación**:

        i.  Seleccionar un turno reservado.

        ii. Confirmar la cancelación del turno.

        iii. Recibir una notificación de que el turno ha sido cancelado.

7.  **Recibir Notificaciones**

    a.  **Como**: Usuario registrado

    b.  **Quiero**: Recibir notificaciones de mis turnos

    c.  **Para**: Ser recordado sobre mis citas próximas

    d.  **Criterios de aceptación**:

        i.  Recibir una notificación de confirmación al reservar un
            turno.

        ii. Recibir recordatorios antes de la fecha del turno.

        iii. Recibir notificaciones de cambios o cancelaciones.
