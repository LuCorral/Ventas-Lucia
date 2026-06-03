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

const estadoOrden = { 'Disponible': 0, 'Reservado': 1, 'Vendido': 2 };

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
  const wrap = img.closest('.product-media');
  if (!wrap) return;
  wrap.innerHTML = '<div class="img-placeholder">Imagen no disponible</div>';
}

function crearWhatsAppLink(product) {
  const nombre = product.nombre || 'este producto';
  const precio = product.precio ? formatARS(product.precio) : 'consultar precio';
  const mensaje = `Hola Lu! Te consulto por ${nombre} de ${precio}. ¿Sigue disponible?`;
  const encoded = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function renderCard(product) {
  const estado = product.estado || 'Disponible';
  const card = document.createElement('article');
  card.className = `product-card${estado === 'Vendido' ? ' sold' : ''}`;

  const media = document.createElement('div');
  media.className = 'product-media';

  if (estado === 'Vendido') {
    const badge = document.createElement('div');
    badge.className = 'sold-badge';
    badge.textContent = 'Vendido';
    media.appendChild(badge);
  } else if (estado === 'Reservado') {
    const badge = document.createElement('div');
    badge.className = 'reserved-badge';
    badge.textContent = 'Reservado';
    media.appendChild(badge);
  }

  const imgSrc = Array.isArray(product.imagenes) && product.imagenes.length ? product.imagenes[0] : null;
  if (imgSrc) {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = product.nombre || 'Producto';
    img.onerror = () => handleBrokenImage(img);
    media.appendChild(img);
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

  if (product.condicion) {
    const conditionSpan = document.createElement('span');
    conditionSpan.className = 'condition';
    conditionSpan.textContent = product.condicion;
    meta.appendChild(conditionSpan);
  }

  const desc = document.createElement('p');
  desc.className = 'product-desc';
  desc.textContent = product.descripcion || 'Sin descripción disponible.';

  const footer = document.createElement('div');
  footer.className = 'product-footer';

  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = product.precio ? formatARS(product.precio) : 'Consultar precio';

  const chip = document.createElement('div');
  chip.className = `chip ${estado === 'Disponible' ? 'disponible' : estado === 'Reservado' ? 'reservado' : 'vendido'}`;
  chip.textContent = estado;

  const link = document.createElement('a');
  link.className = 'whatsapp';
  link.href = crearWhatsAppLink(product);
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Consultar por WhatsApp';

  footer.appendChild(price);
  footer.appendChild(chip);
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
      const text = [producto.nombre, producto.categoria, producto.marca, producto.descripcion]
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
