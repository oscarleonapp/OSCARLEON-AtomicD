# OSCARLEON-AtomicD
Atomic Design


# ACCESIBILIDAD
Técnicas de accesibilidad incluidas
Etiqueta lang en el elemento <html>:

Especifica el idioma principal de la página para los lectores de pantalla.

Etiqueta <a> para saltar contenido:

Proporciona un enlace que permite a los usuarios con teclado o lectores de pantalla saltar directamente al contenido principal.

Roles ARIA:

role="banner" para el encabezado, role="main" para el contenido principal y role="contentinfo" para el pie de página. Esto ayuda a los usuarios de tecnologías asistivas a entender la estructura de la página.

Atributos aria-label y aria-labelledby:

Proporciona descripciones claras de los elementos interactivos, como el menú y las secciones.

Atributo tabindex:

Permite que secciones importantes sean enfocadas con el teclado (por ejemplo, con la tecla "Tab").

Contraste en estilos (no visible aquí):

Asegúrate de que los colores de texto y fondo en styles.css cumplan con las pautas de contraste WCAG (por ejemplo, 4.5:1 para texto normal).

Enlaces descriptivos:

Los textos de los enlaces explican claramente a dónde llevan (por ejemplo, "Volver al inicio").

# SEO

Explicación de las configuraciones SEO
Metaetiquetas básicas:

<meta name="description">: Es el fragmento que aparece en los resultados de búsqueda. Haz que sea claro y contenga palabras clave.

<meta name="keywords">: Lista de palabras clave relevantes para el contenido de tu proyecto. Aunque muchos motores de búsqueda ya no le dan mucho peso, sigue siendo útil.

Metaetiquetas para motores de búsqueda:

<meta name="robots">: Indica a los motores de búsqueda que indexen la página y sigan los enlaces.

Open Graph y Twitter Cards:

Estas etiquetas son esenciales para compartir tu página en redes sociales. Hacen que el contenido se muestre con títulos, descripciones y una imagen atractiva.

Favicon:

Un pequeño ícono que aparecerá en las pestañas del navegador, mejorando la personalización de tu proyecto.

Mapa del sitio (opcional):

Ayuda a los motores de búsqueda a navegar por tu proyecto de manera eficiente. Puedes generarlo automáticamente con herramientas como XML Sitemaps.

# NAVBAR RESPONSIVE

Explicación del diseño responsive
Estilo base:

Utilizamos display: flex para alinear los elementos horizontalmente y justify-content: space-between para distribuirlos.

Media queries:

En pantallas pequeñas (máximo 768px de ancho), el menú se oculta y se reemplaza por un icono de "menú hamburguesa" (☰).

Cuando se activa el menú, se muestra en una columna vertical (flex-direction: column).

Transiciones y usabilidad:

Agrega transiciones suaves al cambiar el estado del menú para mejorar la experiencia del usuario.

Posición absoluta:

El menú se posiciona como una caja desplegable en pantallas pequeñas (position: absolute;).