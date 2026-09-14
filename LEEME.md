# Aprende y Avanza — página de cursos

## Abrir la página

Haz doble clic en **index.html**. Funciona directamente en Edge, Chrome, Firefox o Safari actuales, sin instalar programas ni ejecutar comandos. Conserva todos los archivos de esta carpeta juntos.

La vista previa local durante el desarrollo puede estar en http://127.0.0.1:4173. Para abrirla después, usa index.html; esa dirección solo funciona mientras el servidor de la sesión sigue activo.

## Qué incluye

- Diseño adaptable para computadora, tableta y celular.
- Cinco cursos reales, con búsqueda y filtros por categoría.
- Detalles de 20 módulos y 88 sesiones, requisitos y proyectos finales.
- Descarga de los cinco temarios PDF originales.
- Comparación de dos o tres cursos, conservada al filtrar el catálogo.
- Guía de dos pasos para elegir curso según objetivo y disponibilidad.
- Tabla de fechas y horarios, beneficios y preguntas frecuentes.
- Enlaces a Facebook y WhatsApp con mensajes preparados por curso.
- Formulario que abre WhatsApp: la persona revisa y envía su mensaje allí.
- Navegación por teclado, foco visible, diálogos con Escape y movimiento reducido.
- Información de privacidad y metadatos para buscadores.

## Archivos

| Archivo | Contenido |
| --- | --- |
| index.html | Estructura, secciones, textos generales y metadatos. |
| styles.css | Colores, tipografías, composición y adaptación a pantallas. |
| courses.js | Información real de los cursos, temarios y datos de contacto. |
| app.js | Búsqueda, filtros, comparador, guía y formulario. |
| themes.js | Selector de apariencia, modo automático y preferencia guardada. |
| themes.css | Paletas Claro, Noche, Bosque y Arena. |
| assets/ | Icono de la web y convocatoria original. |
| temarios/ | Los cinco PDF descargables. |

## Datos utilizados

Marca: **Aprende y Avanza**. WhatsApp: **55 2573 4814**. Facebook: **facebook.com/aprendeconmigo68**.

Precio: **$300 MXN, pago único por cada curso**. Duración: cuatro semanas. Excel + Power BI comienza el 26 de septiembre de 2026, sábados y domingos de 09:00 a 12:00. Los otros cuatro cursos empiezan el 28 de septiembre, de lunes a viernes: R 16:00–17:00, Git y GitHub 17:00–18:00, LaTeX 18:00–19:00 y SQL 19:00–20:00.

Los programas y contactos se tomaron de los cinco PDF y la convocatoria proporcionados. No se agregaron testimonios, fotografías de un instructor, cifras de alumnos, acreditaciones oficiales ni información de cupo que no estuviera confirmada.

La zona horaria no figura en los archivos originales: la web pide confirmarla por WhatsApp. Tampoco se promete acceso ilimitado a las grabaciones ni una política de devolución no proporcionada.

## Actualizar contenido

Edita courses.js para cambiar temarios, descripciones, requisitos, proyectos y enlaces PDF. La variable principal es window.COURSE_DATA. Los textos, fechas y precios destacados en index.html y app.js deben actualizarse también si cambia la convocatoria. Busca “2026”, “300” o el número de WhatsApp para localizar las menciones.

La página usa las tipografías Manrope y DM Sans de Google Fonts. Sin internet se muestran tipografías del sistema. Los PDF, estilos, iconos y funciones del catálogo son locales; WhatsApp y Facebook requieren conexión.

## Publicar

La página está terminada como sitio estático local. Para que otras personas puedan visitarla por internet, hay que alojar el contenido de esta carpeta en un servicio de alojamiento web y asignarle una dirección. Sube index.html, styles.css, themes.css, themes.js, courses.js, app.js y las carpetas assets y temarios manteniendo sus nombres y estructura. No necesitas servidor de aplicaciones ni base de datos.

Después de publicar, verifica las descargas PDF y los enlaces de WhatsApp desde el dominio definitivo. Las inscripciones y los pagos se coordinan directamente por WhatsApp; el sitio no procesa pagos ni registra alumnos automáticamente.

No publiques las carpetas research o qa si están presentes: son material auxiliar de desarrollo y verificación.

## Apariencia

El botón Apariencia de la cabecera permite elegir Automático, Claro, Noche, Bosque y Arena. Automático sigue el modo claro u oscuro del dispositivo y responde a sus cambios. La selección se aplica a toda la página y se recuerda mediante almacenamiento local de este navegador. Si el navegador bloquea el almacenamiento, el tema funciona durante la visita y se indica en el selector. No se envía esta preferencia a ningún servidor. Puedes editar las paletas en themes.css.
