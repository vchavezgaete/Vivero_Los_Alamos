// WhatsApp del vivero. Formato: código de país + número, sin espacios ni signos.
const WHATSAPP_NUMBER = "56996373763";

const WHATSAPP_MESSAGE =
  "Hola, vi la página web de Vivero Los Álamos y quisiera consultar por disponibilidad de productos.";

// Galería editable.
// name: texto visible bajo cada foto.
// note: detalle breve. Usa "por confirmar" cuando la especie necesite validación del vivero.
const GALLERY_ITEMS = [
  { file: "16c8084a-f0e5-4d52-b201-ffaa6f4225af.jpg", name: "Plantas nativas en bolsa", note: "Stock joven para trasplante" },
  { file: "18ff8414-4f48-4932-8eb5-4e3855fdcfa6.jpg", name: "Atención en vivero", note: "Foto del equipo" },
  { file: "2007df4a-65ff-439e-9e8c-cd8c4fea5534.jpg", name: "Pino en almácigo", note: "Plantines en producción" },
  { file: "232f4a6e-e104-416a-bcc9-440a99dab65c.jpg", name: "Plantas nativas", note: "Variedades en pasillo" },
  { file: "23dbed06-fc39-4b5d-a1ff-345200f97e36.jpg", name: "Árboles en bolsa", note: "Especie por confirmar" },
  { file: "2714f188-e81a-4324-8219-5a263a2df304.jpg", name: "Eucaliptus", note: "Plantines en bandeja" },
  { file: "286fa8b3-1336-4b6c-8c47-9596e2168610.jpg", name: "Pino en almácigo", note: "Producción en hileras" },
  { file: "2b26074d-1d9d-4bb2-8026-7cbdfe20026d.jpg", name: "Pino en bolsa", note: "Plantines listos para venta" },
  { file: "2c5344f2-40b1-4da7-8de5-f1fca1a10d4a.jpg", name: "Canelo nativo", note: "Identificación por confirmar" },
  { file: "38339ed3-77bf-4104-85d0-fdf25396d944.jpg", name: "Letrero del vivero", note: "Información comercial" },
  { file: "384524d7-5065-4d0b-a634-3d103eae3570.jpg", name: "Árboles nativos", note: "Especie por confirmar" },
  { file: "3d196cd1-8859-4b0a-8b7b-74710a20eb7c.jpg", name: "Eucaliptus", note: "Plantines en producción" },
  { file: "438babcc-d384-4c2b-ab24-2140b2cf47f8.jpg", name: "Acceso del vivero", note: "Entrada y punto de atención" },
  { file: "4a61e8b2-8202-4af7-8bc3-079ab142a1fe.jpg", name: "Madroño", note: "Identificación por confirmar" },
  { file: "4ad1add0-6a40-401f-a2de-9bed702f5320.jpg", name: "Árboles en bolsa", note: "Especie por confirmar" },
  { file: "4d105a32-ac3e-4c31-ae2d-027b88d38cf2.jpg", name: "Plantas nativas", note: "Variedades en bolsa" },
  { file: "4d651102-6bba-4209-9035-175f078b7785.jpg", name: "Pino en bolsa", note: "Plantines forestales" },
  { file: "4d9ea174-efb6-4be7-b922-4b68fbb7442f.jpg", name: "Madroño", note: "Identificación por confirmar" },
  { file: "5133f102-790a-4dd4-b398-475d481c9023.jpg", name: "Canelo nativo", note: "Identificación por confirmar" },
  { file: "52412740-d2f6-466b-b7e2-de2a83df3a26.jpg", name: "Plantas nativas en bolsa", note: "Stock variado" },
  { file: "55bca12a-a4e6-4108-9028-73d57a1d57eb.jpg", name: "Plantas nativas", note: "Especie por confirmar" },
  { file: "58275988-43e4-468d-b946-f58bca56d932.jpg", name: "Plantas nativas", note: "Variedades en bolsa" },
  { file: "59478efb-5e09-4869-88fe-a0a5d919aaa0.jpg", name: "Pino en bolsa", note: "Plantines forestales" },
  { file: "597898fe-fd99-49d5-93d0-d2b145941165.jpg", name: "Plantas nativas", note: "Especie por confirmar" },
  { file: "5d5bbdf0-ecf0-4ae8-ad54-fd07d6284c35.jpg", name: "Madroño", note: "Identificación por confirmar" },
  { file: "5f9e7759-7d16-4452-8d98-63d203c8e7ac.jpg", name: "Madroño", note: "Arbusto nativo por confirmar" },
  { file: "6220a549-6a7b-442e-8bf3-e0c1a0519b9d.jpg", name: "Eucaliptus", note: "Plantines en hileras" },
  { file: "64b9c9ce-0c6c-42a6-953d-a958289ca382.jpg", name: "Pino en bolsa", note: "Plantines forestales" },
  { file: "6af759c0-ac11-4ee6-b952-b3e13cea6e68.jpg", name: "Árboles nativos", note: "Especie por confirmar" },
  { file: "6ca323ee-8e5a-4055-9c06-2a4dc2d55719.jpg", name: "Eucaliptus", note: "Plantines jóvenes" },
  { file: "6f245f18-ad4b-4e62-9635-d7c2c5c5499c.jpg", name: "Pino", note: "Plantines en hileras" },
  { file: "6f81d4ce-a198-4832-87e6-11c91e1131da.jpg", name: "Pino en bolsa", note: "Stock forestal" },
  { file: "715ee165-2aa4-4918-8cba-d13723952270.jpg", name: "Eucaliptus", note: "Plantines en producción" },
  { file: "71ffedf2-bec3-4ada-a3d8-e1369a1f766d.jpg", name: "Árboles nativos", note: "Especie por confirmar" },
  { file: "7a03722a-5368-42b9-84e9-105ea44a6c63.jpg", name: "Planta ornamental", note: "Hoja colorida" },
  { file: "7b57acd6-4f67-49a9-8244-d08926fbaec2.jpg", name: "Árboles en bolsa", note: "Especie por confirmar" },
  { file: "814adcc8-4e1c-4043-a6ce-25720392ea60.jpg", name: "Pino en bolsa", note: "Plantines forestales" },
  { file: "883b159a-aadd-443f-8f98-b51bea39da00.jpg", name: "Eucaliptus", note: "Plantines en almácigo" },
  { file: "89a62279-4afb-4f06-8ce3-eda1870a6f05.jpg", name: "Arbusto nativo", note: "Especie por confirmar" },
  { file: "8de76e62-e283-4291-a41a-ef4de69193ba.jpg", name: "Plantas nativas", note: "Variedades en bolsa" },
  { file: "906251e7-e3ed-49af-b9a4-07b1c31f7471.jpg", name: "Plantas nativas", note: "Stock surtido" },
  { file: "928c13e9-6d16-4a64-a2e5-76d0a6769e27.jpg", name: "Canelo nativo", note: "Identificación por confirmar" },
  { file: "92aa8848-f81b-462b-ad78-24ca9e51ed8b.jpg", name: "Pino en bolsa", note: "Plantines forestales" },
  { file: "97e82c85-71db-4869-8827-1a184c6ad05c.jpg", name: "Entrada del vivero", note: "Vista exterior" },
  { file: "9853068d-5cc7-4a9a-bf94-69a67a38cb5f.jpg", name: "Eucaliptus", note: "Plantines en bandeja" },
  { file: "98e70600-71de-4ac3-b0b2-24309000c959.jpg", name: "Plantas nativas surtidas", note: "Especies por confirmar" },
  { file: "a1fc4a20-e578-4192-a71b-39c3f0e2d488.jpg", name: "Canelo nativo", note: "Identificación por confirmar" },
  { file: "a6c1c574-3b47-4612-b4c2-dfdfe424762f.jpg", name: "Plantas nativas", note: "Pasillo de stock" },
  { file: "a73671b7-4549-4654-9aa1-3c6f6ff39375.jpg", name: "Canelo o madroño", note: "Por confirmar" },
  { file: "a9f54ea0-ce6f-4e5b-9bbc-afd863866dd5.jpg", name: "Plantas nativas", note: "Variedades en bolsa" },
  { file: "ab6a346a-5e4a-4fac-9976-2b1d2e7bf0ed.jpg", name: "Pino", note: "Plantines en producción" },
  { file: "aff8708a-cba8-4f99-9141-596e46faf37d.jpg", name: "Madroño", note: "Identificación por confirmar" },
  { file: "b0ec199f-8617-4aeb-93b3-50da165aa2f9.jpg", name: "Plantas nativas surtidas", note: "Especies por confirmar" },
  { file: "b0f350fe-0316-4d8b-928b-002bcd8768a8.jpg", name: "Árboles de hoja caduca", note: "Frutal o nativo por confirmar" },
  { file: "b3e6ee4f-fbf8-4d1c-8358-01160931dc19.jpg", name: "Árboles en bolsa", note: "Especie por confirmar" },
  { file: "b8b71a64-83fa-48fc-982f-8064f0d4b23e.jpg", name: "Plantas nativas", note: "Stock surtido" },
  { file: "bea75b1e-8035-4e41-9d37-c1f102bf1d80.jpg", name: "Plantas nativas", note: "Pasillo de stock" },
  { file: "c971a5fb-142e-41e2-b948-7d179cd419a0.jpg", name: "Canelo o madroño", note: "Por confirmar" },
  { file: "cd71e5db-f52e-4b7a-b253-1c6daa6c71a0.jpg", name: "Árboles en bolsa", note: "Especie por confirmar" },
  { file: "d1c8bf86-f5fc-446c-a0ca-99335d62ce7f.jpg", name: "Punto de atención", note: "Vista del vivero" },
  { file: "d3e19984-c517-4697-9067-eade3a53748b.jpg", name: "Eucaliptus", note: "Producción en hileras" },
  { file: "d66c8a17-2ee2-4464-8079-13c83b5285f6.jpg", name: "Planta ornamental", note: "Hoja colorida" },
  { file: "d6dc502a-a805-453b-831c-496034cf1423.jpg", name: "Plantines de vivero", note: "Especie por confirmar" },
  { file: "da783ced-0b4d-421d-a595-b463df68a091.jpg", name: "Canelo nativo", note: "Identificación por confirmar" },
  { file: "e50ba85f-867f-4977-ae4f-675ea886806a.jpg", name: "Plantas nativas surtidas", note: "Especies por confirmar" },
  { file: "e51b1667-1a1d-4d3b-958d-69b1c5b01390.jpg", name: "Plantas nativas", note: "Pasillo de stock" },
  { file: "e5861d6b-454b-44f0-b388-086adf61ec05.jpg", name: "Plantas nativas surtidas", note: "Especies por confirmar" },
  { file: "eadd1435-bb90-4266-8a3e-d29d46bd2dc3.jpg", name: "Madroño", note: "Identificación por confirmar" },
  { file: "ec6d6f4e-493f-46c6-9c43-e7da7767df16.jpg", name: "Planta nativa en bolsa", note: "Especie por confirmar" },
  { file: "effc72a2-c5b1-4410-9c40-ad8364ac85dc.jpg", name: "Madroño", note: "Identificación por confirmar" },
  { file: "fd1c6ee3-6264-425c-911e-023566e5b307.jpg", name: "Canelo nativo", note: "Identificación por confirmar" },
];

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const gallery = document.querySelector(".js-gallery");
const currentPage = document.body.dataset.page;

function closeMenu() {
  document.body.classList.remove("menu-open");
  mainNav?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

function openWhatsApp() {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.includes("X")) {
    alert("Falta configurar el número de WhatsApp en script.js");
    return;
  }

  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);

  if (!cleanNumber) {
    alert("Falta configurar el número de WhatsApp en script.js");
    return;
  }

  window.open(`https://wa.me/${cleanNumber}?text=${encodedMessage}`, "_blank", "noopener");
}

menuButton?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) return;

    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".js-whatsapp").forEach((button) => {
  button.addEventListener("click", openWhatsApp);
});

if (currentPage) {
  document.querySelector(`[data-nav="${currentPage}"]`)?.setAttribute("aria-current", "page");
}

function createGalleryCard(item, index) {
  const figure = document.createElement("figure");
  figure.className = "gallery-card reveal";

  figure.innerHTML = `
    <div class="image-frame gallery-item">
      <img src="Imagenes/${item.file}" alt="${item.name}" loading="lazy" />
      <div class="image-placeholder"><span>${item.name}</span></div>
    </div>
    <figcaption>
      <strong>${item.name}</strong>
      <span>${item.note}</span>
    </figcaption>
  `;

  figure.style.transitionDelay = `${Math.min(index % 8, 4) * 35}ms`;
  return figure;
}

if (gallery) {
  GALLERY_ITEMS.forEach((item, index) => {
    gallery.appendChild(createGalleryCard(item, index));
  });
}

// Si una imagen todavía no existe, se muestra el placeholder verde preparado en el HTML.
document.querySelectorAll(".image-frame img").forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("is-missing");
  });

  if (image.complete && image.naturalWidth === 0) {
    image.classList.add("is-missing");
  }
});

// Efecto simple al aparecer las secciones al hacer scroll, sin librerías externas.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
