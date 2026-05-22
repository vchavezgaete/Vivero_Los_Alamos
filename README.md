# Vivero Los Álamos – Sitio web informativo

Sitio web estático para **Vivero Los Álamos** (Nueva Imperial), con contenido editable sin programar.

## Cómo ver el sitio en tu computadora

```bash
npm install
npm run dev
```

Abre [http://localhost:4321](http://localhost:4321) en el navegador.

## Cómo publicar y administrar la información

### Opción 1: Desde el navegador (recomendado)

1. Con el sitio en marcha (`npm run dev`), entra a **[/admin](http://localhost:4321/admin)**.
2. Ahí se indica qué archivo editar para cada sección del sitio.

### Opción 2: Editando archivos directamente

Todo el contenido está en archivos **JSON** en la carpeta `src/data/`:

| Qué quieres cambiar | Archivo |
|---------------------|--------|
| Nombre del vivero, teléfono, email, Facebook, logo | `src/data/site.json` |
| Textos de la página de inicio | `src/data/paginas/inicio.json` |
| Textos de “Nosotros” | `src/data/paginas/nosotros.json` |
| Productos y categorías | `src/data/paginas/productos.json` |
| Textos de contacto | `src/data/paginas/contacto.json` |

Solo abre el archivo con un editor de texto, modifica los textos entre comillas y guarda. No borres las comas ni la estructura del JSON.

### Logo e imágenes desde Facebook

1. Descarga la foto de perfil o el logo de la [página de Facebook de Vivero Los Álamos](https://www.facebook.com/people/Vivero-Los-%C3%81lamos/61586331163397/).
2. Coloca la imagen en la carpeta `public/` (por ejemplo `public/logo.png`).
3. En `src/data/site.json` pon en `"logo"` la ruta de esa imagen, por ejemplo: `"/logo.png"`.

## Cómo generar el sitio para publicar

```bash
npm run build
```

La carpeta `dist/` contendrá el sitio listo para subir a cualquier hosting estático (Netlify, Vercel, GitHub Pages, etc.).

## Tecnologías

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- Contenido en JSON para edición sencilla
