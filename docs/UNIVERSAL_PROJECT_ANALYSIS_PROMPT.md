# 🚀 PROMPT UNIVERSAL: Análisis y Plan de Renovación de Proyectos Web

**Versión**: 1.0
**Fecha**: 2025-10-21
**Autor**: Basado en metodología MX WHMCS Modules
**Uso**: Copiar y pegar este prompt en Claude Code para cualquier proyecto web

---

## 📋 INSTRUCCIONES DE USO

### Paso 1: Preparación
1. Abre tu proyecto en Claude Code
2. Asegúrate de tener acceso a la carpeta raíz
3. Copia el prompt completo de abajo
4. Pégalo en Claude Code

### Paso 2: Personalización (Opcional)
Antes de ejecutar, puedes modificar:
- **Tipo de proyecto** (SaaS, E-commerce, Portfolio, etc.)
- **Tecnología stack** (Next.js, React, Vue, etc.)
- **Duración deseada** (1 semana, 2 semanas, 1 mes, etc.)
- **Objetivos específicos** (SEO, conversión, performance, etc.)

### Paso 3: Ejecutar
Pega el prompt y espera el análisis completo.

---

## 🎯 PROMPT UNIVERSAL (Copiar desde aquí ⬇️)

```markdown
# ANÁLISIS COMPLETO Y PLAN DE RENOVACIÓN DE PROYECTO WEB

Por favor, realiza un análisis exhaustivo de este proyecto y genera un plan de acción completo siguiendo esta metodología:

---

## FASE 1: ANÁLISIS DEL PROYECTO ACTUAL

### 1.1 Información Básica
Analiza y documenta:
- **Nombre del proyecto y descripción**
- **Tecnología stack actual** (framework, lenguaje, librerías principales)
- **Estructura de archivos y carpetas**
- **Rama actual de git**
- **Estado del proyecto** (desarrollo, producción, abandonado, etc.)

### 1.2 Análisis de Páginas Existentes
Lista todas las páginas/rutas actuales:
- Usa `glob` o `find` para encontrar archivos de páginas
- Para cada página, identifica:
  - Ruta/URL
  - Propósito
  - Estado actual (básica, completa, falta implementar)
  - Componentes principales usados

### 1.3 Análisis de Documentación
Busca y lee:
- `README.md`
- `CLAUDE.md` o archivos de instrucciones
- Carpeta `docs/` si existe
- Archivos de estrategia, plan, roadmap
- `package.json` para dependencias y scripts

### 1.4 Análisis de Componentes
Identifica componentes existentes:
- Átomos (buttons, inputs, badges, etc.)
- Moléculas (cards, forms, search bars, etc.)
- Organismos (headers, footers, grids, etc.)
- Sistema de diseño (colores, tipografía, spacing)

---

## FASE 2: EVALUACIÓN Y DECISIÓN DE ESTRATEGIA

### 2.1 Evaluación del Código Actual
Determina si el código actual es:
- ✅ **Sólido**: Mantener y mejorar incrementalmente
- 🟡 **Mejorable**: Refactorizar partes específicas
- 🔴 **Básico/Obsoleto**: Renovación completa recomendada

**Criterios de evaluación:**
- Arquitectura y organización
- Calidad del código
- Uso de mejores prácticas
- Deuda técnica acumulada
- Facilidad de mantenimiento

### 2.2 Recomendación de Estrategia
Basado en la evaluación, recomienda:

**OPCIÓN A: RENOVACIÓN COMPLETA**
- Borrar y recrear desde cero
- Ventajas y desventajas
- Tiempo estimado
- Riesgos y mitigaciones

**OPCIÓN B: RENOVACIÓN INCREMENTAL**
- Actualizar página por página
- Ventajas y desventajas
- Tiempo estimado
- Plan de coexistencia

**OPCIÓN C: MEJORA Y REFACTORIZACIÓN**
- Mantener estructura, mejorar código
- Ventajas y desventajas
- Áreas prioritarias

---

## FASE 3: ANÁLISIS DE MERCADO Y COMPETENCIA

### 3.1 Identificación de Tipo de Proyecto
Clasifica el proyecto:
- SaaS / Software
- E-commerce / Marketplace
- Portfolio / Showcase
- Blog / Content Site
- Corporate / Landing Page
- Dashboard / Admin Panel
- Otro: [especificar]

### 3.2 Keywords y SEO
Para proyectos públicos, genera:

**Primary Keywords** (3-5):
- Palabras clave principales de alto volumen
- Relacionadas al propósito del sitio

**Secondary Keywords** (5-10):
- Keywords complementarias
- Long-tail keywords

**Content Keywords** (10-15):
- Para blog posts / artículos
- Preguntas comunes de usuarios

### 3.3 Referencias de Competencia
Identifica 3-5 sitios similares exitosos para inspiración.

---

## FASE 4: PALABRAS CLAVE PARA BÚSQUEDA DE DISEÑO

Basado en el tipo de proyecto y análisis, genera términos de búsqueda para Pinterest/Dribbble/Behance:

### 4.1 Términos Generales (5-10 términos)
Ejemplo:
- "[tipo de proyecto] landing page design 2025"
- "modern [industria] website design"
- "[tecnología] UI inspiration"

### 4.2 Por Componente Específico

**Hero Sections:**
- 3-5 términos específicos

**Product/Content Cards:**
- 3-5 términos específicos

**Navigation/Header:**
- 3-5 términos específicos

**Footer:**
- 3-5 términos específicos

**Forms:**
- 3-5 términos específicos

**Dashboards** (si aplica):
- 3-5 términos específicos

**Pricing Tables** (si aplica):
- 3-5 términos específicos

### 4.3 Por Estilo Visual
Basado en la marca/industria:
- Colores predominantes
- Estilo (minimalista, moderno, glassmorphism, etc.)
- Mood (profesional, divertido, elegante, etc.)

---

## FASE 5: ESTRUCTURA DE CARPETAS PARA REFERENCIAS

Genera la estructura de carpetas para organizar referencias de diseño:

```
docs/design-references/
├── README.md
├── [componente-1]/
├── [componente-2]/
├── [componente-3]/
└── complete-pages/
```

Crea el README.md explicando:
- Qué poner en cada carpeta
- Términos de búsqueda
- Cómo usar las referencias

---

## FASE 6: PLAN DE TRABAJO DETALLADO

### 6.1 Timeline
Define duración total recomendada:
- 1 semana / 2 semanas / 1 mes / 3 meses
- Basado en complejidad y estrategia elegida

### 6.2 Fases y Sprints
Divide el trabajo en fases lógicas:

**Ejemplo para 2 semanas:**

#### SEMANA 1: Fundación
- **Día 1**: [Tareas específicas]
- **Día 2**: [Tareas específicas]
- **Día 3**: [Tareas específicas]
- **Día 4**: [Tareas específicas]
- **Día 5**: [Tareas específicas]

#### SEMANA 2: Implementación
- **Día 6**: [Tareas específicas]
- **Día 7**: [Tareas específicas]
- **Día 8**: [Tareas específicas]
- **Día 9**: [Tareas específicas]
- **Día 10**: [Tareas específicas]

### 6.3 Componentes a Crear
Lista detallada de componentes necesarios:

**Atoms** (componentes básicos):
- [Lista específica]

**Molecules** (componentes compuestos):
- [Lista específica]

**Organisms** (secciones completas):
- [Lista específica]

### 6.4 Páginas Prioritarias
Lista de páginas en orden de prioridad:

**Críticas** (Semana 1):
1. [Página 1]
2. [Página 2]
3. [Página 3]

**Altas** (Semana 2):
4. [Página 4]
5. [Página 5]

**Medias** (Futuro):
- [Páginas adicionales]

---

## FASE 7: SISTEMA DE DISEÑO

### 7.1 Paleta de Colores
Si existe un sistema de diseño, documéntalo.
Si no existe, recomienda una paleta basada en:
- Industria del proyecto
- Psicología del color
- Mejores prácticas UI/UX

**Estructura:**
- Primary Colors (2-3)
- Secondary Colors (2-3)
- Semantic Colors (success, warning, error, info)
- Grays Scale (9 tonos)
- Gradients (2-3)

### 7.2 Tipografía
Recomienda:
- Font family principal
- Font family secundaria (opcional)
- Escala tipográfica (H1 a Body)
- Pesos de fuente

### 7.3 Espaciado
Sistema de espaciado consistente:
- Base unit (4px, 8px, etc.)
- Escala de spacing (xs, sm, md, lg, xl, 2xl, 3xl)

### 7.4 Otros Elementos
- Sombras (shadow scale)
- Border radius
- Breakpoints responsive
- Animaciones y transiciones

---

## FASE 8: OPTIMIZACIÓN Y MEJORES PRÁCTICAS

### 8.1 SEO
Recomendaciones específicas:
- Metadata strategy
- Open Graph images (tamaños, ubicación)
- Schema.org markup necesario
- Sitemap.xml y robots.txt
- Internal linking strategy

### 8.2 Performance
Optimizaciones necesarias:
- Image optimization
- Code splitting
- Lazy loading
- Caching strategy
- Core Web Vitals targets

### 8.3 Accesibilidad
Checklist de accesibilidad:
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast (WCAG AA/AAA)
- Focus indicators

---

## FASE 9: ARCHIVOS A CREAR/ACTUALIZAR

Lista de archivos que debes crear o actualizar:

### Documentación:
- [ ] `docs/development/WORK_PLAN.md`
- [ ] `docs/development/DESIGN_SYSTEM.md`
- [ ] `docs/design-references/README.md`
- [ ] `QUICK_START.md` (guía rápida)
- [ ] Actualizar `README.md`

### Código:
- [ ] `src/components/atoms/` (crear estructura)
- [ ] `src/components/molecules/` (crear estructura)
- [ ] `src/components/organisms/` (crear estructura)
- [ ] `src/constants/design.js` (o .ts)
- [ ] Actualizar configuración de Tailwind/CSS

### Otros:
- [ ] `.gitignore` updates
- [ ] Actualizar `package.json` si es necesario

---

## FASE 10: PRÓXIMOS PASOS INMEDIATOS

Genera un checklist de próximos pasos accionables:

### Ahora (siguiente hora):
1. [ ] [Acción específica]
2. [ ] [Acción específica]
3. [ ] [Acción específica]

### Hoy (siguientes 4-8 horas):
4. [ ] [Acción específica]
5. [ ] [Acción específica]

### Esta semana:
6. [ ] [Acción específica]
7. [ ] [Acción específica]

---

## FASE 11: RESUMEN EJECUTIVO

Genera un resumen de 1 página con:

**Estado Actual:**
- [Descripción breve]

**Estrategia Recomendada:**
- [Opción A/B/C y por qué]

**Timeline:**
- [Duración total]

**Entregas Clave:**
- [Lista de milestones]

**Próximos Pasos:**
- [Top 3 acciones inmediatas]

**Riesgos:**
- [2-3 riesgos principales y mitigaciones]

---

## FORMATO DE SALIDA

Por favor, genera:

1. **ANALYSIS.md** - Análisis completo del proyecto actual
2. **WORK_PLAN.md** - Plan de trabajo detallado día a día
3. **DESIGN_SYSTEM.md** - Sistema de diseño documentado
4. **DESIGN_KEYWORDS.md** - Palabras clave para búsqueda de referencias
5. **QUICK_START.md** - Guía rápida para empezar
6. **design-references/README.md** - Guía de referencias de diseño

Crea también la estructura de carpetas necesaria.

---

## PERSONALIZACIÓN (Opcional)

Si quieres personalizar el análisis, responde estas preguntas antes de ejecutar:

1. **¿Cuál es el objetivo principal del proyecto?**
   - [ ] Conversión de ventas
   - [ ] Generación de leads
   - [ ] Engagement de usuarios
   - [ ] SEO y tráfico orgánico
   - [ ] Branding y awareness
   - [ ] Otro: ___________

2. **¿Cuál es tu prioridad máxima?**
   - [ ] Velocidad de desarrollo
   - [ ] Calidad y perfección
   - [ ] SEO desde día 1
   - [ ] Diseño visual impactante
   - [ ] Performance y Core Web Vitals

3. **¿Cuánto tiempo tienes disponible?**
   - [ ] 1 semana full-time
   - [ ] 2 semanas full-time
   - [ ] 1 mes part-time
   - [ ] 3+ meses

4. **¿Presupuesto para herramientas/servicios?**
   - [ ] $0 (solo herramientas gratuitas)
   - [ ] <$100/mes
   - [ ] $100-500/mes
   - [ ] >$500/mes

---

## NOTAS FINALES

Este prompt está diseñado para:
- ✅ Proyectos Next.js, React, Vue, Angular
- ✅ SaaS, E-commerce, Portfolios, Blogs
- ✅ Renovaciones completas o mejoras incrementales
- ✅ Proyectos de cualquier tamaño

**Adaptaciones sugeridas:**
- Para proyectos backend: Enfócate menos en diseño, más en arquitectura
- Para proyectos mobile: Ajusta referencias de diseño a mobile apps
- Para proyectos legacy: Agrega fase de migración de datos

---

**¿Listo para empezar?** Pega este prompt y obtén tu análisis completo en minutos. 🚀
```

---

## 📖 CÓMO USAR ESTE PROMPT

### Método 1: Uso Directo
1. Copia todo el texto del prompt (desde "ANÁLISIS COMPLETO..." hasta el final)
2. Pégalo en Claude Code en tu nuevo proyecto
3. Espera el análisis completo

### Método 2: Uso Con Personalización
1. Lee la sección "PERSONALIZACIÓN (Opcional)"
2. Responde las 4 preguntas
3. Agrega tus respuestas al inicio del prompt
4. Pega todo en Claude Code

### Método 3: Uso Parcial
Si solo necesitas una parte del análisis:
- Copia solo las fases relevantes
- Por ejemplo: "FASE 4: Palabras clave..." + "FASE 6: Plan de trabajo..."

---

## 🎯 CASOS DE USO PROBADOS

### ✅ Funciona Excelente Para:
- Proyectos SaaS y Software
- E-commerce y Marketplaces
- Landing pages y sitios corporativos
- Blogs y sitios de contenido
- Dashboards y admin panels
- Portfolios profesionales

### 🟡 Funciona con Adaptaciones Para:
- Aplicaciones móviles (ajustar referencias de diseño)
- Proyectos backend/API (menos enfoque en diseño)
- Proyectos muy grandes (dividir en módulos)
- Proyectos legacy (agregar fase de migración)

### ❌ No Recomendado Para:
- Proyectos no web (desktop apps nativos)
- Proyectos sin interfaz de usuario
- Scripts y herramientas de CLI

---

## 🔧 MEJORAS Y PERSONALIZACIONES

### Para Proyectos Específicos:

**E-commerce:**
Agrega estas fases adicionales:
- Análisis de productos y catálogo
- Integración de pagos
- Carrito de compras y checkout
- Sistema de reviews

**SaaS:**
Agrega:
- Sistema de autenticación
- Planes de pricing y subscripciones
- Dashboard de usuario
- Onboarding flow

**Blog/Content:**
Agrega:
- CMS integration
- Taxonomía y categorías
- Sistema de comentarios
- Newsletter integration

---

## 📊 RESULTADOS ESPERADOS

Al ejecutar este prompt, obtendrás:

1. **Análisis completo** del estado actual (10-15 páginas)
2. **Plan de trabajo detallado** día a día (15-20 páginas)
3. **Sistema de diseño** documentado (8-10 páginas)
4. **50+ términos** de búsqueda para referencias
5. **Estructura de carpetas** creada y documentada
6. **Checklist accionable** de próximos pasos
7. **Timeline realista** basado en complejidad

**Tiempo estimado de análisis:** 5-10 minutos
**Tiempo de ejecución del plan:** 1-4 semanas (dependiendo del proyecto)

---

## 🚀 EJEMPLO DE USO REAL

**Proyecto:** MX WHMCS Modules (este proyecto)

**Comando ejecutado:**
```
[Pegué el prompt universal]
```

**Resultados obtenidos:**
- ✅ Análisis de 6 páginas existentes
- ✅ Recomendación de renovación completa
- ✅ 40+ términos de búsqueda en Pinterest
- ✅ Plan de 2 semanas detallado día a día
- ✅ Sistema de diseño documentado
- ✅ 33 componentes a crear listados
- ✅ Estructura de carpetas creada
- ✅ 5 archivos de documentación generados

**Tiempo ahorrado:** ~8 horas de planificación manual

---

## 📝 VERSIONADO Y MEJORAS

**Versión actual:** 1.0 (2025-10-21)

**Próximas mejoras planificadas:**
- v1.1: Agregar soporte para proyectos mobile-first
- v1.2: Análisis de performance automático
- v1.3: Generación de estimaciones de costos
- v1.4: Integración con herramientas de PM (Jira, Trello)

**¿Sugerencias?** Documenta mejoras en este archivo.

---

## ⚠️ NOTAS IMPORTANTES

### Limitaciones:
- El análisis es tan bueno como la documentación existente
- Proyectos sin documentación requieren más contexto manual
- No reemplaza el juicio humano, solo asiste en la planificación

### Mejores Prácticas:
- Ejecuta el prompt al inicio de cada fase del proyecto
- Re-ejecuta después de cambios mayores
- Mantén la documentación actualizada
- Adapta las recomendaciones a tu contexto específico

### Privacidad:
- No incluyas información sensible en la documentación
- API keys y secrets deben estar en `.env` (no analizados)
- Datos de clientes deben estar anonimizados

---

## 🎓 RECURSOS ADICIONALES

### Para Aprender Más:
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs)
- [SEO Checklist](https://moz.com/learn/seo/seo-checklists)

### Herramientas Recomendadas:
- **Diseño:** Figma, Pinterest, Dribbble
- **Planning:** Notion, Linear, Jira
- **Performance:** Lighthouse, WebPageTest
- **SEO:** Google Search Console, Ahrefs

---

**¿Preguntas?** Documenta casos de uso interesantes en este archivo para futuras referencias.

---

**Happy Coding!** 🚀
