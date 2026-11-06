# BASE Córdoba — Landing Page Institucional

Landing page institucional para **BASE Córdoba**, empresa mayorista de distribución con 22 años de trayectoria empresarial en Córdoba y más de 57 años de oficio comercial de su fundador.

El sitio presenta la identidad corporativa de la firma, explica su historia, clarifica su modelo operativo (depósito de distribución sin atención directa al público) y canaliza el tráfico calificado hacia la plataforma de e-commerce independiente: [basecordoba.netlify.app](https://basecordoba.netlify.app/).

---

## 🛠️ Stack Tecnológico

* **Framework:** [React 19](https://react.dev/)
* **Bundler & Dev Server:** [Vite 8](https://vite.dev/)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Iconografía:** [Lucide React](https://lucide.dev/)
* **Linter:** [Oxlint](https://oxc.rs/)

---

## 🎨 Identidad Visual (Regla 70 / 25 / 5)

* **70% — Fondo y estructura carbón:**
  * Fondo general: `#090A0C` (Negro Obsidiana)
  * Superficies secundarias: `#0D0F12` / `#111317`
  * Grillas y bordes de 1px: `#1B1E24` / `#1F242C`
* **25% — Verde institucional corporativo:**
  * Fondos de paneles clave: `#0D241C` / `#0F382A`
  * Bordes institucionales: `#1C5944` / `#144A38`
* **5% — Verde esmeralda de precisión:**
  * Acentos y CTAs primarios: `#00E599` / `#10F4A8`

### Sistema Tipográfico
* **Títulos y Encabezados:** `Archivo` (Google Fonts)
* **Lectura y UI:** `Inter` (Google Fonts)
* **Detalles Técnicos y Metadatos:** `JetBrains Mono` (Google Fonts)

---

## 📂 Estructura del Proyecto

```
base-cordoba-landing/
├── public/                 # Favicon y assets estáticos públicos
├── src/
│   ├── assets/             # Recursos multimedia locales
│   ├── components/         # Componentes de UI modulares y reutilizables
│   │   ├── Button.jsx          # Botón reutilizable con variantes semánticas
│   │   ├── Footer.jsx          # Pie de página institucional
│   │   ├── Header.jsx          # Cabecera fija y menú mobile
│   │   ├── Logo.jsx            # Isotipo y marca tipográfica
│   │   ├── MobileBottomBar.jsx # Barra inferior flotante móvil
│   │   └── SectionHeading.jsx  # Título de sección modular
│   ├── data/
│   │   └── content.js          # Datos confirmados y los 6 rubros oficiales
│   ├── sections/           # Secciones institucionales principales
│   │   ├── ContactSection.jsx      # 05 // Contacto y canales de ventas
│   │   ├── DistributionSection.jsx # 04 // Distribución y entregas
│   │   ├── HeroSection.jsx         # Hero y cifras de autoridad (22 y +57)
│   │   ├── HistorySection.jsx      # 03 // Historia y trayectoria
│   │   ├── PresentationSection.jsx # 01 // Presentación de la empresa
│   │   └── RubrosSection.jsx       # 02 // Los 6 rubros comerciales
│   ├── styles/
│   │   └── index.css       # Configuración Tailwind v4 y estilos base
│   ├── App.jsx             # Componente raíz del flujo
│   └── main.jsx            # Punto de montaje React
├── index.html              # Metadatos SEO, Open Graph y Google Fonts
├── package.json
└── vite.config.js
```

---

## 📦 Rubros Comerciales Oficiales

Los 6 rubros comerciales integrados coinciden 1:1 con el catálogo real del e-commerce:

1. **Ferretería:** Ruedas, embudos, grafito, llaves y accesorios.
2. **Herramientas:** Destornilladores, llaves, palas, tijeras y más.
3. **Jardín y riego:** Acoples, regadores, herramientas de jardín y repuestos.
4. **Automotor y moto:** Lubricantes, grasas, limpieza y mantenimiento.
5. **Bicicletas:** Lubricantes, grasas y selladores para bici.
6. **Limpieza electrónica:** Pantallas, contactos, teclados y circuitos.

---

## 🚀 Comandos Disponibles

```bash
# Iniciar servidor de desarrollo en local
npm run dev

# Compilar para producción (carpeta dist/)
npm run build

# Previsualizar el build de producción
npm run preview

# Ejecutar el linter
npm run lint
```

---

## 📞 Canales Confirmados

* **Plataforma E-Commerce:** [basecordoba.netlify.app](https://basecordoba.netlify.app/)
* **WhatsApp de Ventas:** +54 9 351 219-9277
* **Radicación:** Córdoba Capital y Gran Córdoba, Argentina
