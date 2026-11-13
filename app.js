/**
 * Ti — Funcionalidad Interactiva y Motor de Conversión de Cursos
 * Desarrollado por: Agente Diseñador Web de Cursos Ti (UX/UI & CRO)
 * Fiscalizado y Validado por: Supervisor Auditor y Resolutor de Errores
 */

// Base de cursos sincronizada y respaldada 100% con knowledge/cursos/
const CURSOS_TI = [
  {
    id: "desarrollo-web-fullstack",
    nombre: "Desarrollo Web Full-Stack Moderno",
    categoria: "Desarrollo",
    descripcion: "Aprende a construir aplicaciones web completas desde cero con React, Node.js, TypeScript y bases de datos relacionales y NoSQL, aplicando buenas prácticas y despliegue continuo.",
    nivel: "Intermedio",
    requisitos: "Conocimientos básicos de JavaScript o lógica de programación.",
    duracion: "12 semanas (120 horas lectivas y prácticas)",
    modalidad: "Online interactivo con mentorías semanales y proyectos reales",
    horarios: "Clases grabadas con acceso 24/7 y sesiones en vivo los martes y jueves (19:00 a 21:00 UTC-5)",
    fechas: "Convocatoria abierta: Inicio el 1 de cada mes",
    precio: 249,
    moneda: "USD",
    cuotas: "3 cuotas mensuales de $89 USD sin intereses",
    certificacion: "Certificado oficial de aprovechamiento emitido por Ti tras aprobar el proyecto final",
    garantia: "14 días de reembolso ético garantizado",
    temario: [
      { modulo: "Módulo 1", titulo: "Fundamentos y TypeScript Avanzado", detalle: "Tipado estricto, genéricos, interfaces y arquitectura asíncrona limpia." },
      { modulo: "Módulo 2", titulo: "Frontend Reactivo con React y Next.js", detalle: "Server & Client Components, estado global y optimización de render." },
      { modulo: "Módulo 3", titulo: "Backend con Node.js, Express y PostgreSQL", detalle: "APIs RESTful seguras, ORM con Prisma y migraciones de datos." },
      { modulo: "Módulo 4", titulo: "Proyecto Final y Despliegue en Producción", detalle: "Testing con Jest/Playwright, Docker y despliegue continuo en la nube." }
    ],
    idealPara: "Quienes ya conocen nociones de lógica de programación y quieren construir productos web completos o dar el salto a desarrollador web profesional."
  },
  {
    id: "automatizacion-ia-python",
    nombre: "Automatización Inteligente con Python y Agentes IA",
    categoria: "IA & Automatización",
    descripcion: "Automatiza flujos de trabajo repetitivos, integra modelos de lenguaje (LLMs) y construye agentes autónomos que optimicen procesos operativos y comerciales con Python.",
    nivel: "Principiante a Intermedio",
    requisitos: "Ganas de aprender y fundamentos básicos de computación (no se requiere experiencia previa en IA).",
    duracion: "8 semanas (80 horas estimadas)",
    modalidad: "100% online asíncrono con soporte diario de tutores vía foro y Discord",
    horarios: "A tu propio ritmo con entregas semanales de proyectos prácticos",
    fechas: "Inicio inmediato con acceso instantáneo a la plataforma",
    precio: 199,
    moneda: "USD",
    cuotas: "Pago único o 2 cuotas de $105 USD",
    certificacion: "Certificado de Especialista en Automatización con IA verificado por Ti",
    garantia: "14 días de reembolso ético garantizado",
    temario: [
      { modulo: "Módulo 1", titulo: "Automatización Esencial con Python", detalle: "Procesamiento de datos con Pandas, scripts de sistema y web scraping ético." },
      { modulo: "Módulo 2", titulo: "Integración de LLMs y Prompt Engineering", detalle: "Conexión a APIs avanzadas (Gemini, OpenAI), RAG y bases vectoriales." },
      { modulo: "Módulo 3", titulo: "Construcción de Agentes Autónomos", detalle: "Sistemas multiagente, toma de decisiones y automatización de CRMs/Sheets." },
      { modulo: "Módulo 4", titulo: "Despliegue y Operación 24/7", detalle: "Programación de tareas (cron), Dockerización y monitorización de bots." }
    ],
    idealPara: "Profesionales, analistas, desarrolladores y emprendedores que desean eliminar tareas repetitivas y liderar la adopción de IA en sus empresas."
  },
  {
    id: "cloud-devops",
    nombre: "Arquitectura Cloud, Docker y DevOps",
    categoria: "Cloud & DevOps",
    descripcion: "Domina la infraestructura moderna en la nube: contenedores Docker, orquestación con Kubernetes, pipelines de CI/CD automatizados e infraestructura como código con Terraform.",
    nivel: "Intermedio a Avanzado",
    requisitos: "Conocimientos de terminal Linux y nociones básicas de redes.",
    duracion: "10 semanas (100 horas de formación técnica)",
    modalidad: "Online con laboratorios prácticos en entornos cloud reales incluidos",
    horarios: "Laboratorios prácticos disponibles 24/7 con asesorías técnicas semanales",
    fechas: "Convocatoria mensual",
    precio: 279,
    moneda: "USD",
    cuotas: "Pago único o 3 cuotas de $99 USD (créditos cloud incluidos)",
    certificacion: "Certificado profesional de Cloud & DevOps Engineer validado por Ti",
    garantia: "14 días de reembolso ético garantizado",
    temario: [
      { modulo: "Módulo 1", titulo: "Docker y Contenedores en Profundidad", detalle: "Imágenes multi-stage seguras, networking y gestión de volúmenes persistentes." },
      { modulo: "Módulo 2", titulo: "Orquestación con Kubernetes (K8s)", detalle: "Pods, Deployments, Services, Ingress, ConfigMaps y gestión de secretos." },
      { modulo: "Módulo 3", titulo: "Pipelines CI/CD Automatizados", detalle: "Flujos de testing y despliegue continuo con GitHub Actions y GitLab CI." },
      { modulo: "Módulo 4", titulo: "Infraestructura como Código (Terraform)", detalle: "Aprovisionamiento reproducible en AWS/GCP y observabilidad con Prometheus y Grafana." }
    ],
    idealPara: "Desarrolladores, administradores de sistemas e ingenieros que desean dar el salto a roles cotizados de DevOps o Cloud Engineer."
  },
  {
    id: "ciberseguridad-practica",
    nombre: "Ciberseguridad Defensiva y Hacking Ético",
    categoria: "Ciberseguridad",
    descripcion: "Aprende a proteger sistemas y aplicaciones contra vulnerabilidades modernas, realizar auditorías de seguridad ética (pentesting) y responder eficazmente a incidentes informáticos.",
    nivel: "Intermedio",
    requisitos: "Conocimientos generales de redes TCP/IP y sistemas operativos.",
    duracion: "10 semanas (100 horas con laboratorios guiados)",
    modalidad: "Online con acceso a máquina virtual de laboratorio aislada",
    horarios: "Acceso flexible con talleres en vivo de análisis de casos los sábados",
    fechas: "Convocatoria con cupos limitados por laboratorio: inicio el día 15 de cada mes",
    precio: 289,
    moneda: "USD",
    cuotas: "Pago único o 3 cuotas de $102 USD",
    certificacion: "Certificado de Especialista en Ciberseguridad Práctica emitido por Ti",
    garantia: "14 días de reembolso ético garantizado",
    temario: [
      { modulo: "Módulo 1", titulo: "Fundamentos de Seguridad Ofensiva y Defensiva", detalle: "Escaneo de puertos, análisis de tráfico de red y modelos de amenazas." },
      { modulo: "Módulo 2", titulo: "Pentesting Web y Mitigación OWASP Top 10", detalle: "Inyecciones SQL, XSS, CSRF y remediación en código fuente." },
      { modulo: "Módulo 3", titulo: "Hardening de Infraestructura y Redes", detalle: "Configuración de firewalls, VPNs y criptografía aplicada con SSL/TLS." },
      { modulo: "Módulo 4", titulo: "Respuesta a Incidentes y Análisis Forense", detalle: "Detección con SIEM y simulación de ataque y defensa en laboratorio real." }
    ],
    idealPara: "Técnicos de TI, desarrolladores y entusiastas de la seguridad que quieren especializarse en ciberseguridad práctica."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initAdvisorWidget();
  initCourseCatalog();
  initCourseModal();
  initDiagnosticQuiz();
  initFAQAccordion();
  initCopyrightYear();
});

/* --------------------------------------------------------------------------
   1. Navegación Móvil
   -------------------------------------------------------------------------- */
function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
}

/* --------------------------------------------------------------------------
   2. Asesor Virtual Interactivo de Ventas (Home Widget)
   -------------------------------------------------------------------------- */
function initAdvisorWidget() {
  const dialogue = document.getElementById("advisorDialogue");
  const chips = document.querySelectorAll(".prompt-chip");
  if (!dialogue || !chips.length) return;

  const responses = {
    "principiante": "¡Excelente punto de partida! Para iniciarte con éxito, te recomiendo **Automatización Inteligente con Python y Agentes IA**. Es muy accesible, no requiere conocimientos previos avanzados y te enseña habilidades aplicables desde la primera semana. ¿Te gustaría ver el temario detallado?",
    "web": "Para construir aplicaciones web modernas, el programa ideal es **Desarrollo Web Full-Stack Moderno (React + Node.js)**. Cubre desde arquitectura TypeScript hasta bases de datos y despliegue en la nube en 12 semanas. ¿Qué tipo de aplicación te gustaría desarrollar?",
    "cloud": "Para infraestructura y escalabilidad, tu mejor ruta es **Arquitectura Cloud, Docker y DevOps**. Incluye laboratorios prácticos en entornos reales y cubre Kubernetes y Terraform. ¿Cuentas con nociones previas de terminal Linux?",
    "seguridad": "Si tu objetivo es la protección y auditoría de sistemas, el curso de **Ciberseguridad Defensiva y Hacking Ético** te capacita en el OWASP Top 10 y respuesta a incidentes en un laboratorio aislado seguro.",
    "garantia": "En Ti todos los cursos cuentan con **14 días de garantía ética de reembolso total**. Si el curso no cumple tus expectativas durante las dos primeras semanas, solicitas el reintegro sin condiciones ocultas."
  };

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const queryKey = chip.getAttribute("data-query");
      if (responses[queryKey]) {
        dialogue.style.opacity = "0.5";
        setTimeout(() => {
          dialogue.innerHTML = responses[queryKey].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          dialogue.style.opacity = "1";
        }, 150);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Catálogo de Cursos (Filtros, Búsqueda y Enlaces Directos)
   -------------------------------------------------------------------------- */
function initCourseCatalog() {
  const grid = document.getElementById("courseCatalogGrid");
  const searchInput = document.getElementById("courseSearchInput");
  const filterPills = document.querySelectorAll(".filter-pill");
  if (!grid) return;

  function renderCourses(courses) {
    if (!courses.length) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
          <p style="font-size: 1.15rem; font-weight: 600;">No encontramos cursos que coincidan con tu búsqueda.</p>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Prueba con otra palabra clave o consulta a nuestro Asesor Comercial.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = courses.map(c => `
      <article class="course-card" id="${c.id}" data-category="${c.categoria}">
        <div class="course-header">
          <span class="badge badge-primary">${c.categoria}</span>
          <span class="badge badge-accent">${c.nivel}</span>
        </div>
        <h3 class="course-title">${c.nombre}</h3>
        <p class="course-description">${c.descripcion}</p>
        
        <div class="course-meta">
          <div class="meta-item">
            <span class="label">DURACIÓN</span>
            <span class="value">${c.duracion.split('(')[0].trim()}</span>
          </div>
          <div class="meta-item">
            <span class="label">MODALIDAD</span>
            <span class="value">${c.modalidad.split('+')[0].split('con')[0].trim()}</span>
          </div>
        </div>

        <div class="course-pricing">
          <span class="price-amount">$${c.precio}</span>
          <span class="price-currency">${c.moneda} (${c.cuotas})</span>
        </div>

        <div class="course-actions">
          <button type="button" class="btn btn-primary btn-sm view-syllabus-btn" data-id="${c.id}">
            Ver Temario Completo
          </button>
          <a href="asesoria.html?curso=${c.id}" class="btn btn-secondary btn-sm">
            Consultar con Asesor
          </a>
        </div>
      </article>
    `).join("");

    attachModalTriggers();
  }

  // Render inicial
  renderCourses(CURSOS_TI);

  // Manejo de anclas o parámetros en URL (?highlight=, ?open=, ?curso= o #hash)
  const urlParams = new URLSearchParams(window.location.search);
  const hashId = window.location.hash ? window.location.hash.substring(1) : null;
  const targetId = urlParams.get("highlight") || urlParams.get("curso") || hashId;
  const openId = urlParams.get("open");

  if (targetId) {
    setTimeout(() => {
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        targetCard.classList.add("is-highlighted");
        targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 200);
  }

  if (openId) {
    setTimeout(() => {
      const targetBtn = document.querySelector(`.view-syllabus-btn[data-id="${openId}"]`);
      if (targetBtn) targetBtn.click();
    }, 250);
  }

  // Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = CURSOS_TI.filter(c => 
        c.nombre.toLowerCase().includes(q) || 
        c.descripcion.toLowerCase().includes(q) ||
        c.categoria.toLowerCase().includes(q)
      );
      renderCourses(filtered);
    });
  }

  // Filtros por categoría
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("is-active"));
      pill.classList.add("is-active");
      const cat = pill.getAttribute("data-category");
      if (cat === "todos") {
        renderCourses(CURSOS_TI);
      } else {
        renderCourses(CURSOS_TI.filter(c => c.categoria.toLowerCase().includes(cat.toLowerCase())));
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Modal de Temario Detallado
   -------------------------------------------------------------------------- */
function initCourseModal() {
  const modal = document.getElementById("syllabusModal");
  if (!modal) return;

  const closeBtn = modal.querySelector(".modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("is-active"));
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("is-active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-active")) {
      modal.classList.remove("is-active");
    }
  });
}

function attachModalTriggers() {
  const modal = document.getElementById("syllabusModal");
  const modalBody = document.getElementById("syllabusModalBody");
  if (!modal || !modalBody) return;

  document.querySelectorAll(".view-syllabus-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const courseId = btn.getAttribute("data-id");
      const course = CURSOS_TI.find(c => c.id === courseId);
      if (!course) return;

      modalBody.innerHTML = `
        <span class="badge badge-primary" style="margin-bottom: 0.75rem;">${course.categoria}</span>
        <h2 id="syllabusModalTitle" style="font-family: var(--font-heading); font-size: 1.65rem; color: var(--color-dark); margin-bottom: 0.5rem;">${course.nombre}</h2>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">${course.descripcion}</p>

        <div style="background: var(--color-surface-subtle); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.85rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.65rem; border: 1px solid var(--color-border);">
          <div><strong>⏱️ Duración:</strong> ${course.duracion}</div>
          <div><strong>📅 Fechas:</strong> ${course.fechas}</div>
          <div><strong>💻 Modalidad:</strong> ${course.modalidad}</div>
          <div><strong>📌 Requisitos:</strong> ${course.requisitos}</div>
          <div style="grid-column: 1/-1;"><strong>📜 Certificación:</strong> ${course.certificacion}</div>
        </div>

        <div style="background: var(--color-surface-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-md); margin-bottom: 1.25rem; font-size: 0.88rem; border-left: 3px solid var(--color-accent);">
          <strong>🎯 Perfil recomendado:</strong> ${course.idealPara}
        </div>

        <h3 style="font-family: var(--font-heading); font-size: 1.15rem; margin-bottom: 0.85rem;">Módulos del Programa:</h3>
        <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.75rem;">
          ${course.temario.map(m => `
            <div style="border-left: 3px solid var(--color-primary); padding-left: 1rem;">
              <strong style="color: var(--color-primary); font-size: 0.85rem;">${m.modulo}: ${m.titulo}</strong>
              <p style="font-size: 0.88rem; color: var(--color-text-muted); margin-top: 0.2rem;">${m.detalle}</p>
            </div>
          `).join("")}
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1.25rem; border-top: 1px solid var(--color-border); flex-wrap: wrap; gap: 1rem;">
          <div>
            <span style="font-size: 0.75rem; color: var(--color-text-muted); display: block;">INVERSIÓN TOTAL (${course.cuotas})</span>
            <span style="font-size: 1.5rem; font-weight: 800; color: var(--color-dark);">$${course.precio} ${course.moneda}</span>
          </div>
          <a href="asesoria.html?curso=${course.id}" class="btn btn-primary">
            Consultar o Inscribirme ↗
          </a>
        </div>
      `;

      modal.classList.add("is-active");
    });
  });
}

/* --------------------------------------------------------------------------
   5. Quiz Diagnóstico Interactivo ("Encuentra tu rumbo")
   -------------------------------------------------------------------------- */
function initDiagnosticQuiz() {
  const quiz = document.getElementById("careerQuiz");
  const banner = document.getElementById("courseConsultationBanner");
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCourseId = urlParams.get("curso");

  // Mostrar banner si el usuario llega consultando por un curso específico
  if (banner && selectedCourseId) {
    const course = CURSOS_TI.find(c => c.id === selectedCourseId);
    if (course) {
      banner.style.display = "block";
      const titleEl = document.getElementById("bannerCourseTitle");
      const summaryEl = document.getElementById("bannerCourseSummary");
      const detailsEl = document.getElementById("bannerCourseDetails");
      const ctaEl = document.getElementById("bannerCourseCta");
      const quizBtn = document.getElementById("bannerStartQuizBtn");

      if (titleEl) titleEl.textContent = course.nombre;
      if (summaryEl) summaryEl.textContent = course.descripcion;
      if (detailsEl) {
        detailsEl.innerHTML = `
          <span>⏱️ <strong>Duración:</strong> ${course.duracion}</span>
          <span>💰 <strong>Inversión:</strong> $${course.precio} ${course.moneda} (${course.cuotas})</span>
          <span>📅 <strong>Fechas:</strong> ${course.fechas}</span>
        `;
      }
      if (ctaEl) ctaEl.href = `cursos.html?highlight=${course.id}`;
      if (quizBtn && quiz) {
        quizBtn.addEventListener("click", () => {
          quiz.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    }
  }

  if (!quiz) return;

  let currentStep = 1;
  const userAnswers = { goal: null, level: null, time: null };

  const steps = quiz.querySelectorAll(".quiz-step");
  const progressBars = quiz.querySelectorAll(".progress-bar");
  const resultCard = document.getElementById("quizResultCard");
  const recommendedCourseEl = document.getElementById("recommendedCourseName");
  const recommendedReasonEl = document.getElementById("recommendedCourseReason");
  const recommendedLinkEl = document.getElementById("recommendedCourseLink");

  quiz.querySelectorAll(".quiz-option").forEach(opt => {
    // Las opciones conservan su presentación visual, pero también funcionan con teclado.
    opt.setAttribute("role", "button");
    opt.setAttribute("tabindex", "0");
    opt.setAttribute("aria-pressed", "false");

    const selectOption = () => {
      const stepEl = opt.closest(".quiz-step");
      if (!stepEl) return;
      const stepIndex = Number.parseInt(stepEl.getAttribute("data-step"), 10);
      const answerValue = opt.getAttribute("data-value");

      // Solo una opción puede quedar seleccionada en cada paso.
      stepEl.querySelectorAll(".quiz-option").forEach(option => {
        option.classList.remove("is-selected");
        option.setAttribute("aria-pressed", "false");
      });
      opt.classList.add("is-selected");
      opt.setAttribute("aria-pressed", "true");

      if (stepIndex === 1) userAnswers.goal = answerValue;
      if (stepIndex === 2) userAnswers.level = answerValue;
      if (stepIndex === 3) userAnswers.time = answerValue;

      if (stepIndex < 3) {
        stepEl.classList.remove("is-active");
        const nextStep = quiz.querySelector(`.quiz-step[data-step="${stepIndex + 1}"]`);
        if (nextStep) nextStep.classList.add("is-active");
        if (progressBars[stepIndex - 1]) {
          progressBars[stepIndex - 1].classList.remove("is-active");
          progressBars[stepIndex - 1].classList.add("is-completed");
        }
        if (progressBars[stepIndex]) progressBars[stepIndex].classList.add("is-active");
      } else {
        stepEl.classList.remove("is-active");
        showRecommendation(userAnswers);
      }
    };

    opt.addEventListener("click", selectOption);
    opt.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectOption();
      }
    });
  });

  function showRecommendation(answers) {
    let matchedCourse = CURSOS_TI[0]; // fallback
    let reason = "";

    if (answers.goal === "web") {
      matchedCourse = CURSOS_TI.find(c => c.id === "desarrollo-web-fullstack");
      reason = "Tu meta de construir soluciones web y aplicaciones escalables encaja directamente con la arquitectura integral de React, Node.js y bases de datos.";
    } else if (answers.goal === "ia") {
      matchedCourse = CURSOS_TI.find(c => c.id === "automatizacion-ia-python");
      reason = "Para optimizar tareas operativas e integrar agentes inteligentes, este programa te da resultados tangibles en Python sin curvas de aprendizaje innecesarias.";
    } else if (answers.goal === "cloud") {
      matchedCourse = CURSOS_TI.find(c => c.id === "cloud-devops");
      reason = "Gestionar infraestructura confiable y desplegar contenedores con Docker y Kubernetes acelerará tu transición a roles de DevOps.";
    } else if (answers.goal === "seguridad") {
      matchedCourse = CURSOS_TI.find(c => c.id === "ciberseguridad-practica");
      reason = "Aprender a auditar y blindar aplicaciones con laboratorios reales te permitirá anticipar y resolver incidentes de seguridad críticos.";
    }

    // Incorporar el nivel y el tiempo disponible al contexto de la recomendación.
    const levelContext = {
      principiante: "Tu nivel inicial sugiere comenzar reforzando fundamentos y avanzar paso a paso.",
      intermedio: "Tu experiencia previa permite aprovechar mejor los ejercicios prácticos y los proyectos.",
      avanzado: "Por tu experiencia profesional, conviene enfocarte en la aplicación y profundización técnica."
    };
    const timeContext = {
      "tiempo-reducido": "Con 4 a 6 horas semanales, prioriza un avance constante y realista.",
      "tiempo-medio": "Con 8 a 10 horas semanales, puedes combinar estudio y práctica con buen equilibrio.",
      "tiempo-intensivo": "Con más de 12 horas semanales, puedes dedicar más tiempo a laboratorios y proyectos."
    };
    const profileContext = [levelContext[answers.level], timeContext[answers.time]]
      .filter(Boolean)
      .join(" ");

    if (resultCard && recommendedCourseEl && recommendedReasonEl) {
      recommendedCourseEl.textContent = matchedCourse.nombre;
      recommendedReasonEl.textContent = [reason, profileContext].filter(Boolean).join(" ");
      if (recommendedLinkEl) {
        recommendedLinkEl.href = `cursos.html?highlight=${matchedCourse.id}`;
      }
      resultCard.style.display = "block";
    }
  }
}

/* --------------------------------------------------------------------------
   6. Acordeón FAQ y Gestión de Anclas Directas
   -------------------------------------------------------------------------- */
function initFAQAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        items.forEach(i => i.classList.remove("is-open"));
        if (!isOpen) item.classList.add("is-open");
      });
    }
  });

  // Abrir y posicionar automáticamente si la URL contiene ancla (#garantia, #privacidad, etc.)
  if (window.location.hash) {
    const targetFaq = document.querySelector(window.location.hash);
    if (targetFaq && targetFaq.classList.contains("faq-item")) {
      targetFaq.classList.add("is-open");
      setTimeout(() => {
        targetFaq.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 250);
    }
  }
}

function initCopyrightYear() {
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });
}
