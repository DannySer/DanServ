
"use strict";
document.documentElement.classList.add("js");
const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
function closeMenu(){if(!nav||!menuButton)return;nav.classList.remove("is-open");menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Abrir menú");}
if(menuButton&&nav){menuButton.addEventListener("click",()=>{const open=menuButton.getAttribute("aria-expanded")!=="true";menuButton.setAttribute("aria-expanded",String(open));menuButton.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");nav.classList.toggle("is-open",open);});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeMenu));document.addEventListener("keydown",e=>{if(e.key==="Escape"&&menuButton.getAttribute("aria-expanded")==="true"){closeMenu();menuButton.focus();}});window.matchMedia("(min-width:761px)").addEventListener("change",e=>{if(e.matches)closeMenu();});}
document.querySelectorAll("a[data-link]").forEach(a=>{const raw=(window.SITE_LINKS||{})[a.dataset.link];try{const u=new URL(typeof raw==="string"?raw.trim():"");if(!["http:","https:"].includes(u.protocol))return;a.href=u.href;a.target="_blank";a.rel="noopener noreferrer";a.hidden=false;}catch(_){a.hidden=true;a.removeAttribute("href");}});
function downloadText(filename,text){const blob=new Blob([text],{type:"text/plain;charset=utf-8"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=filename;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function resultLine(label,value){const div=document.createElement("div");div.className="result-line";const dt=document.createElement("dt");dt.textContent=label;const dd=document.createElement("dd");dd.textContent=value;div.append(dt,dd);return div;}
function trimForm(form){form.querySelectorAll("input:not([type=checkbox]):not([type=number]):not([type=date]),textarea").forEach(field=>{field.value=field.value.trim();field.setCustomValidity("");});}
function setStatus(id,message){const node=document.getElementById(id);if(node)node.textContent=message;}
document.querySelectorAll("input,textarea,select").forEach(field=>{field.addEventListener("input",()=>field.setCustomValidity(""));field.addEventListener("change",()=>field.setCustomValidity(""));field.addEventListener("invalid",()=>{if(field.validity.valueMissing)field.setCustomValidity("Completa este campo para continuar.");else if(field.validity.typeMismatch&&field.type==="email")field.setCustomValidity("Escribe un correo válido, por ejemplo nombre@dominio.com.");else if(field.validity.tooShort)field.setCustomValidity("Añade un poco más de detalle para preparar el resultado.");});});
const contactForm=document.getElementById("contact-form");
if(contactForm){contactForm.addEventListener("submit",e=>{e.preventDefault();trimForm(contactForm);if(!contactForm.reportValidity())return;const values=new FormData(contactForm);const body=["Hola,", "", "Mi nombre es "+values.get("nombre")+".",values.get("email")?"Mi correo: "+values.get("email"):"","Tema: "+values.get("tema"),"",values.get("mensaje"),"","Gracias."].filter(x=>x!==null).join("\n");const subject="Consulta · "+values.get("tema");const a=document.getElementById("prepared-email");a.href="mailto:"+contactForm.dataset.email+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);a.hidden=false;setStatus("contact-status","Tu correo está preparado. Pulsa «Abrir mi correo» para revisarlo y enviarlo desde tu aplicación.");a.focus();});}


const learningForm=document.getElementById("learning-form");
if(learningForm){let report="";const byLevel={inicio:"¿El curso comienza desde cero y qué requisitos necesito?",bases:"¿Qué conocimientos previos se esperan y qué temas amplían lo que ya sé?",experiencia:"¿Qué profundidad tiene el programa y qué proyectos o aplicaciones desarrolla?"};learningForm.addEventListener("submit",e=>{e.preventDefault();trimForm(learningForm);if(window.prepareLearningReview&&!window.prepareLearningReview())return;if(!learningForm.reportValidity())return;const d=new FormData(learningForm);const level=document.getElementById("learning-level").selectedOptions[0].textContent;const entries=[["Nombre",String(d.get("nombre")).trim()],["Tema de interés",String(d.get("tema")).trim()],["Lo que quiero lograr",String(d.get("objetivo")).trim()],["Mi punto de partida",level],["Modalidad preferida",String(d.get("modalidad"))],["Tiempo disponible",d.get("horas")+" horas por semana"]];if(String(d.get("inicio")).trim())entries.push(["Me gustaría empezar",String(d.get("inicio")).trim()]);const summary=document.getElementById("learning-summary");summary.replaceChildren();entries.forEach(([k,v])=>summary.append(resultLine(k,v)));const questions=[byLevel[d.get("nivel")],"¿Qué contenidos y actividades se relacionan con mi objetivo?","¿Cuál es la dedicación semanal y coincide con mi disponibilidad?","¿Qué fechas, horarios, modalidad, precio y condiciones están disponibles?"];const list=document.getElementById("learning-questions");list.replaceChildren();questions.forEach(q=>{const li=document.createElement("li");li.textContent=q;list.append(li);});report="MI FICHA DE NECESIDADES DE FORMACIÓN\n"+new Date().toLocaleDateString("es")+"\n\n"+entries.map(([k,v])=>k.toUpperCase()+"\n"+v).join("\n\n")+"\n\nPREGUNTAS PARA MI CONSULTA\n"+questions.map((q,i)=>(i+1)+". "+q).join("\n")+"\n\nContacto: daniel_servicios@outlook.com\n";document.getElementById("learning-empty").hidden=true;document.getElementById("learning-result").hidden=false;document.getElementById("learning-send").href="mailto:daniel_servicios@outlook.com?subject="+encodeURIComponent("Consulta de formación: "+d.get("tema"))+"&body="+encodeURIComponent("Hola, Daniel. Me gustaría solicitar información a partir de esta ficha.\n\n"+report);setStatus("learning-status","Tu ficha está lista. Puedes descargarla o abrir una consulta por correo.");});document.getElementById("learning-download").addEventListener("click",()=>{if(report)downloadText("mi-ficha-de-formacion.txt",report);});learningForm.addEventListener("reset",()=>{report="";document.getElementById("learning-empty").hidden=false;document.getElementById("learning-result").hidden=true;document.getElementById("learning-send").removeAttribute("href");setStatus("learning-status","Se han limpiado tus respuestas.");});}

/* A three-step learning brief; all fields remain available without enhancement. */
(() => {
  const form = document.getElementById("learning-form");
  if (!form) return;
  const steps = [0, 1, 2].map(i => document.getElementById("learning-step-" + i));
  const progress = document.getElementById("learning-progress");
  const buttons = progress.querySelectorAll("button");
  const previous = document.getElementById("learning-prev");
  const next = document.getElementById("learning-next");
  const submit = document.getElementById("learning-submit");
  const caption = document.getElementById("learning-step-caption");
  const names = ["Tu objetivo", "Tu punto de partida", "Tu disponibilidad"];
  let current = 0;
  function show(index, focus) {
    current = index;
    steps.forEach((step, i) => { step.hidden = i !== index; });
    buttons.forEach((button, i) => {
      if (i === index) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
    previous.hidden = index === 0;
    next.hidden = index === 2;
    submit.hidden = index !== 2;
    caption.textContent = "Paso " + (index + 1) + " de 3 · " + names[index];
    if (focus) document.getElementById("learning-legend-" + index).focus();
  }
  function validate(index) {
    const fields = steps[index].querySelectorAll("input,textarea,select");
    for (const field of fields) {
      field.setCustomValidity("");
      if (field.type !== "number") field.value = field.value.trim();
      if (!field.checkValidity()) {
        show(index, false);
        field.reportValidity();
        field.focus();
        setStatus("learning-status", "Revisa los campos de «" + names[index] + "» para continuar.");
        return false;
      }
    }
    return true;
  }
  next.addEventListener("click", () => {
    if (validate(current)) { setStatus("learning-status", ""); show(Math.min(current + 1, 2), true); }
  });
  previous.addEventListener("click", () => { setStatus("learning-status", ""); show(Math.max(current - 1, 0), true); });
  buttons.forEach((button, i) => button.addEventListener("click", () => {
    if (i > current) {
      for (let step = current; step < i; step++) if (!validate(step)) return;
    }
    setStatus("learning-status", "");
    show(i, true);
  }));
  window.prepareLearningReview = () => {
    for (let i = 0; i < steps.length; i++) if (!validate(i)) return false;
    show(2, false);
    return true;
  };
  form.setAttribute("novalidate", "");
  form.addEventListener("reset", () => show(0, false));
  progress.hidden = false;
  caption.hidden = false;
  show(0, false);
})();

/* Course content is supplied exclusively by the owner's catalogo.js file. */
(() => {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;
  const toolbar = document.getElementById("catalog-toolbar");
  const empty = document.getElementById("catalog-empty");
  const noResults = document.getElementById("catalog-no-results");
  const count = document.getElementById("catalog-count");
  const search = document.getElementById("catalog-search");
  const area = document.getElementById("catalog-area");
  const mode = document.getElementById("catalog-mode");
  const text = (value, length = 2000) => typeof value === "string" ? value.trim().slice(0, length) : "";
  const normalize = value => value.toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const courses = (Array.isArray(window.CURSOS) ? window.CURSOS : []).filter(course => course && typeof course === "object" && text(course.titulo)).map(course => ({
    titulo: text(course.titulo, 160), area: text(course.area, 100), modalidad: text(course.modalidad, 100),
    nivel: text(course.nivel, 120), duracion: text(course.duracion, 120), descripcion: text(course.descripcion),
    precio: text(course.precio, 100), fecha: text(course.fecha, 160), enlace: text(course.enlace, 1500)
  }));
  if (!courses.length) return;
  function populate(select, values) {
    [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "es")).forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.append(option);
    });
  }
  function card(course) {
    const article = document.createElement("article"); article.className = "course-card";
    if (course.area) { const label = document.createElement("p"); label.className = "course-area"; label.textContent = course.area; article.append(label); }
    const heading = document.createElement("h2"); heading.textContent = course.titulo; article.append(heading);
    if (course.descripcion) { const description = document.createElement("p"); description.className = "course-description"; description.textContent = course.descripcion; article.append(description); }
    const pairs = [["Modalidad", course.modalidad], ["Nivel", course.nivel], ["Duración", course.duracion], ["Precio", course.precio], ["Fecha", course.fecha]].filter(([, value]) => value);
    if (pairs.length) {
      const list = document.createElement("dl"); list.className = "course-meta";
      pairs.forEach(([label, value]) => {
        const wrapper = document.createElement("div");
        const dt = document.createElement("dt"); dt.textContent = label;
        const dd = document.createElement("dd"); dd.textContent = value;
        wrapper.append(dt, dd); list.append(wrapper);
      });
      article.append(list);
    }
    const actions = document.createElement("div"); actions.className = "actions";
    const query = document.createElement("a"); query.className = "btn"; query.textContent = "Consultar este curso";
    query.href = "mailto:daniel_servicios@outlook.com?subject=" + encodeURIComponent("Consulta de curso: " + course.titulo) + "&body=" + encodeURIComponent("Hola, Daniel. Me interesa «" + course.titulo + "». Quisiera confirmar el temario, los requisitos, la disponibilidad y las condiciones de inscripción.\n\nMi objetivo de aprendizaje es: ");
    actions.append(query);
    if (course.enlace) {
      try {
        const url = new URL(course.enlace);
        if (["https:", "http:"].includes(url.protocol)) {
          const link = document.createElement("a"); link.className = "text-link"; link.textContent = "Ver información";
          link.href = url.href; link.target = "_blank"; link.rel = "noopener noreferrer"; actions.append(link);
        }
      } catch (_) { /* Invalid external links are omitted; inquiry remains available. */ }
    }
    article.append(actions);
    return article;
  }
  function render() {
    const query = normalize(search.value.trim());
    const selected = courses.filter(course => (!area.value || course.area === area.value) && (!mode.value || course.modalidad === mode.value) && (!query || normalize([course.titulo, course.descripcion, course.area, course.nivel].join(" ")).includes(query)));
    grid.replaceChildren();
    selected.forEach(course => grid.append(card(course)));
    count.textContent = selected.length + (selected.length === 1 ? " opción" : " opciones") + " de " + courses.length + (courses.length === 1 ? " publicada" : " publicadas");
    noResults.hidden = selected.length !== 0;
  }
  populate(area, courses.map(course => course.area));
  populate(mode, courses.map(course => course.modalidad));
  search.addEventListener("input", render);
  area.addEventListener("change", render);
  mode.addEventListener("change", render);
  document.getElementById("catalog-reset").addEventListener("click", () => {
    search.value = ""; area.value = ""; mode.value = ""; render(); search.focus();
  });
  toolbar.hidden = false;
  count.hidden = false;
  empty.hidden = true;
  render();
})();

/* Invalidate prepared output when its source fields change. Nothing is sent automatically. */
(() => {
  const contact = document.getElementById("contact-form");
  if (contact) {
    const prepared = document.getElementById("prepared-email");
    const invalidate = () => {
      if (prepared.hidden) return;
      prepared.hidden = true;
      prepared.removeAttribute("href");
      setStatus("contact-status", "Has cambiado el mensaje. Vuelve a preparar el correo para incluir tus cambios.");
    };
    contact.querySelectorAll("input,textarea,select").forEach(field => {
      field.addEventListener("input", invalidate);
      field.addEventListener("change", invalidate);
    });
  }
  const tool = document.getElementById("focus-form") || document.getElementById("learning-form");
  if (!tool) return;
  const prefix = tool.id === "focus-form" ? "focus" : "learning";
  const result = document.getElementById(prefix + "-result");
  const empty = document.getElementById(prefix + "-empty");
  const invalidate = () => {
    if (result.hidden) return;
    result.hidden = true;
    empty.hidden = false;
    const send = document.getElementById("learning-send");
    if (send) send.removeAttribute("href");
    setStatus(prefix + "-status", "Has cambiado tus respuestas. Genera de nuevo el resultado para incluir tus cambios.");
  };
  tool.querySelectorAll("input,textarea,select").forEach(field => {
    field.addEventListener("input", invalidate);
    field.addEventListener("change", invalidate);
  });
})();
