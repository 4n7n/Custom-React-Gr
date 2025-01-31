# Generador de Clientes

## 📋 Descripción
Aplicación web desarrollada en React para la gestión y análisis de perfiles de clientes. Permite visualizar estadísticas, generar perfiles aleatorios y gestionar una base de datos de clientes de forma eficiente.

## ✨ Características Principales

- **Gestión de Clientes**
  - Creación y edición de perfiles
  - Almacenamiento local de datos
  - Interfaz intuitiva para gestión CRUD

- **Visualización de Datos**
  - Gráficos interactivos de estadísticas
  - Múltiples tipos de visualización
  - Análisis de tendencias

- **Generador de Perfiles**
  - Integración con API RandomUser
  - Filtros por género y nacionalidad
  - Perfiles detallados y personalizables

- **Diseño Moderno**
  - Tema oscuro/claro
  - Diseño responsive
  - Animaciones fluidas

## 🛠️ Tecnologías Utilizadas

- **Frontend**
  - React 18.3.1
  - React Router DOM 7.1.3
  - Recharts 2.15.0

- **Desarrollo**
  - Vite 6.0.5
  - ESLint 9.17.0
  - SWC

## 📦 Instalación

1. **Clonar el Repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd generador-clientes
   ```

2. **Instalar Dependencias**
   ```bash
   npm install
   ```

3. **Iniciar Entorno de Desarrollo**
   ```bash
   npm run dev
   ```

## 📚 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run lint` - Ejecuta el análisis de código
- `npm run preview` - Vista previa de la versión de producción

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header/           # Navegación principal
│   ├── Footer/           # Pie de página
│   ├── Home/            # Página de inicio
│   ├── RandomUser/      # Generador de perfiles
│   ├── ClientForm/      # Formulario de clientes
│   └── Statistics/      # Visualización de datos
├── App.jsx              # Componente principal
└── main.jsx            # Punto de entrada
```

## 💻 Componentes Principales

### Header
- Navegación responsive
- Cambio de tema oscuro/claro
- Animaciones de scroll

### RandomUser
- Generación de perfiles aleatorios
- Filtros personalizables
- Vista de tarjetas interactiva

### ClientForm
- Formulario CRUD completo
- Validación de campos
- Almacenamiento persistente

### Statistics
- Gráficos interactivos
- Múltiples vistas de datos
- Análisis en tiempo real

## 🔧 Configuración

El proyecto utiliza Vite como herramienta de construcción. La configuración principal se encuentra en:

- `vite.config.js` - Configuración de Vite
- `eslint.config.js` - Reglas de ESLint
- `package.json` - Dependencias y scripts

## 🤝 Cómo Contribuir

1. Haz un Fork del proyecto
2. Crea una rama para tu función (`git checkout -b feature/NuevaFuncion`)
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva función'`)
4. Sube los cambios a tu fork (`git push origin feature/NuevaFuncion`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo `LICENSE` para más detalles.