
# INELRED v2.0 - Sistema de Gestión de Mantenimiento

Sistema moderno de gestión de mantenimiento migrado de PHP a Firebase con HTML, CSS y JavaScript.

## 📁 Estructura del Proyecto

```
/workspace/
├── index.html              # Login/Auth
├── dashboard.html          # Panel principal con KPIs
├── mantenimiento.html      # Fichas de mantenimiento preventivo/correctivo
├── mejoras.html            # Módulo de mejoras (NUEVO)
├── reactivos.html          # Módulo de emergencias (NUEVO)
├── configuracion.html      # Configuración de empresas y usuarios
├── css/
│   └── styles.css          # Estilos globales
├── js/
│   └── firebase-config.js  # Configuración centralizada de Firebase
└── img/
    ├── logo.png
    └── logo-ico.ico
```

## 🔥 Módulos Implementados

### 1. **Mantenimiento** (`mantenimiento.html`)
- Registro de fichas preventivas y correctivas
- Selección de empresa y solicitante
- Integración con Firebase Firestore

### 2. **Mejoras** (`mejoras.html`) ✨ NUEVO
- Formulario completo para gestión de mejoras
- Campos: tipo de mejora, prioridad, descripción, beneficios, costo estimado, plazo
- Tabla de listado con filtros por estado
- Funciones CRUD (crear, leer, actualizar, eliminar)

### 3. **Reactivos** (`reactivos.html`) ✨ NUEVO
- Reporte de emergencias críticas
- Niveles de criticidad (alto, medio, bajo)
- Tipos de emergencia predefinidos
- Información de contacto y evidencia
- Seguimiento de estados (activo, en atención, resuelto, cerrado)

## 🛠️ Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Estilos:** TailwindCSS (CDN) + CSS personalizado
- **Iconos:** Bootstrap Icons
- **Backend:** Firebase (Authentication + Firestore)
- **Tema:** Modo claro/oscuro

## 📊 Colecciones en Firestore

| Colección | Descripción |
|-----------|-------------|
| `empresas` | Empresas clientes |
| `solicitantes` | Usuarios solicitantes por empresa |
| `fichas_mantenimiento` | Fichas de mantenimiento |
| `fichas_mejoras` | Fichas de mejoras |
| `fichas_reactivos` | Fichas de emergencias |

## 🚀 Uso

1. Abrir `index.html` para iniciar sesión
2. El dashboard mostrará los KPIs generales
3. Acceder a cada módulo desde el dashboard
4. Todos los módulos requieren autenticación

## 🔐 Configuración Firebase

La configuración está centralizada en `js/firebase-config.js`. Para usar en otros archivos:

```javascript
import { auth, db, initTheme, checkAuth } from './js/firebase-config.js';
```

## 👤 Autor

INELRED - Sistema de Mantenimiento v2.0