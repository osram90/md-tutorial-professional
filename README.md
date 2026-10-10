# MD Tutorial Professional - Guía Completa de Dinámica Molecular

> Una guía robusta, académica y profesional para ejecutar simulaciones de dinámica molecular con GROMACS 2025.3 y aceleración GPU NVIDIA.

## 📚 Descripción

Este proyecto proporciona una documentación exhaustiva basada en experiencia real de trabajo con:

- **Proteína:** RSV-F (Respiratory Syncytial Virus Fusion protein)
- **Objetivo:** Virtual screening de 10 ligandos contra múltiples sitios de unión
- **Duración:** 10 nanosegundos de simulación por sistema
- **Aceleración:** NVIDIA GPU CUDA (30-60 minutos por sistema vs. 3-5 horas en CPU)

## 🎯 Características

✅ **Guía Markdown Robusta** (3,500+ palabras)
- 10 capítulos detallados
- Ejemplos reales del pipeline ejecutado
- Interpretación profesional de resultados
- Troubleshooting completo

✅ **Sitio Web Interactivo**
- Construido con React 18 + Vite
- Animaciones fluidas con Framer Motion
- Diseño responsive (móvil + desktop)
- Dark mode académico profesional

✅ **Componentes Reutilizables**
- Header con navegación sticky
- Timeline de simulación interactiva
- Code blocks con copy-to-clipboard
- Secciones colapsables

## 🚀 Estructura del Proyecto

```
md-tutorial-pro/
├── docs/
│   └── GUIA_COMPLETA.md         (Guía markdown robusta 3500+ palabras)
├── src/
│   ├── App.jsx                   (Componente principal)
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── TableOfContents.jsx
│   │   ├── GuideSection.jsx
│   │   ├── SimulationTimeline.jsx
│   │   ├── CodeBlock.jsx
│   │   └── Footer.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🛠️ Instalación y Ejecución

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar o descargar el proyecto
cd md-tutorial-pro

# Instalar dependencias
npm install

# Instalar Motion para animaciones
npm install framer-motion

# Instalar herramientas GROMACS (opcional, para documentación)
# En Linux: sudo apt-get install gromacs
```

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# Resultado: http://localhost:5173
```

### Build para Producción

```bash
# Compilar para producción
npm run build

# Preview de build
npm run preview
```

## 📖 Contenido de la Guía

### Capítulos Principales

1. **Prefacio y Contexto** - Origen del protocolo
2. **Introducción** - Conceptos fundamentales
3. **Fundamentos Teóricos** - Campos de fuerza y termodinámica
4. **Requisitos del Sistema** - Hardware y software necesario
5. **Protocolo Experimental** - Flujo integrado
6. **Ejecución Paso a Paso** - Detalles técnicos de cada fase
7. **Monitoreo en Tiempo Real** - Soluciones sin interferencia
8. **Análisis de Resultados** - RMSD, RMSF, distancias
9. **Troubleshooting** - Soluciones a problemas comunes
10. **Conclusiones y Referencias** - Interpretación y literatura

### Ejemplos Incluidos

- Scripts bash automatizados
- Archivos MDP (Molecular Dynamics Parameters)
- Comandos GROMACS reales
- Análisis de outputs
- Monitoreo en tiempo real

## 🎨 Tecnologías Utilizadas

### Frontend
- **React 18** - UI interactiva
- **Framer Motion** - Animaciones fluidas
- **Tailwind CSS** - Estilos profesionales
- **Lucide Icons** - Iconografía moderna

### Development
- **Vite** - Build tool rápido
- **ESLint** - Code quality
- **React Markdown** - Renderizado de markdown

### Backend (Opcional)
- **Node.js** - Runtime
- **Express** (para API futura)

## 📊 Características Técnicas

### Animaciones y UX
- ✨ Page transitions fluidas
- 🎯 Scroll progress indicator
- 🎬 Staggered animations
- 📱 Responsive navigation
- ♿ Accessible components

### Contenido Académico
- 📐 Formulación matemática correcta
- 📚 Referencias bibliográficas
- 🔬 Ejemplos reproducibles
- 💡 Notas pedagógicas

## 🔐 Licencia

MIT License - Libre para uso académico y comercial

## 👥 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto y Soporte

**Laboratorio de Química Computacional**
Octubre 2026

Para preguntas o reportar bugs:
- Abre un issue en GitHub
- Consulta la sección de Troubleshooting en la guía

## 📚 Lecturas Complementarias

- [GROMACS Official Manual](https://manual.gromacs.org/)
- [AMBER Force Field](https://ambermd.org/)
- [Molecular Dynamics Simulations](https://dx.doi.org/10.1021/acs.jchemed.9b00726)

## 🙏 Agradecimientos

- Comunidad GROMACS por herramientas excepcionales
- Desarrolladores de Framer Motion por animaciones
- Comunidad de Química Computacional

---

**Última actualización:** Octubre 2026  
**Versión:** 1.0  
**Status:** Production Ready ✅
