# JSRDev — Crimson Architect Portfolio

> Portafolio personal de desarrollo web construido con React 18, Tailwind CSS v4 y una estética brutalista/cyberpunk.

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| **React** | 18 (UMD/CDN) | UI framework |
| **React Router** | 6.3.0 (HashRouter) | Navegación SPA |
| **Tailwind CSS** | v4.2 (standalone CLI) | Estilos utilitarios |
| **Babel Standalone** | 6 | Transpilación JSX en el navegador |
| **XAMPP/Apache** | — | Servidor de desarrollo local |

## 📂 Estructura del Proyecto

```
PortafolioJSR/
├── assets/
│   ├── favicon.svg          # Favicon SVG del sitio
│   └── img/                 # Imágenes estáticas (si aplica)
├── dist/
│   └── css/
│       └── output.css       # CSS compilado por Tailwind (NO editar directamente)
├── src/
│   ├── css/
│   │   └── input.css        # CSS fuente — tokens de diseño, tema y utilidades custom
│   └── js/
│       ├── globals.js       # Destructuración de hooks de React y React Router
│       ├── App.js           # Componente raíz y configuración de rutas
│       ├── components/
│       │   ├── Navigation.js  # Barra de navegación (desktop + móvil)
│       │   ├── Footer.js      # Pie de página
│       │   └── ProjectCard.js # Tarjeta de proyecto reutilizable
│       └── pages/
│           ├── HomePage.js       # Página de inicio (hero, proceso, proyectos)
│           ├── ProjectsPage.js   # Galería de proyectos
│           └── ContactPage.js    # Formulario de contacto
├── index.html               # Punto de entrada HTML
├── build.bat                 # Script para compilar Tailwind CSS (producción)
├── watch.bat                 # Script para compilar Tailwind CSS (modo watch)
├── tailwindcss.exe           # CLI standalone de Tailwind CSS v4
└── README.md                 # Este archivo
```

## 🚀 Configuración Inicial

### Requisitos

- **XAMPP** (o cualquier servidor HTTP local como Live Server, http-server, etc.)
- **Tailwind CSS v4 standalone CLI** (ya incluido como `tailwindcss.exe`)

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd PortafolioJSR
```

### 2. Descargar el CLI de Tailwind CSS (si no está incluido)

El binario standalone de Tailwind CSS v4 ya está incluido como `tailwindcss.exe`. Si necesitas descargarlo manualmente:

1. Ve a la [página de releases de Tailwind CSS](https://github.com/tailwindlabs/tailwindcss/releases)
2. Descarga el binario correspondiente a tu sistema operativo:
   - **Windows**: `tailwindcss-windows-x64.exe`
   - **macOS (Intel)**: `tailwindcss-macos-x64`
   - **macOS (Apple Silicon)**: `tailwindcss-macos-arm64`
   - **Linux**: `tailwindcss-linux-x64`
3. Renómbralo a `tailwindcss.exe` (o `tailwindcss` en Mac/Linux) y colócalo en la raíz del proyecto
4. En Mac/Linux, hazlo ejecutable: `chmod +x tailwindcss`

### 3. Compilar los estilos

**Compilación única (producción, minificado):**
```bash
# Windows
build.bat

# Alternativa manual
./tailwindcss.exe --input src/css/input.css --output dist/css/output.css --minify
```

**Modo watch (desarrollo, recompila automáticamente al guardar):**
```bash
# Windows
watch.bat

# Alternativa manual
./tailwindcss.exe --input src/css/input.css --output dist/css/output.css --watch
```

### 4. Iniciar el servidor

Si usas XAMPP:
1. Coloca el proyecto en `C:\xampp\htdocs\PortafolioJSR\`
2. Inicia Apache desde el panel de control de XAMPP
3. Abre `http://localhost/PortafolioJSR/` en tu navegador

Si usas otro servidor (ej. VS Code Live Server):
1. Abre `index.html` con Live Server o cualquier servidor HTTP estático

> ⚠️ **Nota:** Este proyecto requiere un servidor HTTP. No se puede abrir directamente con `file://` debido a las restricciones CORS de los scripts con `type="text/babel"`.

## 📋 Scripts Disponibles

| Script | Comando | Descripción |
|---|---|---|
| `build.bat` | `tailwindcss --input ... --output ... --minify` | Compila y minifica CSS para producción |
| `watch.bat` | `tailwindcss --input ... --output ... --watch` | Recompila CSS automáticamente al detectar cambios |

## 🎨 Sistema de Diseño

El proyecto usa un sistema de tokens de color basado en **Material Design 3**, con una paleta "Crimson Architect":

- **Primario**: `#ef4444` (Crimson Red)
- **Background**: `#131313` (Near Black)
- **Surface**: Escala de grises oscuros (`#0e0e0e` → `#353535`)
- **Tipografía**: Space Grotesk (headlines/labels) + Inter (body)

Los tokens se definen en `src/css/input.css` mediante la directiva `@theme` de Tailwind CSS v4.

## 🔧 Notas Técnicas

- **JSX en el navegador**: Se usa `babel-standalone` para transpilar JSX directamente en el navegador. Esto es intencional para simplificar el setup (no requiere Node.js ni bundler). Para producción a gran escala, considera migrar a Vite.
- **`className` obligatorio**: React requiere `className` en lugar de `class` en JSX. Asegúrate de usar `className` en todos los componentes.
- **HashRouter**: Las URLs usan el formato `/#/ruta` (ej. `/#/proyectos`). No requiere configuración especial del servidor.
- **CSS no se edita directamente**: El archivo `dist/css/output.css` es generado por Tailwind. Edita `src/css/input.css` para cambios en el tema o utilidades custom.

## 📄 Licencia

© 2024–Presente JSRDev. Todos los derechos reservados.
