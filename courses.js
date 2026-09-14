/* Contenido basado en los cinco temarios PDF de Aprende y Avanza. */
window.COURSE_DATA = {
  "brand": "Aprende y Avanza",
  "whatsappUrl": "https://wa.me/525525734814",
  "facebook": "https://www.facebook.com/aprendeconmigo68",
  "common": {
    "price": 300,
    "currency": "MXN",
    "payment": "Pago único por curso completo",
    "paymentMethods": [
      "Transferencia bancaria",
      "Depósito en OXXO",
      "PayPal",
      "Tarjeta de crédito"
    ],
    "durationWeeks": 4,
    "level": "Desde cero",
    "modality": "En línea por Google Meet",
    "included": [
      "Clases en vivo por Google Meet",
      "Grabación de todas las sesiones en Google Drive",
      "Google Classroom para materiales, tareas y avisos académicos",
      "Grupo de WhatsApp para avisos, recordatorios y dudas generales",
      "Material de estudio, archivos de práctica y recursos complementarios",
      "Plantillas y ejemplos reutilizables según el contenido",
      "Ejercicios y actividades prácticas",
      "Proyecto final guiado",
      "Certificado digital de participación al completar el curso"
    ],
    "methodology": [
      "Explicación breve, demostración y práctica guiada en cada sesión",
      "Enlaces de clase, materiales, archivos y tareas en Google Classroom",
      "Grabaciones en Google Drive para repasar",
      "Proyecto final desarrollado por etapas"
    ],
    "registration": "Inscripción y contacto por WhatsApp. Una vez confirmado el pago, se enviará el acceso a Google Classroom, el grupo de WhatsApp y las indicaciones de inicio.",
    "whatsapp": "+52 55 2573 4814",
    "timezone": null
  },
  "courses": [
    {
      "id": "excel-power-bi",
      "title": "Excel + Power BI desde Cero",
      "source": "01_excel_power_bi_temario_final.pdf",
      "sourcePageCount": 5,
      "startDate": "2026-09-26",
      "days": [
        "sábado",
        "domingo"
      ],
      "startTime": "09:00",
      "endTime": "12:00",
      "hours": 24,
      "sessions": 8,
      "sessionHours": 3,
      "description": "Curso práctico para aprender a trabajar con datos desde Excel y llevarlos hasta dashboards interactivos en Power BI. Se inicia con organización de información, fórmulas, funciones, tablas y análisis en Excel; después se trabaja con Power Query, modelado de datos, medidas DAX y visualizaciones en Power BI. El enfoque es aplicado: cada herramienta se usa sobre archivos y casos similares a los que aparecen en áreas administrativas, ventas, finanzas, operaciones y análisis de datos.",
      "objective": "Al finalizar, el alumno podrá organizar y analizar bases de datos en Excel, automatizar cálculos con funciones, construir tablas dinámicas, limpiar información con Power Query, relacionar tablas en Power BI, crear medidas básicas con DAX y desarrollar un dashboard funcional con indicadores, filtros y visualizaciones claras.",
      "requirements": [
        "Computadora o laptop con conexión a internet.",
        "Microsoft Excel. Se recomienda Microsoft 365 o Excel 2021/2024 para aprovechar funciones recientes.",
        "Power BI Desktop instalado en Windows para las sesiones de Power BI.",
        "Cuenta de Google para Google Classroom y Google Drive.",
        "No se requieren conocimientos previos de Excel avanzado ni Power BI."
      ],
      "modules": [
        {
          "title": "Módulo 1: Fundamentos y análisis en Excel",
          "lessons": [
            {
              "title": "Sesión 1. Excel bien estructurado: entorno, datos y referencias",
              "topics": [
                "Recorrido por libros, hojas, filas, columnas, rangos y barra de fórmulas.",
                "Tipos de datos: texto, números, fechas, porcentajes y valores lógicos.",
                "Formato de celdas y criterios para mantener una base limpia y consistente.",
                "Referencias relativas, absolutas y mixtas: A1, $A$1, A$1 y $A1.",
                "Operaciones básicas y orden correcto de las fórmulas.",
                "Buenas prácticas para capturar datos: una fila por registro y una columna por variable.",
                "Conversión de rangos en tablas de Excel y ventajas de trabajar con datos estructurados.",
                "Práctica: preparar una base de ventas lista para análisis."
              ]
            },
            {
              "title": "Sesión 2. Fórmulas y funciones fundamentales",
              "topics": [
                "SUMA, PROMEDIO, MIN, MAX, CONTAR y CONTARA.",
                "REDONDEAR y cálculo de porcentajes, variaciones y participación.",
                "Uso de referencias absolutas para tasas, metas y parámetros.",
                "Funciones de fecha básicas: HOY, AÑO, MES y DÍA.",
                "Funciones de texto útiles: IZQUIERDA, DERECHA, EXTRAE y CONCAT/TEXTJOIN.",
                "Detección de errores comunes en fórmulas y lectura de resultados.",
                "Práctica: construir indicadores de ventas, metas y crecimiento."
              ]
            }
          ]
        },
        {
          "title": "Módulo 2: Funciones para análisis y dashboards en Excel",
          "lessons": [
            {
              "title": "Sesión 3. Lógica, criterios y validación de información",
              "topics": [
                "Función SI y construcción de reglas de clasificación.",
                "Funciones Y y O dentro de condiciones.",
                "SI.ERROR para manejar resultados no válidos.",
                "SUMAR.SI y SUMAR.SI.CONJUNTO.",
                "CONTAR.SI y CONTAR.SI.CONJUNTO.",
                "PROMEDIO.SI y PROMEDIO.SI.CONJUNTO.",
                "Validación de datos mediante listas desplegables.",
                "Formato condicional para identificar metas, alertas, duplicados y valores críticos.",
                "Práctica: semáforo de desempeño por vendedor o sucursal."
              ]
            },
            {
              "title": "Sesión 4. Búsquedas, filtros y análisis dinámico",
              "topics": [
                "BUSCARX para recuperar información entre tablas.",
                "Alternativa con INDICE y COINCIDIR para comprender búsquedas flexibles.",
                "Ordenar, filtrar y quitar duplicados.",
                "Tablas dinámicas: campos, filas, columnas, valores y filtros.",
                "Agrupar fechas por mes, trimestre y año.",
                "Segmentadores y líneas de tiempo.",
                "Gráficos dinámicos y selección del tipo de gráfico adecuado.",
                "Práctica: tablero ejecutivo sencillo en Excel."
              ]
            }
          ]
        },
        {
          "title": "Módulo 3: Power Query y modelo de datos en Power BI",
          "lessons": [
            {
              "title": "Sesión 5. Preparación y limpieza de datos con Power Query",
              "topics": [
                "Qué es Power Query y por qué evita limpieza manual repetitiva.",
                "Importación de archivos Excel y CSV.",
                "Cambio correcto de tipos de datos.",
                "Eliminar columnas, filas vacías, errores y duplicados.",
                "Dividir y combinar columnas.",
                "Reemplazar valores y estandarizar categorías.",
                "Anexar consultas y combinar tablas mediante claves.",
                "Carga de resultados en Excel o en el modelo de Power BI.",
                "Práctica: transformar una base desordenada en una tabla lista para análisis."
              ]
            },
            {
              "title": "Sesión 6. Power BI Desktop y modelado de datos",
              "topics": [
                "Entorno de Power BI Desktop: vistas de informe, datos y modelo.",
                "Importación desde Excel/CSV y conexión con Power Query.",
                "Diferencia entre tabla de hechos y tablas de dimensiones.",
                "Relaciones uno a muchos y dirección de filtros.",
                "Concepto de modelo estrella a nivel introductorio.",
                "Creación de una tabla calendario básica.",
                "Columnas calculadas vs. medidas: cuándo usar cada una.",
                "Práctica: construir un modelo de ventas con productos, clientes y fechas."
              ]
            }
          ]
        },
        {
          "title": "Módulo 4: DAX, visualización y proyecto final",
          "lessons": [
            {
              "title": "Sesión 7. Medidas DAX e indicadores de negocio",
              "topics": [
                "Qué es DAX y cómo se evalúan las medidas.",
                "SUM, COUNT, COUNTA y DISTINCTCOUNT.",
                "DIVIDE para porcentajes y razones seguras.",
                "CALCULATE como base para modificar contexto de filtros.",
                "Indicadores de ventas, utilidad, ticket promedio y cumplimiento de meta.",
                "Formatos de moneda, porcentaje y unidades.",
                "Tarjetas, KPI, tablas y matrices.",
                "Práctica: crear un panel de métricas reutilizables."
              ]
            },
            {
              "title": "Sesión 8. Dashboard final en Power BI",
              "topics": [
                "Gráficos de barras, líneas, áreas, dona, tablas y matrices.",
                "Segmentadores y filtros de página, visual e informe.",
                "Interacciones entre visualizaciones.",
                "Uso de títulos, etiquetas, tooltips y jerarquía visual.",
                "Principios básicos de diseño: consistencia, contraste y lectura rápida.",
                "Construcción guiada del dashboard final.",
                "Revisión de métricas, filtros y comportamiento del modelo.",
                "Presentación del proyecto y recomendaciones para portafolio."
              ]
            }
          ]
        }
      ],
      "project": {
        "title": "Dashboard ejecutivo de análisis",
        "description": "El alumno desarrollará un dashboard a partir de una base de datos de ventas, operaciones, recursos humanos o finanzas. Deberá limpiar la información, modelar las tablas, crear medidas y construir una vista ejecutiva que permita responder preguntas reales.",
        "deliverables": [
          "Base de datos organizada y documentada.",
          "Proceso de limpieza reproducible con Power Query.",
          "Modelo de datos con relaciones correctas.",
          "Al menos 5 indicadores o medidas relevantes.",
          "Filtros o segmentadores para explorar la información.",
          "Visualizaciones coherentes con el objetivo del análisis.",
          "Una página final de dashboard clara y presentable.",
          "Breve explicación de hallazgos y decisiones de diseño."
        ],
        "outcomes": [
          "Trabajar con bases de datos de forma ordenada en Excel.",
          "Construir análisis con fórmulas, criterios y búsquedas.",
          "Crear tablas y gráficos dinámicos.",
          "Limpiar información con Power Query.",
          "Crear modelos y medidas básicas en Power BI.",
          "Diseñar dashboards listos para presentar."
        ]
      },
      "theme": "excel",
      "shortTitle": "Excel + Power BI",
      "category": "datos",
      "categoryLabel": "Análisis de datos",
      "tagline": "Convierte tus datos en decisiones",
      "summary": "Organiza y analiza datos en Excel, limpia información con Power Query y crea un dashboard interactivo en Power BI.",
      "tags": [
        "Excel",
        "Power Query",
        "Power BI"
      ],
      "icon": "chart",
      "pdf": "temarios/excel-power-bi.pdf",
      "audience": "Para quienes quieren analizar información de ventas, finanzas, operaciones o administración desde cero."
    },
    {
      "id": "sql",
      "title": "SQL desde Cero",
      "source": "02_sql_temario_v4.pdf",
      "sourcePageCount": 7,
      "startDate": "2026-09-28",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "startTime": "19:00",
      "endTime": "20:00",
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "description": "Curso orientado a aprender SQL desde cero con un enfoque práctico para consultar, organizar y analizar información almacenada en bases de datos relacionales. Se trabajará con una base de datos de ejemplo que crecerá a lo largo del curso, desde la creación de tablas hasta consultas con agrupaciones, JOIN, subconsultas, CTE y funciones de ventana.",
      "objective": "Al finalizar, el alumno podrá comprender la estructura de una base de datos relacional, crear tablas básicas, insertar y modificar registros, consultar información con SELECT, aplicar filtros, agrupar datos, relacionar múltiples tablas y construir consultas útiles para reportes y análisis.",
      "requirements": [
        "Computadora o laptop con conexión a internet.",
        "Instalación de MySQL Community Server y MySQL Workbench, o acceso a un entorno SQL compatible.",
        "Cuenta de Google para Classroom y Drive.",
        "No se requieren conocimientos previos de bases de datos ni programación."
      ],
      "modules": [
        {
          "title": "Semana 1: Fundamentos, estructura y consultas básicas",
          "lessons": [
            {
              "title": "Día 1. Introducción a bases de datos y SQL",
              "topics": [
                "Qué es una base de datos y qué problema resuelve.",
                "Bases de datos relacionales: tablas, filas, columnas y relaciones.",
                "Qué es SQL y diferencia entre SQL y un gestor de bases de datos.",
                "Ejemplos de uso en empresas, análisis de datos y aplicaciones.",
                "Instalación o preparación del entorno de trabajo.",
                "Recorrido por MySQL Workbench.",
                "Primera consulta SQL y reglas básicas de sintaxis."
              ]
            },
            {
              "title": "Día 2. Crear bases de datos y tablas",
              "topics": [
                "CREATE DATABASE y USE.",
                "CREATE TABLE.",
                "Tipos de datos: INT, DECIMAL, VARCHAR, DATE, DATETIME y BOOLEAN.",
                "Elección de tipos de datos adecuados.",
                "Definición de columnas obligatorias con NOT NULL.",
                "Ejercicio: crear tablas de clientes, productos y ventas."
              ]
            },
            {
              "title": "Día 3. Claves, restricciones y relaciones",
              "topics": [
                "Llave primaria y su función.",
                "AUTO_INCREMENT.",
                "Llaves foráneas y relaciones entre tablas.",
                "UNIQUE, DEFAULT y CHECK a nivel introductorio.",
                "Integridad referencial.",
                "Concepto básico de normalización y por qué evitar datos repetidos.",
                "Práctica: relacionar clientes, pedidos y productos."
              ]
            },
            {
              "title": "Día 4. Insertar, actualizar y eliminar registros",
              "topics": [
                "INSERT INTO para agregar uno o varios registros.",
                "UPDATE con condiciones.",
                "DELETE con condiciones.",
                "Importancia de utilizar WHERE al modificar datos.",
                "NULL y diferencias con cadena vacía o cero.",
                "Práctica de mantenimiento de una tabla."
              ]
            },
            {
              "title": "Día 5. SELECT y construcción de consultas claras",
              "topics": [
                "SELECT * y selección de columnas específicas.",
                "Alias con AS.",
                "Expresiones y columnas calculadas.",
                "DISTINCT para valores únicos.",
                "Buenas prácticas de formato e indentación.",
                "Práctica integradora de la semana."
              ]
            }
          ]
        },
        {
          "title": "Semana 2: Filtros, funciones y agregaciones",
          "lessons": [
            {
              "title": "Día 6. WHERE y operadores de comparación",
              "topics": [
                "Filtrar filas con WHERE.",
                "Operadores =, <>, >, <, >= y <=.",
                "Filtrar fechas y cantidades.",
                "IS NULL e IS NOT NULL.",
                "Construcción de condiciones seguras y legibles.",
                "Ejercicios de búsqueda sobre clientes y ventas."
              ]
            },
            {
              "title": "Día 7. AND, OR, NOT, IN, BETWEEN y LIKE",
              "topics": [
                "Combinar múltiples condiciones.",
                "Uso de paréntesis para controlar prioridad lógica.",
                "IN para listas de valores.",
                "BETWEEN para rangos.",
                "LIKE con comodines % y _.",
                "Ejercicios de filtrado de texto, fechas y categorías."
              ]
            },
            {
              "title": "Día 8. ORDER BY, LIMIT y consultas de ranking básico",
              "topics": [
                "Orden ascendente y descendente.",
                "Orden por varias columnas.",
                "LIMIT para obtener los primeros registros.",
                "Top productos, clientes o ventas.",
                "Combinación de filtros y ordenamiento.",
                "Práctica: consulta de mejores y peores resultados."
              ]
            },
            {
              "title": "Día 9. Funciones de texto, números y fechas",
              "topics": [
                "CONCAT y manipulación sencilla de cadenas.",
                "UPPER, LOWER, LENGTH y TRIM.",
                "ROUND y operaciones numéricas.",
                "YEAR, MONTH, DAY y funciones de fecha básicas.",
                "Construcción de etiquetas y periodos de análisis.",
                "Ejercicios aplicados a nombres, importes y fechas."
              ]
            },
            {
              "title": "Día 10. Funciones de agregación",
              "topics": [
                "COUNT y COUNT DISTINCT.",
                "SUM, AVG, MIN y MAX.",
                "Diferencia entre detalle y resumen.",
                "Cálculo de ventas, promedio, número de clientes y extremos.",
                "Práctica con indicadores básicos de negocio."
              ]
            }
          ]
        },
        {
          "title": "Semana 3: Agrupaciones y relaciones entre tablas",
          "lessons": [
            {
              "title": "Día 11. GROUP BY",
              "topics": [
                "Agrupar resultados por categoría.",
                "Agrupaciones por una o varias columnas.",
                "Indicadores por producto, sucursal, vendedor o periodo.",
                "Errores comunes al mezclar agregaciones y columnas de detalle.",
                "Práctica: resumen mensual de ventas."
              ]
            },
            {
              "title": "Día 12. HAVING y análisis de grupos",
              "topics": [
                "Diferencia entre WHERE y HAVING.",
                "Filtrar resultados agregados.",
                "Detectar categorías con ventas superiores a una meta.",
                "Combinar WHERE, GROUP BY y HAVING.",
                "Práctica integradora de agregaciones."
              ]
            },
            {
              "title": "Día 13. INNER JOIN",
              "topics": [
                "Por qué se necesitan JOIN en bases normalizadas.",
                "INNER JOIN paso a paso.",
                "Uso de alias para tablas.",
                "Relacionar clientes y pedidos.",
                "Relacionar pedidos y productos.",
                "Seleccionar columnas de varias tablas sin ambigüedad."
              ]
            },
            {
              "title": "Día 14. LEFT JOIN, RIGHT JOIN y múltiples tablas",
              "topics": [
                "LEFT JOIN para conservar registros de la tabla principal.",
                "RIGHT JOIN y cuándo puede evitarse reordenando la consulta.",
                "Detectar clientes sin compras o productos sin ventas.",
                "JOIN encadenados entre tres o más tablas.",
                "Práctica con un modelo completo de ventas."
              ]
            },
            {
              "title": "Día 15. CASE WHEN y columnas de clasificación",
              "topics": [
                "Crear categorías a partir de reglas.",
                "Clasificar ventas como baja, media o alta.",
                "Etiquetas de cumplimiento de metas.",
                "CASE dentro de consultas agregadas.",
                "Práctica: segmentación de clientes y productos."
              ]
            }
          ]
        },
        {
          "title": "Semana 4: Consultas intermedias y proyecto",
          "lessons": [
            {
              "title": "Día 16. Subconsultas",
              "topics": [
                "Qué es una subconsulta.",
                "Subconsultas en WHERE.",
                "Subconsultas escalares en SELECT.",
                "Comparar resultados contra promedios o máximos.",
                "Cuándo una subconsulta es útil y cuándo un JOIN puede ser más claro.",
                "Ejercicios guiados."
              ]
            },
            {
              "title": "Día 17. CTE con WITH",
              "topics": [
                "Qué es una Common Table Expression.",
                "Separar una consulta compleja en pasos legibles.",
                "Reutilizar resultados temporales dentro de una consulta.",
                "CTE para cálculos por cliente o producto.",
                "Práctica: reporte de ventas por etapas."
              ]
            },
            {
              "title": "Día 18. Vistas e índices: introducción práctica",
              "topics": [
                "CREATE VIEW para guardar consultas reutilizables.",
                "Consultar y actualizar una vista de lectura.",
                "Qué es un índice y qué problema intenta resolver.",
                "PRIMARY KEY e índices comunes.",
                "Buenas prácticas: no indexar sin criterio.",
                "Ejemplo de vista para un reporte recurrente."
              ]
            },
            {
              "title": "Día 19. Funciones de ventana para análisis",
              "topics": [
                "Concepto de OVER y particiones.",
                "ROW_NUMBER, RANK y DENSE_RANK.",
                "Ranking de productos por ventas.",
                "Ranking dentro de cada categoría o sucursal.",
                "Introducción a LAG para comparar periodos consecutivos.",
                "Práctica de consultas analíticas."
              ]
            },
            {
              "title": "Día 20. Proyecto final y cierre",
              "topics": [
                "Integración de filtros, agregaciones, JOIN y funciones analíticas.",
                "Resolución guiada de preguntas de negocio.",
                "Revisión de legibilidad y buenas prácticas de las consultas.",
                "Entrega del script SQL final.",
                "Explicación de resultados.",
                "Recomendaciones para incluir el proyecto en un portafolio."
              ]
            }
          ]
        }
      ],
      "project": {
        "title": "Base de datos y reporte de ventas con SQL",
        "description": "El alumno trabajará con una pequeña base de datos relacional de clientes, productos y ventas y construirá consultas capaces de responder preguntas de negocio.",
        "deliverables": [
          "Script de creación o carga de la base de datos.",
          "Consultas de filtrado y búsqueda.",
          "Consultas con agregaciones y GROUP BY.",
          "Al menos dos consultas con JOIN.",
          "Una consulta con CASE.",
          "Una CTE o subconsulta.",
          "Una consulta con función de ventana.",
          "Comentarios o explicación breve de los resultados obtenidos."
        ],
        "outcomes": [
          "Comprender tablas, claves y relaciones.",
          "Escribir consultas SELECT claras y seguras.",
          "Filtrar, ordenar y resumir información.",
          "Combinar datos de múltiples tablas.",
          "Construir consultas para análisis y reportes.",
          "Tener un proyecto SQL listo para mostrar."
        ]
      },
      "theme": "sql",
      "shortTitle": "SQL",
      "category": "datos",
      "categoryLabel": "Análisis de datos",
      "tagline": "Haz las preguntas correctas a tus datos",
      "summary": "Aprende a consultar, filtrar y relacionar bases de datos para construir reportes y responder preguntas de negocio con SQL.",
      "tags": [
        "Consultas SQL",
        "JOIN",
        "Bases de datos"
      ],
      "icon": "db",
      "pdf": "temarios/sql.pdf",
      "audience": "Para quienes quieren aprender a consultar y analizar bases de datos sin experiencia previa en programación."
    },
    {
      "id": "git-github",
      "title": "Git y GitHub desde Cero",
      "source": "03_git_github_temario_v4.pdf",
      "sourcePageCount": 7,
      "startDate": "2026-09-28",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "startTime": "17:00",
      "endTime": "18:00",
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "description": "Curso práctico para aprender a controlar versiones de proyectos con Git y utilizar GitHub para almacenar repositorios, colaborar y construir un portafolio. Se inicia desde la terminal y los conceptos de commit, historial y ramas; después se trabaja con repositorios remotos, conflictos, pull requests, Issues, README y publicación de proyectos.",
      "objective": "Al finalizar, el alumno podrá crear y administrar repositorios Git, registrar cambios mediante commits, trabajar con ramas, recuperar versiones, sincronizar proyectos con GitHub, resolver conflictos básicos y participar en un flujo colaborativo mediante forks y pull requests.",
      "requirements": [
        "Computadora o laptop con conexión a internet.",
        "Cuenta gratuita de GitHub.",
        "Git instalado en el equipo.",
        "Visual Studio Code recomendado para las prácticas.",
        "No se requiere experiencia previa con Git, GitHub o terminal."
      ],
      "modules": [
        {
          "title": "Semana 1: Fundamentos de Git y control de versiones",
          "lessons": [
            {
              "title": "Día 1. Qué es Git, GitHub y el control de versiones",
              "topics": [
                "Problemas de trabajar con archivos proyecto_final_v2_ahora_si.",
                "Qué es un sistema de control de versiones.",
                "Diferencia entre Git y GitHub.",
                "Repositorio local y repositorio remoto.",
                "Conceptos de snapshot, commit e historial.",
                "Casos de uso en programación, datos, documentación y trabajo en equipo.",
                "Preparación del entorno del curso."
              ]
            },
            {
              "title": "Día 2. Instalación, configuración y terminal básica",
              "topics": [
                "Instalación de Git.",
                "git –version.",
                "Configuración de user.name y user.email.",
                "Conceptos básicos de ruta, carpeta y archivo.",
                "Comandos de terminal necesarios: cd, pwd/dir, ls, mkdir.",
                "Abrir una carpeta de proyecto en Visual Studio Code.",
                "Crear el primer repositorio de práctica."
              ]
            },
            {
              "title": "Día 3. init, status, add y commit",
              "topics": [
                "git init.",
                "Estados de un archivo: untracked, modified y staged.",
                "git status.",
                "git add por archivo y por conjunto.",
                "git commit -m.",
                "Cómo escribir mensajes de commit útiles.",
                "Práctica: registrar la evolución de un proyecto pequeño."
              ]
            },
            {
              "title": "Día 4. Historial, diferencias y seguimiento",
              "topics": [
                "git log y versiones abreviadas.",
                "git log –oneline.",
                "git diff.",
                "git show.",
                "Interpretar qué cambió entre versiones.",
                "Importancia de commits pequeños y coherentes.",
                "Práctica: revisar y documentar cambios."
              ]
            },
            {
              "title": "Día 5. Deshacer cambios de forma segura",
              "topics": [
                "git restore para cambios no confirmados.",
                "Quitar archivos del staging area.",
                "git revert para revertir un commit sin borrar historial.",
                "Introducción a git reset y sus riesgos.",
                "Diferencia entre recuperar un archivo y reescribir historial.",
                "Práctica guiada de recuperación."
              ]
            }
          ]
        },
        {
          "title": "Semana 2: Organización, ramas y fusiones",
          "lessons": [
            {
              "title": "Día 6. .gitignore y estructura profesional de repositorios",
              "topics": [
                "Qué archivos no deberían versionarse.",
                "Creación de .gitignore.",
                "Ignorar carpetas temporales, entornos y archivos sensibles.",
                "Organización básica de carpetas.",
                "README, src, data, docs y assets como ejemplos de estructura.",
                "Práctica: limpiar un repositorio antes de publicarlo."
              ]
            },
            {
              "title": "Día 7. Ramas con branch y switch",
              "topics": [
                "Qué es una rama y para qué sirve.",
                "Rama principal y ramas de trabajo.",
                "git branch.",
                "git switch y creación de ramas.",
                "Desarrollar una característica sin afectar main.",
                "Práctica con dos líneas de desarrollo."
              ]
            },
            {
              "title": "Día 8. Merge y combinación de trabajo",
              "topics": [
                "Concepto de merge.",
                "Fast-forward y merge commit a nivel conceptual.",
                "git merge.",
                "Verificar el historial después de una fusión.",
                "Eliminar ramas ya integradas.",
                "Práctica: integrar una característica terminada."
              ]
            },
            {
              "title": "Día 9. Conflictos de merge",
              "topics": [
                "Por qué aparecen conflictos.",
                "Identificar marcadores de conflicto.",
                "Elegir, combinar y editar cambios.",
                "Marcar un conflicto como resuelto.",
                "Finalizar el merge.",
                "Buenas prácticas para reducir conflictos en equipos.",
                "Práctica guiada con un conflicto controlado."
              ]
            },
            {
              "title": "Día 10. Repaso integrador de Git local",
              "topics": [
                "Flujo completo: editar, status, add, commit.",
                "Creación y fusión de ramas.",
                "Recuperación de cambios.",
                "Lectura del historial.",
                "Organización del repositorio.",
                "Mini proyecto local versionado."
              ]
            }
          ]
        },
        {
          "title": "Semana 3: GitHub y colaboración",
          "lessons": [
            {
              "title": "Día 11. Repositorios remotos y conexión con GitHub",
              "topics": [
                "Crear un repositorio en GitHub.",
                "Concepto de origin.",
                "git remote -v.",
                "Conectar un repositorio local con uno remoto.",
                "Primer push.",
                "Visibilidad pública y privada.",
                "Revisión del historial desde GitHub."
              ]
            },
            {
              "title": "Día 12. clone, push, pull y fetch",
              "topics": [
                "git clone.",
                "git push.",
                "git pull.",
                "git fetch y diferencia con pull.",
                "Sincronizar cambios entre equipos.",
                "Errores comunes al subir o bajar cambios.",
                "Práctica en dos copias de un repositorio."
              ]
            },
            {
              "title": "Día 13. Autenticación y seguridad básica",
              "topics": [
                "Por qué GitHub ya no utiliza contraseña de cuenta para Git por HTTPS.",
                "Concepto de token de acceso personal.",
                "Introducción a claves SSH.",
                "Buenas prácticas para no publicar credenciales.",
                "Archivos .env y uso de .gitignore.",
                "Revisión de seguridad antes de hacer push."
              ]
            },
            {
              "title": "Día 14. README y Markdown",
              "topics": [
                "Objetivo de un buen README.",
                "Títulos, párrafos, listas y enlaces en Markdown.",
                "Bloques de código.",
                "Imágenes y capturas.",
                "Secciones recomendadas: descripción, instalación, uso y autor.",
                "Práctica: documentar el proyecto del curso."
              ]
            },
            {
              "title": "Día 15. Issues y organización del trabajo",
              "topics": [
                "Qué es un Issue.",
                "Crear tareas, errores y mejoras.",
                "Etiquetas y responsables.",
                "Milestones a nivel introductorio.",
                "Vincular commits y pull requests con Issues.",
                "Uso sencillo de Projects para visualizar pendientes."
              ]
            }
          ]
        },
        {
          "title": "Semana 4: Flujo colaborativo y portafolio",
          "lessons": [
            {
              "title": "Día 16. Forks y contribuciones",
              "topics": [
                "Qué es un fork.",
                "Clonar un fork.",
                "Hacer cambios sin permisos directos en el repositorio original.",
                "Mantener referencia al repositorio principal.",
                "Flujo básico de contribución abierta.",
                "Práctica de fork y cambio independiente."
              ]
            },
            {
              "title": "Día 17. Pull Requests y revisión de código",
              "topics": [
                "Qué es un Pull Request.",
                "Abrir un PR desde una rama.",
                "Descripción clara de los cambios.",
                "Comentarios y revisión.",
                "Solicitar cambios o aprobar.",
                "Merge desde GitHub y eliminación de ramas.",
                "Práctica colaborativa por parejas o equipos."
              ]
            },
            {
              "title": "Día 18. Tags, versiones y Releases",
              "topics": [
                "Qué es una etiqueta o tag.",
                "Versionado semántico a nivel introductorio.",
                "Crear tags locales y subirlos.",
                "GitHub Releases.",
                "Adjuntar notas y entregables.",
                "Cuándo conviene marcar una versión estable."
              ]
            },
            {
              "title": "Día 19. Perfil, portafolio y GitHub Pages",
              "topics": [
                "Configurar un perfil profesional en GitHub.",
                "Repositorios fijados y selección de proyectos.",
                "README de perfil.",
                "Buenas prácticas visuales y de documentación.",
                "Introducción a GitHub Pages para publicar un sitio estático.",
                "Preparar un repositorio para mostrarlo a reclutadores o clientes."
              ]
            },
            {
              "title": "Día 20. Proyecto final colaborativo y cierre",
              "topics": [
                "Creación del repositorio final.",
                "Trabajo mediante ramas.",
                "Commits y documentación.",
                "Issue de seguimiento.",
                "Pull Request y revisión.",
                "Merge final y Release.",
                "Revisión del repositorio como pieza de portafolio."
              ]
            }
          ]
        }
      ],
      "project": {
        "title": "Repositorio profesional con flujo colaborativo",
        "description": "El alumno publicará un proyecto pequeño en GitHub y aplicará un flujo completo de control de versiones y colaboración.",
        "deliverables": [
          "Repositorio con estructura clara.",
          "Historial de commits descriptivos.",
          "Uso de al menos una rama de trabajo.",
          "Archivo .gitignore cuando sea necesario.",
          "README completo en Markdown.",
          "Issue para organizar una mejora o tarea.",
          "Pull Request con revisión y merge.",
          "Tag o Release final y repositorio listo para portafolio."
        ],
        "outcomes": [
          "Controlar versiones sin duplicar archivos manualmente.",
          "Trabajar con ramas y merges.",
          "Recuperar cambios y revisar historial.",
          "Sincronizar proyectos con GitHub.",
          "Colaborar con Issues, forks y Pull Requests.",
          "Construir un perfil y repositorio profesional."
        ]
      },
      "theme": "git",
      "shortTitle": "Git y GitHub",
      "category": "desarrollo",
      "categoryLabel": "Desarrollo y colaboración",
      "tagline": "Organiza, colabora y comparte tus proyectos",
      "summary": "Controla versiones, trabaja con ramas y colabora en GitHub para construir un repositorio profesional listo para tu portafolio.",
      "tags": [
        "Git",
        "GitHub",
        "Pull Requests"
      ],
      "icon": "git",
      "pdf": "temarios/git-github.pdf",
      "audience": "Para quienes quieren organizar sus proyectos, colaborar y construir un portafolio sin experiencia previa con Git."
    },
    {
      "id": "latex",
      "title": "LaTeX desde Cero",
      "source": "04_latex_temario_v4.pdf",
      "sourcePageCount": 7,
      "startDate": "2026-09-28",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "startTime": "18:00",
      "endTime": "19:00",
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "description": "Curso para aprender LaTeX desde cero y producir documentos académicos con apariencia profesional. Se utilizará Overleaf para trabajar sin configuraciones complicadas y se cubrirán estructura del documento, formato, ecuaciones, tablas, imágenes, referencias cruzadas, bibliografía y una introducción a presentaciones con Beamer.",
      "objective": "Al finalizar, el alumno será capaz de crear y organizar documentos en LaTeX, escribir expresiones matemáticas, insertar figuras y tablas, generar referencias y bibliografía, trabajar con documentos largos y preparar un reporte, artículo o proyecto académico con formato consistente.",
      "requirements": [
        "Computadora o laptop con conexión a internet.",
        "Cuenta gratuita de Overleaf.",
        "Cuenta de Google para Classroom y Drive.",
        "No se requieren conocimientos previos de LaTeX ni programación."
      ],
      "modules": [
        {
          "title": "Semana 1: Estructura y formato de documentos",
          "lessons": [
            {
              "title": "Día 1. Introducción a LaTeX y Overleaf",
              "topics": [
                "Qué es LaTeX y diferencias frente a un procesador de texto tradicional.",
                "Casos de uso: tareas, reportes, tesis, artículos y documentos científicos.",
                "Crear una cuenta y proyecto en Overleaf.",
                "Estructura mínima: documentclass, begin{document} y end{document}.",
                "Compilar, revisar errores y descargar PDF.",
                "Primer documento del curso."
              ]
            },
            {
              "title": "Día 2. Clases de documento, preámbulo y paquetes",
              "topics": [
                "article, report y book.",
                "Qué es el preámbulo.",
                "Uso de paquetes con usepackage.",
                "Idioma y codificación moderna.",
                "Márgenes con geometry.",
                "Tamaño de papel y organización del archivo.",
                "Práctica: plantilla base reutilizable."
              ]
            },
            {
              "title": "Día 3. Texto, énfasis y listas",
              "topics": [
                "Párrafos y saltos.",
                "Negritas, cursivas, subrayado y texto monoespaciado.",
                "Tamaños de fuente a nivel práctico.",
                "Listas itemize y enumerate.",
                "Listas anidadas.",
                "Caracteres especiales: %, $, &, #, _, { y }.",
                "Práctica de formato académico limpio."
              ]
            },
            {
              "title": "Día 4. Secciones, índices y organización",
              "topics": [
                "section, subsection y subsubsection.",
                "Jerarquía lógica de un documento.",
                "tableofcontents.",
                "Saltos de página.",
                "Portada con title, author y date.",
                "Numeración automática.",
                "Práctica: estructura de un reporte completo."
              ]
            },
            {
              "title": "Día 5. Cajas, notas y diseño sobrio",
              "topics": [
                "Uso básico de color con xcolor.",
                "Cajas sencillas con tcolorbox.",
                "Reglas y separadores.",
                "Buenas prácticas para no sobrecargar un documento académico.",
                "Creación de bloques de definición, ejemplo o nota.",
                "Mini proyecto de la semana: guía académica de dos páginas."
              ]
            }
          ]
        },
        {
          "title": "Semana 2: Matemáticas en LaTeX",
          "lessons": [
            {
              "title": "Día 6. Matemáticas en línea y ecuaciones",
              "topics": [
                "Modo matemático en línea.",
                "Ecuaciones centradas.",
                "Superíndices y subíndices.",
                "Fracciones y raíces.",
                "Símbolos griegos.",
                "Operadores matemáticos comunes.",
                "Práctica con fórmulas de física, ingeniería y matemáticas."
              ]
            },
            {
              "title": "Día 7. Ecuaciones alineadas y sistemas",
              "topics": [
                "Paquete amsmath.",
                "Entorno equation.",
                "align y align*.",
                "Alineación por el signo igual.",
                "Sistemas de ecuaciones con cases.",
                "Numeración y referencias de ecuaciones.",
                "Práctica con desarrollos paso a paso."
              ]
            },
            {
              "title": "Día 8. Integrales, sumas, límites y notación científica",
              "topics": [
                "Integrales definidas e indefinidas.",
                "Sumatorias y productorias.",
                "Límites.",
                "Derivadas y derivadas parciales.",
                "Vectores y notación en negritas.",
                "Funciones trigonométricas y logaritmos.",
                "Práctica de notación científica completa."
              ]
            },
            {
              "title": "Día 9. Matrices y arreglos",
              "topics": [
                "matrix, pmatrix, bmatrix y vmatrix.",
                "Determinantes.",
                "Vectores columna y matrices por bloques.",
                "Arreglos simples dentro de matemáticas.",
                "Matrices con puntos suspensivos.",
                "Práctica aplicada a álgebra lineal."
              ]
            },
            {
              "title": "Día 10. Teoremas, definiciones y demostraciones",
              "topics": [
                "Uso básico de amsthm.",
                "Crear entornos theorem, definition y example.",
                "Entorno proof.",
                "Numeración automática.",
                "Estilo consistente para documentos matemáticos.",
                "Práctica integradora de la semana."
              ]
            }
          ]
        },
        {
          "title": "Semana 3: Figuras, tablas, referencias y bibliografía",
          "lessons": [
            {
              "title": "Día 11. Imágenes y figuras",
              "topics": [
                "Paquete graphicx.",
                "includegraphics y control de tamaño.",
                "Entorno figure.",
                "Caption y label.",
                "Posición de figuras y concepto de objetos flotantes.",
                "Buenas prácticas para resolución y nombres de archivo.",
                "Práctica con imágenes y gráficas."
              ]
            },
            {
              "title": "Día 12. Tablas básicas",
              "topics": [
                "Entorno tabular.",
                "Columnas l, c y r.",
                "Bordes y separación de columnas.",
                "Encabezados y alineación.",
                "Uso de booktabs para tablas más limpias.",
                "Tabla dentro de entorno table con caption.",
                "Práctica: tabla de resultados."
              ]
            },
            {
              "title": "Día 13. Tablas más completas",
              "topics": [
                "Columnas de ancho fijo con p{}.",
                "multicolumn.",
                "Filas con contenido largo.",
                "Ajustar tablas anchas.",
                "Tablas de comparación.",
                "Buenas prácticas: evitar exceso de líneas.",
                "Práctica con una tabla académica real."
              ]
            },
            {
              "title": "Día 14. Referencias cruzadas",
              "topics": [
                "label y ref.",
                "Referenciar secciones, figuras, tablas y ecuaciones.",
                "Por qué no conviene escribir números manualmente.",
                "hyperref para enlaces internos.",
                "Uso de autoref o referencias descriptivas a nivel introductorio.",
                "Práctica: documento con navegación interna."
              ]
            },
            {
              "title": "Día 15. Bibliografía y citas",
              "topics": [
                "Qué es un archivo .bib.",
                "Entradas article, book y misc.",
                "Claves de citación.",
                "Uso de biblatex/biber o flujo equivalente en Overleaf.",
                "Citas en el texto y bibliografía automática.",
                "Estilos bibliográficos comunes.",
                "Práctica: agregar y citar varias fuentes."
              ]
            }
          ]
        },
        {
          "title": "Semana 4: Documentos largos, plantillas y proyecto",
          "lessons": [
            {
              "title": "Día 16. Encabezados, pies y numeración",
              "topics": [
                "fancyhdr para encabezados y pies.",
                "Numeración de páginas.",
                "Estilo consistente en reportes largos.",
                "Uso moderado de color institucional.",
                "Práctica sobre la plantilla del proyecto final."
              ]
            },
            {
              "title": "Día 17. Comandos personalizados y reutilización",
              "topics": [
                "newcommand para abreviar expresiones repetidas.",
                "Comandos con argumentos simples.",
                "Definir colores y estilos propios.",
                "Evitar repetición de formato.",
                "Separar contenido y presentación.",
                "Práctica: crear una mini plantilla personal."
              ]
            },
            {
              "title": "Día 18. Proyectos largos y múltiples archivos",
              "topics": [
                "Separar capítulos o secciones en varios .tex.",
                "input e include.",
                "Carpetas para figuras y bibliografía.",
                "Estructura recomendada para tesis o reportes extensos.",
                "Trabajo colaborativo y versiones en Overleaf.",
                "Práctica: dividir el proyecto final en archivos."
              ]
            },
            {
              "title": "Día 19. Introducción a Beamer",
              "topics": [
                "Qué es Beamer.",
                "Frames y estructura de una presentación.",
                "Títulos, listas, bloques e imágenes.",
                "Ecuaciones dentro de diapositivas.",
                "Temas y colores con moderación.",
                "Mini presentación de 3 a 5 diapositivas."
              ]
            },
            {
              "title": "Día 20. Proyecto final y cierre",
              "topics": [
                "Revisión del documento final.",
                "Corrección de errores frecuentes de compilación.",
                "Consistencia de títulos, figuras, tablas y bibliografía.",
                "Verificación de referencias cruzadas.",
                "Exportación del PDF final.",
                "Recomendaciones para adaptar la plantilla a tesis, artículos o reportes."
              ]
            }
          ]
        }
      ],
      "project": {
        "title": "Reporte académico profesional en LaTeX",
        "description": "El alumno elaborará un documento académico completo que combine estructura, matemáticas, figuras, tablas, referencias y bibliografía.",
        "deliverables": [
          "Portada y tabla de contenido.",
          "Secciones y subsecciones correctamente organizadas.",
          "Al menos tres expresiones o ecuaciones matemáticas.",
          "Una figura con caption y referencia cruzada.",
          "Una tabla con formato limpio.",
          "Bibliografía automática con varias fuentes.",
          "Encabezado o pie de página coherente.",
          "PDF final y archivos fuente organizados."
        ],
        "outcomes": [
          "Crear documentos desde cero en Overleaf.",
          "Escribir matemáticas con buena presentación.",
          "Insertar figuras y tablas de forma correcta.",
          "Automatizar numeración y referencias.",
          "Gestionar citas y bibliografía.",
          "Construir una plantilla académica reutilizable."
        ]
      },
      "theme": "latex",
      "shortTitle": "LaTeX",
      "category": "academico",
      "categoryLabel": "Herramientas académicas",
      "tagline": "Dale a tus ideas una presentación profesional",
      "summary": "Crea documentos académicos en Overleaf con ecuaciones, figuras, tablas y bibliografía para presentar tus ideas con claridad.",
      "tags": [
        "Overleaf",
        "Escritura académica",
        "Bibliografía"
      ],
      "icon": "file",
      "pdf": "temarios/latex.pdf",
      "audience": "Para quienes necesitan preparar reportes, artículos o proyectos académicos con una presentación consistente."
    },
    {
      "id": "r",
      "title": "R desde Cero para Análisis de Datos",
      "source": "05_r_analisis_datos_temario_v4.pdf",
      "sourcePageCount": 7,
      "startDate": "2026-09-28",
      "days": [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes"
      ],
      "startTime": "16:00",
      "endTime": "17:00",
      "hours": 20,
      "sessions": 20,
      "sessionHours": 1,
      "description": "Curso práctico para aprender R desde cero y utilizarlo en tareas de análisis de datos. Se trabaja con RStudio, estructuras de datos, funciones, importación de archivos, limpieza con tidyverse, transformación con dplyr, visualización con ggplot2, estadística descriptiva y análisis exploratorio sobre bases reales o simuladas.",
      "objective": "Al finalizar, el alumno podrá importar, limpiar, transformar, resumir y visualizar datos en R, realizar análisis estadístico descriptivo, crear gráficas con ggplot2 y desarrollar un pequeño proyecto reproducible con código organizado y conclusiones basadas en datos.",
      "requirements": [
        "Computadora o laptop con conexión a internet.",
        "R y RStudio Desktop instalados.",
        "Cuenta de Google para Classroom y Drive.",
        "No se requieren conocimientos previos de R ni programación."
      ],
      "modules": [
        {
          "title": "Semana 1: Fundamentos de R y estructuras de datos",
          "lessons": [
            {
              "title": "Día 1. Introducción a R y RStudio",
              "topics": [
                "Qué es R y en qué áreas se utiliza.",
                "Diferencia entre R y RStudio.",
                "Instalación y recorrido por consola, script, Environment, Files y Plots.",
                "Crear y guardar un script .R.",
                "Ejecutar líneas y bloques de código.",
                "Uso básico de ayuda con ? y help().",
                "Primeras operaciones en R."
              ]
            },
            {
              "title": "Día 2. Objetos, tipos de datos y operadores",
              "topics": [
                "Asignación con <- y =.",
                "Tipos numeric, integer, character y logical.",
                "class y typeof.",
                "Operadores aritméticos.",
                "Operadores de comparación y lógicos.",
                "Conversión de tipos.",
                "Ejercicios básicos con variables."
              ]
            },
            {
              "title": "Día 3. Vectores e indexación",
              "topics": [
                "Crear vectores con c().",
                "Secuencias sencillas.",
                "Operaciones vectorizadas.",
                "Longitud, suma, media, mínimo y máximo.",
                "Indexación por posición.",
                "Filtros con condiciones lógicas.",
                "Valores NA y detección con is.na().",
                "Práctica con series numéricas y categorías."
              ]
            },
            {
              "title": "Día 4. Matrices, listas, factores y data frames",
              "topics": [
                "Concepto de matriz.",
                "Listas y almacenamiento de objetos distintos.",
                "Factores y variables categóricas.",
                "Data frames como estructura principal para análisis.",
                "Crear data.frame manualmente.",
                "Consultar filas y columnas.",
                "Nombres de variables y buenas prácticas."
              ]
            },
            {
              "title": "Día 5. Condicionales, ciclos y funciones",
              "topics": [
                "if, else y condiciones.",
                "for y while a nivel introductorio.",
                "Cuándo conviene evitar ciclos y usar operaciones vectorizadas.",
                "Crear funciones con function().",
                "Argumentos y return.",
                "Mini práctica para automatizar cálculos repetitivos.",
                "Repaso integrador de la semana."
              ]
            }
          ]
        },
        {
          "title": "Semana 2: Importación, limpieza y transformación",
          "lessons": [
            {
              "title": "Día 6. Paquetes y ecosistema tidyverse",
              "topics": [
                "Qué es un paquete.",
                "install.packages y library.",
                "Qué incluye tidyverse.",
                "Pipe |> y concepto de flujo de transformación.",
                "Uso de dplyr, tidyr, readr y ggplot2.",
                "Buenas prácticas para cargar paquetes al inicio del script."
              ]
            },
            {
              "title": "Día 7. Importar CSV y Excel",
              "topics": [
                "read.csv y readr::read_csv.",
                "Importación de Excel con readxl.",
                "Rutas de archivos y proyecto de RStudio.",
                "Revisión inicial con head, str y summary.",
                "Problemas comunes de tipos de datos al importar.",
                "Práctica con una base externa."
              ]
            },
            {
              "title": "Día 8. Limpieza de datos",
              "topics": [
                "Detectar valores faltantes.",
                "na.omit y estrategias básicas de tratamiento.",
                "Duplicados.",
                "Renombrar columnas con rename.",
                "Estandarizar categorías.",
                "Conversión de tipos.",
                "Buenas prácticas antes del análisis."
              ]
            },
            {
              "title": "Día 9. select, filter y arrange",
              "topics": [
                "Seleccionar columnas con select.",
                "Eliminar columnas no necesarias.",
                "Filtrar filas con filter.",
                "Combinar condiciones.",
                "Ordenar con arrange.",
                "Uso de desc.",
                "Práctica de exploración de subconjuntos."
              ]
            },
            {
              "title": "Día 10. mutate y variables derivadas",
              "topics": [
                "Crear nuevas columnas con mutate.",
                "Cálculos con variables existentes.",
                "if_else y case_when para clasificar.",
                "Porcentajes y razones.",
                "Transformaciones de texto sencillas.",
                "Práctica: preparar indicadores para análisis."
              ]
            }
          ]
        },
        {
          "title": "Semana 3: Resumen, relaciones y visualización",
          "lessons": [
            {
              "title": "Día 11. group_by y summarise",
              "topics": [
                "Agrupar información por una o varias variables.",
                "summarise con n, mean, sum, min y max.",
                "na.rm = TRUE.",
                "Indicadores por categoría o periodo.",
                "Ordenar resúmenes.",
                "Práctica: tabla de indicadores de negocio."
              ]
            },
            {
              "title": "Día 12. Joins y combinación de tablas",
              "topics": [
                "Concepto de clave.",
                "left_join, inner_join y full_join.",
                "Evitar columnas duplicadas innecesarias.",
                "Detectar registros sin coincidencia.",
                "Práctica: unir ventas con catálogo de productos y clientes."
              ]
            },
            {
              "title": "Día 13. Datos largos y anchos con tidyr",
              "topics": [
                "Diferencia entre formato wide y long.",
                "pivot_longer.",
                "pivot_wider.",
                "Cuándo ggplot2 funciona mejor con datos largos.",
                "Práctica: transformar una tabla mensual para análisis."
              ]
            },
            {
              "title": "Día 14. Estadística descriptiva en R",
              "topics": [
                "Media, mediana, cuantiles y rango.",
                "Varianza y desviación estándar.",
                "Tablas de frecuencias.",
                "summary y funciones descriptivas.",
                "Interpretación de medidas de tendencia y dispersión.",
                "Práctica con variables numéricas y categóricas."
              ]
            },
            {
              "title": "Día 15. Introducción a ggplot2",
              "topics": [
                "Gramática de gráficos: datos, aes y geom.",
                "Gráfico de dispersión con geom_point.",
                "Gráfico de barras con geom_bar/geom_col.",
                "Títulos y etiquetas con labs.",
                "Temas básicos.",
                "Práctica: construir gráficos desde un data frame."
              ]
            }
          ]
        },
        {
          "title": "Semana 4: Visualización, análisis exploratorio y proyecto",
          "lessons": [
            {
              "title": "Día 16. Gráficas para distribuciones y comparación",
              "topics": [
                "Histogramas.",
                "Boxplots.",
                "Gráficas de líneas.",
                "Color y grupos dentro de aes.",
                "Facetas con facet_wrap.",
                "Elegir una visualización según el tipo de variable.",
                "Práctica con varias preguntas de análisis."
              ]
            },
            {
              "title": "Día 17. Correlación y relaciones entre variables",
              "topics": [
                "Concepto de correlación.",
                "cor y matriz de correlación básica.",
                "Scatter plots para relaciones numéricas.",
                "Añadir línea de tendencia con geom_smooth.",
                "Diferencia entre correlación y causalidad.",
                "Práctica de interpretación."
              ]
            },
            {
              "title": "Día 18. Fechas y texto con lubridate y stringr",
              "topics": [
                "Convertir y extraer componentes de fechas.",
                "year, month y day.",
                "Agrupar por periodo.",
                "str_detect, str_replace y str_to_lower.",
                "Limpieza de categorías de texto.",
                "Práctica con registros que contienen fechas y cadenas."
              ]
            },
            {
              "title": "Día 19. Análisis exploratorio y regresión lineal introductoria",
              "topics": [
                "Flujo de un análisis exploratorio de datos.",
                "Plantear preguntas antes de graficar.",
                "Comparar grupos y revisar distribuciones.",
                "Modelo lineal simple con lm a nivel introductorio.",
                "Interpretar pendiente y ajuste sin profundizar en inferencia.",
                "Preparación del proyecto final."
              ]
            },
            {
              "title": "Día 20. Proyecto final y cierre",
              "topics": [
                "Importación del conjunto de datos.",
                "Limpieza y transformación.",
                "Resumen estadístico.",
                "Creación de visualizaciones.",
                "Identificación de hallazgos.",
                "Organización del script.",
                "Presentación del análisis y recomendaciones para portafolio."
              ]
            }
          ]
        }
      ],
      "project": {
        "title": "Análisis exploratorio de datos con R",
        "description": "El alumno elegirá o recibirá un conjunto de datos y desarrollará un análisis reproducible desde la importación hasta la visualización y conclusiones.",
        "deliverables": [
          "Script .R organizado y ejecutable.",
          "Importación y revisión inicial de datos.",
          "Limpieza y tratamiento básico de datos faltantes.",
          "Transformaciones con dplyr.",
          "Al menos una tabla resumen por grupos.",
          "Mínimo tres visualizaciones con ggplot2.",
          "Interpretación de hallazgos principales.",
          "Presentación breve del proyecto para portafolio."
        ],
        "outcomes": [
          "Trabajar con RStudio y scripts reproducibles.",
          "Importar y limpiar archivos reales.",
          "Transformar datos con dplyr y tidyr.",
          "Realizar estadística descriptiva.",
          "Construir gráficas claras con ggplot2.",
          "Entregar un análisis completo para portafolio."
        ]
      },
      "theme": "r",
      "shortTitle": "R para análisis de datos",
      "category": "datos",
      "categoryLabel": "Análisis de datos",
      "tagline": "Encuentra historias detrás de los datos",
      "summary": "Importa, limpia y transforma datos en R, crea gráficas con ggplot2 y desarrolla un análisis reproducible para tu portafolio.",
      "tags": [
        "RStudio",
        "tidyverse",
        "ggplot2"
      ],
      "icon": "code",
      "pdf": "temarios/r.pdf",
      "audience": "Para quienes quieren empezar a programar en R y aprender análisis, estadística descriptiva y visualización de datos."
    }
  ]
};
