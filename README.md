# Venta de Lu

Catálogo estático para publicar en GitHub Pages. HTML, CSS y JavaScript puro.

Contenido del repositorio:

- `index.html` - página principal (raíz).
- `styles.css` - estilos.
- `productos.js` - catálogo de productos (edítalo para agregar/editar productos).
- `app.js` - lógica de búsqueda, filtros y link a WhatsApp.
- `img/` - carpeta para las imágenes de los productos.

Cómo usar localmente

1. Abrir `index.html` en el navegador (doble clic o arrastrar al navegador).
2. No requiere servidor ni dependencias.

Cómo agregar productos

1. Abrir `productos.js` y copiar una entrada del array `productos`.
2. Asegurarse de usar un `id` único.
3. Poner la ruta relativa a la imagen dentro de `img/` en la propiedad `imagenes`.

Cómo cambiar el número de WhatsApp

1. Abrir `app.js` y modificar la constante `WHATSAPP_NUMBER` (formato internacional sin `+`).
   Ejemplo: `const WHATSAPP_NUMBER = "5491112345678";`

Agregar imágenes

1. Subir/pegar las imágenes a la carpeta `img/` con los nombres usados en `productos.js`.

Publicar en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir todos los archivos del proyecto (asegurarse de incluir `index.html` en la raíz).
3. En GitHub: Settings > Pages.
4. Source: Deploy from a branch.
5. Branch: `main`.
6. Folder: `/root`.
7. Guardar y esperar a que GitHub Pages despliegue (puede tardar unos minutos).

Notas

- El sitio está diseñado para verse bien en celular (mobile-first).
- No usa frameworks, backend ni dependencias.
- Si una imagen no existe, la card mostrará "Imagen no disponible".