/* app.js
   Lógica principal del catálogo Venta de Lu.
   Usa la variable global `productos` definida en productos.js.
*/

const WHATSAPP_NUMBER = "5492944419949";

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const categoryFilter = document.getElementById('categoryFilter');
const statusFilter = document.getElementById('statusFilter');
const clearFilters = document.getElementById('clearFilters');
const resultsCount = document.getElementById('resultsCount');

const estadoOrden = { 'Nuevo': 0, 'Usado impecable': 1, 'Usado buen estado': 2, 'Usado': 3 };
let lightboxState = null;
let lightboxElements = null;

function formatARS(value) {
  try {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0
    }).format(value);
  } catch (error) {
    console.error('Error formateando precio:', error);
    return `AR$ ${value}`;
  }
}

function handleBrokenImage(img) {
  const wrap = img.closest('.product-image-wrap');
  if (!wrap) return;
  wrap.innerHTML = '<div class="img-placeholder">Imagen no disponible</div>';
}

function getLightboxElements() {
  if (lightboxElements) return lightboxElements;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Vista ampliada de producto');

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'lightbox-close';
  close.setAttribute('aria-label', 'Cerrar imagen ampliada');
  close.textContent = 'X';

  const prev = document.createElement('button');
  prev.type = 'button';
  prev.className = 'lightbox-arrow lightbox-prev';
  prev.setAttribute('aria-label', 'Foto anterior');
  prev.textContent = '<';

  const next = document.createElement('button');
  next.type = 'button';
  next.className = 'lightbox-arrow lightbox-next';
  next.setAttribute('aria-label', 'Foto siguiente');
  next.textContent = '>';

  const figure = document.createElement('figure');
  figure.className = 'lightbox-figure';

  const img = document.createElement('img');
  img.className = 'lightbox-image';

  const caption = document.createElement('figcaption');
  caption.className = 'lightbox-caption';

  figure.appendChild(img);
  figure.appendChild(caption);
  overlay.appendChild(close);
  overlay.appendChild(prev);
  overlay.appendChild(figure);
  overlay.appendChild(next);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeLightbox();
  });
  close.addEventListener('click', closeLightbox);
  prev.addEventListener('click', () => changeLightboxImage(-1));
  next.addEventListener('click', () => changeLightboxImage(1));

  lightboxElements = { overlay, close, prev, next, img, caption };
  return lightboxElements;
}

function openLightbox(product, imagenes, startIndex) {
  lightboxState = {
    product,
    imagenes,
    activeIndex: startIndex
  };

  const { overlay, close } = getLightboxElements();
  updateLightbox();
  overlay.classList.add('open');
  document.body.classList.add('no-scroll');
  close.focus();
}

function closeLightbox() {
  if (!lightboxElements) return;
  lightboxElements.overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
  lightboxState = null;
}

function changeLightboxImage(step) {
  if (!lightboxState) return;
  const total = lightboxState.imagenes.length;
  lightboxState.activeIndex = (lightboxState.activeIndex + step + total) % total;
  updateLightbox();
}

function updateLightbox() {
  if (!lightboxState || !lightboxElements) return;

  const { product, imagenes, activeIndex } = lightboxState;
  const { prev, next, img, caption } = lightboxElements;
  img.src = imagenes[activeIndex];
  img.alt = `${product.nombre || 'Producto'} - foto ${activeIndex + 1}`;
  caption.textContent = `${product.nombre || 'Producto'} - Foto ${activeIndex + 1} de ${imagenes.length}`;

  const showControls = imagenes.length > 1;
  prev.hidden = !showControls;
  next.hidden = !showControls;
}

function renderProductCarousel(product, imagenes) {
  let activeIndex = 0;

  const carousel = document.createElement('div');
  carousel.className = 'product-carousel';

  const imageWrap = document.createElement('div');
  imageWrap.className = 'product-image-wrap';
  carousel.appendChild(imageWrap);

  const dots = document.createElement('div');
  dots.className = 'carousel-dots';

  const dotButtons = imagenes.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', `Ver foto ${index + 1}`);
    dot.addEventListener('click', () => updateImage(index));
    dots.appendChild(dot);
    return dot;
  });

  function updateImage(nextIndex) {
    activeIndex = (nextIndex + imagenes.length) % imagenes.length;
    imageWrap.innerHTML = '';

    const img = document.createElement('img');
    img.src = imagenes[activeIndex];
    img.alt = `${product.nombre || 'Producto'} - foto ${activeIndex + 1}`;
    img.loading = activeIndex === 0 ? 'eager' : 'lazy';
    img.onerror = () => handleBrokenImage(img);
    img.addEventListener('click', () => openLightbox(product, imagenes, activeIndex));
    imageWrap.appendChild(img);

    dotButtons.forEach((dot, index) => {
      dot.classList.toggle('active', index === activeIndex);
      dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
    });
  }

  if (imagenes.length > 1) {
    const prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'carousel-arrow carousel-arrow-prev';
    prev.setAttribute('aria-label', 'Foto anterior');
    prev.textContent = '<';
    prev.addEventListener('click', () => updateImage(activeIndex - 1));

    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'carousel-arrow carousel-arrow-next';
    next.setAttribute('aria-label', 'Foto siguiente');
    next.textContent = '>';
    next.addEventListener('click', () => updateImage(activeIndex + 1));

    carousel.appendChild(prev);
    carousel.appendChild(next);
    carousel.appendChild(dots);
  }

  updateImage(0);
  return carousel;
}

document.addEventListener('keydown', (event) => {
  if (!lightboxState) return;

  if (event.key === 'Escape') {
    closeLightbox();
  } else if (event.key === 'ArrowLeft') {
    changeLightboxImage(-1);
  } else if (event.key === 'ArrowRight') {
    changeLightboxImage(1);
  }
});

function crearWhatsAppLink(product) {
  const nombre = product.nombre || 'este producto';
  const precio = product.precio ? formatARS(product.precio) : 'consultar precio';
  const mensaje = `Hola Lu! Te consulto por ${nombre} de ${precio}. ¿Sigue disponible?`;
  const encoded = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function renderCard(product) {
  const estado = product.estado || 'Usado';
  const disponibilidad = product.disponibilidad || 'Disponible';
  const card = document.createElement('article');
  card.className = `product-card${disponibilidad === 'Vendido' ? ' sold' : ''}`;

  const media = document.createElement('div');
  media.className = 'product-media';

  if (disponibilidad === 'Vendido') {
    const badge = document.createElement('div');
    badge.className = 'sold-badge';
    badge.textContent = 'Vendido';
    media.appendChild(badge);
  } else if (disponibilidad === 'Reservado') {
    const badge = document.createElement('div');
    badge.className = 'reserved-badge';
    badge.textContent = 'Reservado';
    media.appendChild(badge);
  }

  const imagenes = Array.isArray(product.imagenes) ? product.imagenes.filter(Boolean) : [];
  if (imagenes.length) {
    media.appendChild(renderProductCarousel(product, imagenes));
  } else {
    media.innerHTML = '<div class="img-placeholder">Imagen no disponible</div>';
  }

  const body = document.createElement('div');
  body.className = 'product-body';

  const title = document.createElement('h3');
  title.className = 'product-title';
  title.textContent = product.nombre || 'Producto sin nombre';

  const meta = document.createElement('div');
  meta.className = 'product-meta';
  const categorySpan = document.createElement('span');
  categorySpan.className = 'category';
  categorySpan.textContent = product.categoria || 'Otros';
  const brandSpan = document.createElement('span');
  brandSpan.textContent = product.marca ? product.marca : '';
  meta.appendChild(categorySpan);
  if (product.marca) {
    meta.appendChild(brandSpan);
  }

  const estadoChip = document.createElement('span');
  estadoChip.className = `condition ${estado === 'Nuevo' ? 'nuevo' : estado === 'Usado impecable' ? 'impecable' : estado === 'Usado buen estado' ? 'buen-estado' : 'usado'}`;
  estadoChip.textContent = estado;
  meta.appendChild(estadoChip);

  const desc = document.createElement('p');
  desc.className = 'product-desc';
  desc.textContent = product.descripcion || 'Sin descripción disponible.';

  const footer = document.createElement('div');
  footer.className = 'product-footer';

  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = product.precio ? formatARS(product.precio) : 'Consultar precio';

  const link = document.createElement('a');
  link.className = 'whatsapp';
  link.href = crearWhatsAppLink(product);
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Consultar por WhatsApp';

  footer.appendChild(price);
  footer.appendChild(link);

  body.appendChild(title);
  body.appendChild(meta);
  body.appendChild(desc);
  body.appendChild(footer);

  card.appendChild(media);
  card.appendChild(body);

  return card;
}

function renderList(lista) {
  if (!productsGrid) return;
  productsGrid.innerHTML = '';

  if (!Array.isArray(lista) || lista.length === 0) {
    productsGrid.innerHTML = '<div class="no-results">No se encontraron productos.</div>';
    resultsCount.textContent = '0 productos encontrados';
    return;
  }

  lista.forEach(producto => {
    const card = renderCard(producto);
    productsGrid.appendChild(card);
  });

  resultsCount.textContent = `${lista.length} producto${lista.length === 1 ? '' : 's'} encontrado${lista.length === 1 ? '' : 's'}`;
}

function applyFilters() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  const category = categoryFilter?.value || 'Todos';
  const status = statusFilter?.value || 'Todos';

  if (!Array.isArray(productos)) {
    console.error('Error: productos no es un array. Verifica productos.js');
    productsGrid.innerHTML = '<div class="no-results">Error al cargar el catálogo. Revisa la consola.</div>';
    resultsCount.textContent = '0 productos encontrados';
    return;
  }

  const results = productos
    .filter(producto => {
      const text = [producto.nombre, producto.categoria, producto.estado, producto.marca, producto.descripcion]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const matchesQuery = query === '' || text.includes(query);
      const matchesCategory = category === 'Todos' || producto.categoria === category;
      const matchesStatus = status === 'Todos' || producto.estado === status;
      return matchesQuery && matchesCategory && matchesStatus;
    })
    .sort((a, b) => {
      const highlighted = (producto) => producto.destacado ? 0 : 1;
      const byDestacado = highlighted(a) - highlighted(b);
      if (byDestacado !== 0) return byDestacado;

      const orderA = estadoOrden[a.estado] ?? 3;
      const orderB = estadoOrden[b.estado] ?? 3;
      if (orderA !== orderB) return orderA - orderB;

      return (b.id || 0) - (a.id || 0);
    });

  renderList(results);
}

function initApp() {
  console.log('Productos cargados:', Array.isArray(productos) ? productos.length : 'no se pudo leer productos');

  if (!Array.isArray(productos)) {
    console.error('Error: productos no existe o no es un array. Revisa productos.js');
    productsGrid.innerHTML = '<div class="no-results">Error al cargar productos. Comprueba productos.js.</div>';
    resultsCount.textContent = '0 productos encontrados';
    return;
  }

  applyFilters();

  searchInput?.addEventListener('input', applyFilters);
  clearSearch?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    applyFilters();
  });

  categoryFilter?.addEventListener('change', applyFilters);
  statusFilter?.addEventListener('change', applyFilters);

  clearFilters?.addEventListener('click', () => {
    if (categoryFilter) categoryFilter.value = 'Todos';
    if (statusFilter) statusFilter.value = 'Todos';
    if (searchInput) searchInput.value = '';
    applyFilters();
  });
}

function onReady() {
  if (!productsGrid || !resultsCount) {
    console.error('Error: El DOM no contiene productsGrid o resultsCount. Verifica index.html');
    return;
  }
  initApp();
}

document.addEventListener('DOMContentLoaded', onReady);
