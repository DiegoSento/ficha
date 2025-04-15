// Definición de grupos de equipos
const equipmentGroups = [
  { id: "all", name: "Todos los Equipos", icon: "fa-th-large" },
  { id: "sensors", name: "Sensores", icon: "fa-microchip" },
  { id: "control", name: "Interfaces Digitales", icon: "fa-sliders-h" },
  { id: "communication", name: "Comunicación y Conectividad", icon: "fa-network-wired" },
  { id: "environmental", name: "Monitoreo de Flujos", icon: "fa-leaf" },
]

// Datos de equipos con múltiples imágenes
const equipmentData = [
  {
    marca: "SENTO",
    modelo: "NODO TEMPERATURA HUMEDAD AMBIENTAL - L B - A0269",
    operacion: "0°C a 125°C",
    Precisión: "±3 % HR / ±0,3 ℃",
    alimentacion: "Batería Alcalina AA x2 (equivalente a 80000 transmisiones)",
    comunicacion: "Lora 915MHz",
    aplicacion: "Medicion de temperatura y humedad relativa en espacios interiores, proporcionando datos para el monitoreo ambiental.",
    frecuenciaMedicion: "Cada 10 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    dimensiones: "136mm x 99mm x 85mm",
    imagenes: ["imag/th1.webp", "imag/th2.webp", "imag/th3.webp"],
    grupo: "sensors",
  },

  {
    marca: "SENTO",
    modelo: "NODO TEMPERATURA AGUA - L B - A0310",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "-55°C hasta 125°C",
    Precisión: "±0,5 °C Precisión de -10 °C a +85 °C",
    alimentacion: "Batería Alcalina AA x2 (equivalente a 80000 transmisiones)",
    comunicacion: "Lora 915MHz",
    aplicacion: "Sensor diseñado para medir la temperatura en agua con una carcasa impermeable que garantiza su funcionamiento en condiciones de humedad o inmersión.",
    frecuenciaMedicion: "Cada 10 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/wt1.webp", "imag/wt2.webp", "imag/wt3.webp"],
    grupo: "sensors",
  },
  {
    marca: "SENTO",
    modelo: "NODO FLUJO MECANICO 1~3 PULG - L A - A0576",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "Contador de Pulsos",
    Precisión: "±0,1%",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion:
      "Cuantificación del flujo y el consumo de agua en tuberías de diámetros específicos (3/4″, 1/2″, 1″, 2″ y 3″) utilizado en aplicaciones residenciales e industriales para el monitoreo del uso del agua.",
    frecuenciaMedicion: "Cada 5 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/wf1.webp", "imag/wf2.webp", "imag/wf3.webp"],
    grupo: "environmental",
  },
  {
    marca: "SENTO",
    modelo: "NODO FORMALDEHIDO - L A - A0695",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "Rango de detección: 0~5 ppm",
    Precisión: "±0,01 ppm",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion: "Deteccion y medicion de la concentración de formaldehído en el ambiente, utilizado para monitorear la calidad del aire interior y garantizar condiciones saludables en espacios cerrados.",
    frecuenciaMedicion: "Cada 5 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/for1.webp", "imag/for2.webp", "imag/for3.webp"],
    grupo: "sensors",
  },
  {
    marca: "SENTO",
    modelo: "CONCENTRADOR WIFI - L A - A0454",
    dimensiones: "270mm x 220mm x 53mm",
    operacion: "Recepcion de datos Lora",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz/WIFI 2,4 GHz",
    aplicacion: "Dispositivo que centraliza y gestiona la recepción de datos provenientes de múltiples sensores o dispositivos, facilitando su procesamiento de tramas Lora y envio a la plataforma IoT.",
    frecuenciaMedicion: "Continuo",
    rangoOperacional: " -5 ~ 60 °C  ",
    alcanceOperacional: "Hasta 0,6km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/gw1.webp", "imag/gw2.webp", "imag/gw3.webp"],
    grupo: "communication"
  },
  {
    marca: "SENTO",
    modelo: "NODO RS232 - L A - A0650",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "Comunicacion serial protocolo RS232",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion: "Integrador de sensores que utilizan la interfaz RS232 para la transmisión de datos, comúnmente empleados en básculas y sistemas de pesaje, habilitando la comunicación de estos con otros dispositivos o sistemas.",
    frecuenciaMedicion: "Cada 5 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/rs1.webp", "imag/rs2.webp", "imag/rs3.webp"],
    grupo: "control",
  },
  {
    marca: "SENTO",
    modelo: "NODO PULSOS - L A - A0787",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "Contador de pulsos ",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion:
      "Sistema que recibe datos seriales y la envía a un concentrador para su recopilación y análisis.",
    frecuenciaMedicion: "Cada 5 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/pul1.webp", "imag/pul2.webp", "imag/pul3.webp"],
    grupo: "environmental",
  },
  {
    marca: "SENTO",
    modelo: "NODO RS485 - L A - A0664",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "Protocolo de comunicación MODBUS",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion: "Comunicación serial que permite la transmisión y recepción de datos en un solo par de cables, utilizado en aplicaciones industriales para conectar múltiples dispositivos en una red.",
    frecuenciaMedicion: "Cada 5 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/rs4851.webp", "imag/rs4852.webp", "imag/rs4853.webp"],
    grupo: "control",
  },
  {
    marca: "SENTO",
    modelo: " NODO MODBUS TCP - L W A - A0651",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "Protocolo de comunicación Modbus/TCP",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion:
      "Comunicación industrial que permite la transmisión de datos entre dispositivos electrónicos, utilizado ampliamente en sistemas de automatización y control, operando sobre redes TCP/IP para facilitar la integración y comunicación.",
    frecuenciaMedicion: "Cada 5 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/tcp1.webp", "imag/tcp2.webp", "imag/tcp3.webp"],
    grupo: "control",
  },
  {
    marca: "SENTO",
    modelo: "NODO CO2 TEMPERATURA HUMEDAD AMBIENTAL- L A - 0451  ",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "Rango de medición de 0-2000 ppm",
    Precisión: "±50 ppm ±3% de la lectura ",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion: " Monitoreo de  la concentracion de  CO₂ en interiores.",
    frecuenciaMedicion: "Cada 5 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/co2.webp", "imag/co21.webp"],
    grupo: "sensors",
  },
  {
    marca: "SENTO",
    modelo: "NODO TEMPERATURA 5~20 cm INDUSTRIAL - L B - A0652",
    dimensiones: "136mm x 99mm x 85mm",
    operacion: "Medición de temperatura de -100 a 200 °C",
    Precisión: "±0.15°C ",
    alimentacion: "Batería Alcalina AA",
    comunicacion: "Lora 915MHz",
    aplicacion: "Sensor diseñado para medir la temperatura en condiciones industriales, diseñado para implementaciones en ambientes hostiles.",
    frecuenciaMedicion: "Cada 10 minutos",
    rangoOperacional: " -4 ~ 80 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/ind1.webp", "imag/ind2.webp", "imag/ind3.webp"],
    grupo: "sensors",
  },
  {
    marca: "SENTO",
    modelo: "NODO PULSOS 24VDC - L A - A0427",
    dimensiones: "270mm x 220mm x 53mm",
    operacion: "Rango de medición 0,1-25 l/min (20 a 60 °C)",
    Precisión: "±0.02 a ±0.05 pH ",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion:
      "Medicion de flujo volumétrico, consumo total y temperatura en fluidos o gases. Ideal para aplicaciones de monitoreo y control.",
    frecuenciaMedicion: "Cada 5 minutos",
    rangoOperacional: " -5 ~ 60 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/ifm1.webp", "imag/ifm2.webp", "imag/ifm3.webp"],
    grupo: "environmental",
  },
  {
    marca: "SENTO",
    modelo: "ROUTER WIFI CELULAR SURAMERICA - W C A - A0606",
    dimensiones: "270mm x 220mm x 53mm",
    operacion: "Redes 4G/LTE (Cat 4), 3G, 2G",
    alimentacion: "110v / 220v AC",
    comunicacion: "WIFI 2,4 GHz",
    aplicacion: "Dispositivo que proporciona conectividad de red en entornos industriales mediante tecnología 4G, brindando comunicación confiable y de alta velocidad para multiples sistemas y dispositivos.",
    frecuenciaMedicion: "Continuo",
    rangoOperacional: "-5 ~ 60 °C  ",
    alcanceOperacional: "Cobertura de red celular",
    imagenes: ["imag/rou1.webp", "imag/rou2.webp", "imag/rou3.webp"],
    grupo: "communication",
  },
  {
    marca: "SENTO",
    modelo: "NODO PH - L A - A0561",
    dimensiones: "270mm x 220mm x 53mm",
    operacion: "0-14PH",
    Precisión: "±0.02 a ±0.05 pH",
    alimentacion: "110v / 220v AC",
    comunicacion: "Lora 915MHz",
    aplicacion:
      " Monitoreo continuo de pH en agua con posibilidad de instalacion directamente en la linea de suministro.",
    frecuenciaMedicion: "Cada 15 minutos",
    rangoOperacional: " -5 ~ 60 °C  ",
    alcanceOperacional: "Hasta 0,5km en línea de vista / 50~100m con obtaculos",
    imagenes: ["imag/ph1.webp", "imag/ph2.webp", "imag/ph3.webp"],
    grupo: "sensors",
  },
];

// Variables globales para el estado del carrusel y modal
let currentModalEquipment = null
let currentModalImageIndex = 0
let autoplayIntervals = []
let selectedCardIndex = null
let selectedGroup = "all" // Grupo seleccionado por defecto
const activeSlides = {}

// Función para inicializar la página cuando el DOM está listo
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar la página
  initPage()

  // Eliminar la transición de página después de cargar el contenido
  setTimeout(() => {
    const pageTransition = document.querySelector(".page-transition")
    if (pageTransition) {
      pageTransition.classList.add("loaded")
    }
  }, 800)
})

// Función principal de inicialización
function initPage() {
  // Cargar tema guardado
  loadSavedTheme()

  // Renderizar pestañas de categorías
  renderCategoryTabs()

  // Renderizar lista de equipos
  renderEquipmentList()

  // Configurar event listeners
  setupEventListeners()

  // Establecer el año actual en el footer
  const currentYearElement = document.getElementById("currentYear")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear()
  }
}

// Función para cargar el tema guardado
function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.classList.add(savedTheme)

  if (savedTheme === "dark") {
    const icon = document.querySelector("#themeToggle i")
    if (icon) {
      icon.classList.replace("fa-moon", "fa-sun")
    }
    const themeColorMeta = document.querySelector('meta[name="theme-color"]')
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", "#0f172a")
    }
  }
}

// Función para cambiar entre tema claro y oscuro
function toggleTheme() {
  const html = document.documentElement
  const icon = document.querySelector("#themeToggle i")
  const themeColorMeta = document.querySelector('meta[name="theme-color"]')

  if (html.classList.contains("light")) {
    html.classList.replace("light", "dark")
    if (icon) icon.classList.replace("fa-moon", "fa-sun")
    localStorage.setItem("theme", "dark")
    if (themeColorMeta) themeColorMeta.setAttribute("content", "#0f172a")
  } else {
    html.classList.replace("dark", "light")
    if (icon) icon.classList.replace("fa-sun", "fa-moon")
    localStorage.setItem("theme", "light")
    if (themeColorMeta) themeColorMeta.setAttribute("content", "#1e3a8a")
  }
}

// Renderizar pestañas de categorías
function renderCategoryTabs() {
  const categoryTabsContainer = document.getElementById("categoryTabs")
  if (!categoryTabsContainer) return

  categoryTabsContainer.innerHTML = ""

  equipmentGroups.forEach((group) => {
    const tab = document.createElement("button")
    tab.className = `category-tab ${selectedGroup === group.id ? "active" : ""}`
    tab.setAttribute("data-group", group.id)
    tab.setAttribute("aria-pressed", selectedGroup === group.id)

    tab.innerHTML = `
      <i class="fas ${group.icon}" aria-hidden="true"></i>
      <span>${group.name}</span>
    `

    tab.addEventListener("click", () => {
      selectGroup(group.id)
    })

    categoryTabsContainer.appendChild(tab)
  })
}

// Seleccionar grupo y filtrar equipos
function selectGroup(groupId) {
  selectedGroup = groupId
  renderCategoryTabs()
  renderEquipmentList()
}

// Filtrar equipos por grupo seleccionado
function getFilteredEquipment() {
  if (selectedGroup === "all") {
    return equipmentData
  } else {
    return equipmentData.filter((item) => item.grupo === selectedGroup)
  }
}

// Configurar todos los event listeners
function setupEventListeners() {
  // Event listener para el botón de tema
  const themeToggleBtn = document.getElementById("themeToggle")
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme)
  }

  // Event listeners para el modal
  const modal = document.getElementById("fullscreenModal")
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal()
    })
  }

  const prevImageBtn = document.getElementById("prevImageBtn")
  if (prevImageBtn) {
    prevImageBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      navigateModal("prev")
    })
  }

  const nextImageBtn = document.getElementById("nextImageBtn")
  if (nextImageBtn) {
    nextImageBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      navigateModal("next")
    })
  }

  const closeModalBtn = document.getElementById("closeModalBtn")
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      closeModal()
    })
  }

  // Crear overlay para tarjeta seleccionada si no existe
  if (!document.querySelector(".overlay")) {
    const overlay = document.createElement("div")
    overlay.className = "overlay"
    document.body.appendChild(overlay)
  }

  // Navegación con teclado
  document.addEventListener("keydown", (e) => {
    if (document.getElementById("fullscreenModal")?.classList.contains("active")) {
      if (e.key === "Escape") {
        closeModal()
      } else if (e.key === "ArrowLeft") {
        navigateModal("prev")
      } else if (e.key === "ArrowRight") {
        navigateModal("next")
      }
    } else if (selectedCardIndex !== null && e.key === "Escape") {
      deselectCard()
    }
  })
}

// Actualizar la función renderEquipmentList para aplicar animaciones escalonadas
function renderEquipmentList() {
  // Limpiar cualquier intervalo de autoplay existente
  clearAllAutoplayIntervals()

  // Obtener equipos filtrados
  const filteredEquipment = getFilteredEquipment()

  // Inicializar activeSlides
  filteredEquipment.forEach((_, index) => {
    activeSlides[index] = 0
  })

  const equipmentListElement = document.getElementById("equipmentList")
  if (!equipmentListElement) return

  equipmentListElement.innerHTML = ""

  // Crear y añadir cada tarjeta con animación escalonada
  filteredEquipment.forEach((equipment, index) => {
    const card = createEquipmentCard(equipment, index)
    equipmentListElement.appendChild(card)
  })

  // Configurar carruseles y autoplay
  setupCarousels()
  setupAutoplay()
  setupCardSelection()
}

// Función para crear tarjetas de equipo
function createEquipmentCard(equipment, index) {
  // Crear elemento de tarjeta
  const card = document.createElement("div")
  card.className = "equipment-card"
  card.dataset.index = index

  // Crear slides para el carrusel
  const carouselSlides = equipment.imagenes
    .map(
      (imagen, imgIdx) => `
  <div class="carousel-slide ${imgIdx === 0 ? "active" : ""}">
    <img src="${imagen}" 
         alt="${equipment.modelo} - Imagen ${imgIdx + 1}" 
         loading="lazy"
         onerror="this.onerror=null; this.src='placeholder.svg?height=250&width=400'; this.classList.add('fallback-image')" />
  </div>
`,
    )
    .join("")

  // Crear indicadores (dots) para el carrusel
  const carouselDots = equipment.imagenes
    .map(
      (_, imgIdx) => `
  <div class="dot ${imgIdx === 0 ? "active" : ""}" data-index="${imgIdx}" role="button" aria-label="Ver imagen ${
    imgIdx + 1
  }"></div>
`,
    )
    .join("")

  // Estructura HTML de la tarjeta
  card.innerHTML = `
  <h2 class="card-title">
    ${equipment.modelo}
    <span class="badge">${equipment.marca}</span>
  </h2>
  <div class="content">
    <div class="carousel-container" data-equipment-index="${index}">
      ${carouselSlides}
      <button class="carousel-btn prev-btn" data-action="prev" aria-label="Imagen anterior">
        <i class="fas fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button class="carousel-btn next-btn" data-action="next" aria-label="Imagen siguiente">
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
      </button>
      <div class="carousel-dots" role="tablist">
        ${carouselDots}
      </div>
    </div>
    <dl class="specs">
      
      <dt><i class="fas fa-temperature-high" aria-hidden="true"></i> Rango de Medicion:</dt>
      <dd>${equipment.operacion}</dd>
      <dt><i class="fas fa-crosshairs" aria-hidden="true"></i> Precisión:</dt>
      <dd>${equipment.Precisión || "Valor aplicado solo a sensores"}</dd>
      <dt><i class="fas fa-plug" aria-hidden="true"></i> Alimentación:</dt>
      <dd>${equipment.alimentacion}</dd>
      <dt><i class="fas fa-wifi" aria-hidden="true"></i> Comunicación:</dt>
      <dd>${equipment.comunicacion}</dd>
      <dt><i class="fas fa-clock" aria-hidden="true"></i> Frecuencia de Medición:</dt>
      <dd>${equipment.frecuenciaMedicion}</dd>
      <dt><i class="fas fa-thermometer-quarter" aria-hidden="true"></i> Rango Operacional:</dt>
      <dd>${equipment.rangoOperacional}</dd>
      <dt><i class="fas fa-broadcast-tower" aria-hidden="true"></i> Alcance Operacional:</dt>
      <dd>${equipment.alcanceOperacional}</dd>
      <dt><i class="fas fa-ruler-combined" aria-hidden="true"></i> Dimensiones:</dt>
      <dd>${equipment.dimensiones}</dd>
    </dl>
    <h3 class="section-title"><i class="fas fa-cogs" aria-hidden="true"></i> Aplicación</h3>
    <p class="section-content">${equipment.aplicacion}</p>

  </div>
  <button class="close-card-btn" aria-label="Cerrar tarjeta">
    <i class="fas fa-times"></i>
  </button>
`

  return card
}

// Configurar la selección de tarjetas
function setupCardSelection() {
  const cards = document.querySelectorAll(".equipment-card")
  const overlay = document.querySelector(".overlay")

  // Asegurarse de que el overlay existe antes de añadir el event listener
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      e.stopPropagation()
      deselectCard()
    })
  }

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Si el clic fue en un contenedor de carrusel, botón, punto o botón de cierre, no seleccionar la tarjeta
      if (
        e.target.closest(".carousel-container") ||
        e.target.closest(".carousel-btn") ||
        e.target.closest(".dot") ||
        e.target.closest(".close-card-btn")
      ) {
        return
      }

      // Verificar si la tarjeta ya está seleccionada
      const isAlreadySelected = card.classList.contains("selected")

      // Si ya hay una tarjeta seleccionada, deseleccionarla primero
      if (selectedCardIndex !== null) {
        deselectCard()

        // Si estamos haciendo clic en la misma tarjeta que ya estaba seleccionada, solo deseleccionarla y volver
        if (isAlreadySelected) {
          return
        }
      }

      // Seleccionar la nueva tarjeta
      selectCard(card)
    })

    // Añadir event listener para el botón de cierre
    const closeBtn = card.querySelector(".close-card-btn")
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        deselectCard()
      })
    }
  })
}

// Función para seleccionar una tarjeta
function selectCard(card) {
  // Detectar si es un dispositivo móvil
  const isMobile = window.innerWidth <= 768 || "ontouchstart" in document.documentElement

  // Desactivar todas las transiciones normales temporalmente
  card.style.transition = "none"

  // Añadir clase 'selected' a la tarjeta inmediatamente
  card.classList.add("selected")

  // Activar el overlay
  const overlay = document.querySelector(".overlay")
  if (overlay) {
    overlay.style.transition = "opacity 0.3s"
    overlay.classList.add("active")
  }

  // Prevenir scroll en el body
  document.body.style.overflow = "hidden"

  // Bloquear el puntero en la tarjeta seleccionada
  card.style.cursor = "default"

  // Asegurarse de que el título esté visible
  const cardTitle = card.querySelector(".card-title")
  if (cardTitle) {
    cardTitle.style.position = "sticky"
    cardTitle.style.top = "0"
    cardTitle.style.zIndex = "10"
  }

  // Guardar el índice de la tarjeta seleccionada
  selectedCardIndex = Number.parseInt(card.dataset.index)

  // Si es un dispositivo móvil, deshabilitar el zoom
  if (isMobile) {
    // Añadir meta viewport para prevenir zoom
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    if (viewportMeta) {
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no")
    }

    // Deshabilitar gestos de pinch-zoom en la tarjeta
    card.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length > 1) {
          e.preventDefault()
        }
      },
      { passive: false },
    )
  }

  // Restaurar la transición después de un breve retraso
  setTimeout(() => {
    card.style.transition = ""
  }, 50)
}

// Función para deseleccionar la tarjeta
function deselectCard() {
  if (selectedCardIndex === null) return

  const card = document.querySelector(`.equipment-card[data-index="${selectedCardIndex}"]`)
  const overlay = document.querySelector(".overlay")

  // Detectar si es un dispositivo móvil
  const isMobile = window.innerWidth <= 768 || "ontouchstart" in document.documentElement

  if (card) {
    // Desactivar transiciones temporalmente
    card.style.transition = "none"
    card.classList.remove("selected")
    card.style.cursor = "pointer"

    // Restaurar el estilo del título
    const cardTitle = card.querySelector(".card-title")
    if (cardTitle) {
      cardTitle.style.position = ""
      cardTitle.style.top = ""
      cardTitle.style.zIndex = ""
    }

    // Eliminar el event listener de touchmove si existe
    if (isMobile) {
      card.removeEventListener(
        "touchmove",
        (e) => {
          if (e.touches.length > 1) {
            e.preventDefault()
          }
        },
        { passive: false },
      )
    }

    // Restaurar la transición después de un breve retraso
    setTimeout(() => {
      card.style.transition = ""
    }, 50)
  }

  if (overlay) {
    overlay.classList.remove("active")
  }

  // Si es un dispositivo móvil, restaurar el viewport normal
  if (isMobile) {
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    if (viewportMeta) {
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0")
    }
  }

  // Re-habilitar scroll
  document.body.style.overflow = ""
  selectedCardIndex = null
}

// Corregir la función setupCarousels para manejar correctamente los equipos filtrados
function setupCarousels() {
  document.querySelectorAll(".carousel-container").forEach((container, containerIndex) => {
    const equipmentIndex = Number.parseInt(container.dataset.equipmentIndex)

    // Verificar que el índice es válido
    if (isNaN(equipmentIndex)) return

    // Listeners para botones de navegación
    const prevBtn = container.querySelector(".prev-btn")
    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        navigateCarousel(container, "prev")
      })
    }

    const nextBtn = container.querySelector(".next-btn")
    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        navigateCarousel(container, "next")
      })
    }

    // Listeners para dots
    container.querySelectorAll(".dot").forEach((dot) => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation()
        const dotIndex = Number.parseInt(dot.dataset.index)
        if (!isNaN(dotIndex)) {
          setActiveSlide(container, dotIndex)
        }
      })
    })

    // Listener para el contenedor del carrusel para abrir modal
    container.addEventListener("click", (e) => {
      // Si el clic fue en un botón o punto, no abrir el modal
      if (e.target.closest(".carousel-btn") || e.target.closest(".dot")) {
        return
      }

      // Encontrar el índice de la imagen activa
      const activeSlideIndex = Array.from(container.querySelectorAll(".carousel-slide")).findIndex((slide) =>
        slide.classList.contains("active"),
      )

      // Obtener el equipo actual
      const filteredEquipment = getFilteredEquipment()
      const equipment = filteredEquipment[containerIndex]

      // Abrir el modal con la imagen activa
      if (equipment) {
        openModal(equipment, activeSlideIndex)
      }

      // Prevenir propagación de eventos para evitar la selección de tarjetas
      e.stopPropagation()
    })
  })
}

// Modificar la función setupAutoplay para prevenir autoplay al pasar el ratón
function setupAutoplay() {
  const carouselContainers = document.querySelectorAll(".carousel-container")

  // Detectar si es un dispositivo móvil
  const isMobile = window.innerWidth <= 768 || "ontouchstart" in document.documentElement

  carouselContainers.forEach((container, index) => {
    // Intervalo más largo para que coincida con la transición más lenta
    const intervalTime = isMobile ? 12000 + index * 500 : 10000 + index * 500 // Aumentado de 10000/8000

    // Crear un intervalo para cada carrusel
    const interval = setInterval(() => {
      if (selectedCardIndex === null) {
        // Solo autoplay cuando no hay tarjeta seleccionada
        navigateCarousel(container, "next")
      }
    }, intervalTime)

    // Guardar referencia al intervalo
    autoplayIntervals.push(interval)

    // Pausar autoplay al interactuar
    const pauseAutoplay = () => {
      clearInterval(interval)

      // Eliminar el intervalo del array
      const intervalIndex = autoplayIntervals.indexOf(interval)
      if (intervalIndex !== -1) {
        autoplayIntervals.splice(intervalIndex, 1)
      }
    }

    // Eventos para escritorio - solo pausar, no reanudar
    container.addEventListener("mouseenter", pauseAutoplay)

    // Eventos para móviles - solo pausar al tocar, no reanudar
    container.addEventListener("touchstart", pauseAutoplay)
  })
}

// Limpiar todos los intervalos de autoplay
function clearAllAutoplayIntervals() {
  autoplayIntervals.forEach((interval) => clearInterval(interval))
  autoplayIntervals = []
}

// Navegar entre las imágenes del carrusel
function navigateCarousel(container, direction) {
  const slides = container.querySelectorAll(".carousel-slide")
  if (!slides.length) return

  const activeSlideIndex = Array.from(slides).findIndex((slide) => slide.classList.contains("active"))

  // Calcular nuevo índice con wrapping adecuado
  let newIndex
  if (direction === "prev") {
    newIndex = activeSlideIndex <= 0 ? slides.length - 1 : activeSlideIndex - 1
  } else {
    newIndex = activeSlideIndex >= slides.length - 1 ? 0 : activeSlideIndex + 1
  }

  // Aplicar transición
  setActiveSlide(container, newIndex)
}

// Modificar la función setActiveSlide para hacer la transición más lenta
function setActiveSlide(container, index) {
  const slides = container.querySelectorAll(".carousel-slide")
  const dots = container.querySelectorAll(".dot")

  if (!slides.length || index >= slides.length) return

  // Desactivar todos
  slides.forEach((slide) => {
    slide.classList.remove("active")
    slide.style.zIndex = 0
  })

  dots.forEach((dot) => dot.classList.remove("active"))

  // Activar el nuevo
  slides[index].classList.add("active")
  slides[index].style.zIndex = 1

  if (dots[index]) {
    dots[index].classList.add("active")
  }

  // Efecto de transición más lenta
  slides.forEach((slide) => {
    if (!slide.classList.contains("active")) {
      slide.style.opacity = 0
      slide.style.transition = "opacity 2.5s ease-in-out" // Aumentado de 1.2s a 2.5s
    } else {
      slide.style.opacity = 1
      slide.style.transition = "opacity 2.5s ease-in-out" // Aumentado de 1.2s a 2.5s
    }
  })

  // Actualizar el estado global
  const equipmentIndex = Number.parseInt(container.dataset.equipmentIndex)
  if (!isNaN(equipmentIndex)) {
    activeSlides[equipmentIndex] = index
  }
}

// Abrir el modal con la imagen seleccionada
function openModal(equipment, imageIndex = 0) {
  if (!equipment || !equipment.imagenes || !equipment.imagenes.length) return

  currentModalEquipment = equipment
  currentModalImageIndex = imageIndex

  const modal = document.getElementById("fullscreenModal")
  const modalImage = document.getElementById("modalImage")
  const modalTitle = document.getElementById("modalTitle")
  const modalDescription = document.getElementById("modalDescription")
  const modalDots = document.getElementById("modalDots")

  if (!modal || !modalImage || !modalTitle || !modalDescription || !modalDots) return

  // Detectar si es un dispositivo móvil
  const isMobile = window.innerWidth <= 768 || "ontouchstart" in document.documentElement

  // Si es un dispositivo móvil, deshabilitar el zoom
  if (isMobile) {
    // Añadir meta viewport para prevenir zoom
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    if (viewportMeta) {
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no")
    }

    // Deshabilitar gestos de pinch-zoom en el modal
    modal.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length > 1) {
          e.preventDefault()
        }
      },
      { passive: false },
    )
  }

  // Precargar imagen para prevenir parpadeo
  const img = new Image()
  img.onload = () => {
    modalImage.src = equipment.imagenes[imageIndex]
    modalImage.alt = `${equipment.modelo} - Imagen ${imageIndex + 1}`

    // Mostrar modal después de cargar la imagen
    modal.classList.add("active")
    document.body.style.overflow = "hidden"

    // Enfocar botón de cierre para accesibilidad
    setTimeout(() => {
      const closeBtn = document.getElementById("closeModalBtn")
      if (closeBtn) closeBtn.focus()
    }, 100)
  }

  img.onerror = () => {
    // Fallback si la imagen falla al cargar
    modalImage.src = "placeholder.svg?height=400&width=600"
    modalImage.alt = `${equipment.modelo} - Imagen no disponible`
    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  img.src = equipment.imagenes[imageIndex]

  // Establecer contenido de texto
  modalTitle.textContent = equipment.modelo
  modalDescription.textContent = equipment.aplicacion

  // Crear dots
  modalDots.innerHTML = equipment.imagenes
    .map(
      (_, idx) => `
    <div class="dot ${idx === imageIndex ? "active" : ""}" 
         data-index="${idx}" 
         role="button" 
         aria-label="Ver imagen ${idx + 1}"></div>
  `,
    )
    .join("")

  // Añadir event listeners a los dots
  modalDots.querySelectorAll(".dot").forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation()
      const dotIndex = Number.parseInt(dot.dataset.index)
      if (!isNaN(dotIndex)) {
        setModalImage(dotIndex)
      }
    })
  })
}

// Cerrar el modal
function closeModal() {
  const modal = document.getElementById("fullscreenModal")
  if (!modal) return

  // Detectar si es un dispositivo móvil
  const isMobile = window.innerWidth <= 768 || "ontouchstart" in document.documentElement

  // Si es un dispositivo móvil, restaurar el viewport normal
  if (isMobile) {
    const viewportMeta = document.querySelector('meta[name="viewport"]')
    if (viewportMeta) {
      viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0")
    }

    // Eliminar el event listener de touchmove
    modal.removeEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length > 1) {
          e.preventDefault()
        }
      },
      { passive: false },
    )
  }

  // Animación de cierre
  modal.classList.remove("active")
  document.body.style.overflow = "" // Restaurar scroll

  currentModalEquipment = null
  currentModalImageIndex = 0
}

// Navegar entre imágenes en el modal
function navigateModal(direction) {
  if (!currentModalEquipment || !currentModalEquipment.imagenes) return

  const imageCount = currentModalEquipment.imagenes.length
  const newIndex =
    direction === "prev"
      ? currentModalImageIndex === 0
        ? imageCount - 1
        : currentModalImageIndex - 1
      : currentModalImageIndex === imageCount - 1
        ? 0
        : currentModalImageIndex + 1
  setModalImage(newIndex)
}

// Establecer la imagen activa en el modal
function setModalImage(index) {
  if (!currentModalEquipment || !currentModalEquipment.imagenes || index >= currentModalEquipment.imagenes.length)
    return

  currentModalImageIndex = index
  const modalImage = document.getElementById("modalImage")
  if (!modalImage) return

  // Transición suave
  modalImage.style.opacity = 0

  // Precargar imagen
  const img = new Image()
  img.onload = () => {
    setTimeout(() => {
      modalImage.src = currentModalEquipment.imagenes[index]
      modalImage.alt = `${currentModalEquipment.modelo} - Imagen ${index + 1}`
      modalImage.style.opacity = 1
    }, 300)
  }

  img.onerror = () => {
    setTimeout(() => {
      modalImage.src = "placeholder.svg?height=400&width=600"
      modalImage.alt = `${currentModalEquipment.modelo} - Imagen no disponible`
      modalImage.style.opacity = 1
    }, 300)
  }

  img.src = currentModalEquipment.imagenes[index]

  // Actualizar dots
  const modalDots = document.getElementById("modalDots")
  if (modalDots) {
    modalDots.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index)
    })
  }
}

// Inicializar event listeners adicionales después de cargar la página
window.addEventListener("load", () => {
  // Añadir event listeners a las tarjetas
  document.querySelectorAll(".equipment-card").forEach((card) => {
    card.addEventListener("click", () => selectCard(card))
  })

  // Añadir event listener al botón de cierre
  document.querySelectorAll(".close-card-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      deselectCard()
    })
  })

  // Cerrar la tarjeta al hacer clic en el overlay
  const overlay = document.querySelector(".overlay")
  if (overlay) {
    overlay.addEventListener("click", deselectCard)
  }

  // Prevenir que los clics dentro de la tarjeta seleccionada cierren la tarjeta
  document.querySelectorAll(".equipment-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (card.classList.contains("selected")) {
        e.stopPropagation()
      }
    })
  })
})

