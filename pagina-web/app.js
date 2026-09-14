(() => {
  'use strict';
  const data = window.COURSE_DATA;
  if (!data || !Array.isArray(data.courses)) {
    document.getElementById('course-grid').innerHTML = '<p>No fue posible cargar el catálogo. Recarga la página o consulta los cursos por WhatsApp al 55 2573 4814.</p>';
    return;
  }
  const courses = data.courses;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icon = (name, extra = '') => `<svg class="icon ${extra}" aria-hidden="true"><use href="#i-${escapeHTML(name)}"/></svg>`;
  const findCourse = id => courses.find(course => course.id === id);
  $$('svg.icon').forEach(svg => svg.setAttribute('aria-hidden', 'true'));
  const normalize = value => value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const dayText = course => course.id === 'excel-power-bi' ? 'Sábados y domingos' : 'Lunes a viernes';
  const dateText = course => course.startDate.endsWith('-26') ? '26 sep. 2026' : '28 sep. 2026';
  const timeText = course => `${course.startTime}–${course.endTime} h`;
  const waLink = message => `${data.whatsappUrl}?text=${encodeURIComponent(message)}`;
  const interestLink = course => waLink(`Hola, me interesa el curso ${course.shortTitle} de Aprende y Avanza, con inicio el ${dateText(course)}. ¿Me compartes disponibilidad, zona horaria y los pasos para inscribirme?`);
  const selectedCourses = new Set();
  let activeFilter = 'all';
  let toastTimer;
  let quizStep = 0;
  let quizGoal = '';
  let quizSchedule = '';

  function toast(message) {
    const box = $('#toast');
    clearTimeout(toastTimer);
    box.textContent = message;
    box.hidden = false;
    toastTimer = setTimeout(() => { box.hidden = true; }, 4500);
  }

  function coverGraphic(course) {
    if (course.theme === 'excel') return '<span class="excel-symbol">X</span><span class="powerbi-symbol"><i></i><i></i><i></i></span>';
    if (course.theme === 'sql') return `${icon('db')}<span>SQL<span class="code-cursor">_</span></span>`;
    if (course.theme === 'git') return `<span class="git-diamond">${icon('git')}</span><span class="git-wordmark">git<span> + GitHub</span></span>`;
    if (course.theme === 'latex') return '<span class="latex-wordmark">L<span class="latex-a">A</span>T<span class="latex-e">E</span>X</span><span class="latex-formula">E = mc²</span>';
    return '<span class="r-symbol">R</span><span class="r-chart"><i></i><i></i><i></i><i></i><i></i></span>';
  }

  function courseCard(course, index) {
    return `<article class="course-card" data-theme="${course.theme}">
      <div class="course-cover"><div class="course-cover-label"><span>DESDE CERO</span><span class="course-number">0${index + 1} / 05</span></div><div class="course-cover-graphic" aria-hidden="true">${coverGraphic(course)}</div><span class="course-cover-caption">${escapeHTML(course.tagline)}</span><span class="cover-arrow" aria-hidden="true">↗</span></div>
      <div class="course-card-body"><p class="course-category">${escapeHTML(course.categoryLabel)}</p><h3 class="course-title"><button data-course="${course.id}" class="course-title-button">${escapeHTML(course.shortTitle)}</button></h3><p class="course-description">${escapeHTML(course.summary)}</p><div class="course-meta"><span>${icon('calendar')} ${dateText(course)}</span><span>${icon('clock')} ${course.hours} horas · 4 semanas</span></div><div class="course-topics">${course.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('')}</div><div class="course-footer"><div class="course-price"><strong>$300 <small>MXN</small></strong><span>Pago único por curso</span></div><span class="course-live"><span class="live-dot"></span> En vivo</span></div><div class="course-actions"><button class="btn btn-primary btn-sm" data-course="${course.id}">Explorar curso ${icon('arrow')}</button><a class="icon-button download-button" href="${course.pdf}" download aria-label="Descargar temario de ${escapeHTML(course.shortTitle)}" title="Descargar temario PDF">${icon('download')}</a></div><label class="compare-checkbox"><input type="checkbox" data-compare="${course.id}" ${selectedCourses.has(course.id) ? 'checked' : ''}><span>Comparar este curso</span></label></div>
    </article>`;
  }

  function renderCourses() {
    const query = normalize($('#course-search').value.trim());
    const filtered = courses.filter(course => (activeFilter === 'all' || course.category === activeFilter) && normalize([course.title, course.shortTitle, course.summary, ...course.tags].join(' ')).includes(query));
    $('#course-grid').innerHTML = filtered.map(course => courseCard(course, courses.indexOf(course))).join('') + (filtered.length === 5 ? `<article class="catalog-help-card"><span class="help-spark" aria-hidden="true">✳</span><p class="eyebrow">UN PRIMER PASO. MUCHAS POSIBILIDADES.</p><h3>No tienes que<br>tenerlo todo claro.<br><span>Solo empezar.</span></h3><p>Si tienes dudas, te ayudamos a elegir según tus metas y tu tiempo.</p><button class="btn btn-white" data-open-quiz>Encuentra tu camino ${icon('up-right')}</button><a href="${waLink('Hola, quisiera orientación para elegir uno de los cursos de septiembre.')}" target="_blank" rel="noopener noreferrer">O conversemos por WhatsApp ${icon('arrow')}</a></article>` : '');
    $('#empty-state').hidden = filtered.length > 0;
    $$('[data-compare]').forEach(input => input.setAttribute('aria-label', `Comparar ${findCourse(input.dataset.compare).shortTitle}`));
    $('#search-status').textContent = `${filtered.length} ${filtered.length === 1 ? 'curso disponible' : 'cursos disponibles'}${query ? ' para tu búsqueda' : ''}.`;
  }

  function openDialog(dialog) {
    $$('dialog[open]').forEach(other => { if (other !== dialog) other.close(); });
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.scrollTop = 0;
  }

  function showCourse(id) {
    const course = findCourse(id);
    if (!course) return;
    $('#course-modal-body').innerHTML = `<div class="course-detail-hero" data-theme="${course.theme}"><p class="detail-eyebrow">${escapeHTML(course.categoryLabel)} · DESDE CERO</p><h2 id="course-modal-title">${escapeHTML(course.shortTitle)}</h2><p class="detail-intro">${escapeHTML(course.summary)}</p><div class="detail-facts"><span>${icon('calendar')} ${dateText(course)}</span><span>${icon('clock')} ${course.hours} horas · ${course.sessions} sesiones</span><span>${icon('video')} Google Meet</span></div><div class="detail-mobile-cta"><strong>$300 <small>MXN</small></strong><a class="btn btn-primary btn-sm" href="${interestLink(course)}" target="_blank" rel="noopener noreferrer">Me interesa ${icon('whatsapp')}</a></div></div>
      <div class="detail-columns"><div class="detail-main"><h3>Esto es lo que vas a lograr</h3><p>${escapeHTML(course.objective)}</p><h3>¿Para quién es este curso?</h3><p>${escapeHTML(course.audience)}</p><div class="syllabus-heading"><h3>Tu ruta de aprendizaje</h3><span>4 semanas · ${course.sessions} sesiones</span></div><div class="module-list">${course.modules.map((module, index) => `<details ${index === 0 ? 'open' : ''}><summary><span class="module-number">0${index + 1}</span><span>${escapeHTML(module.title.replace(/^(Módulo|Semana)\s*\d+\s*[:.]\s*/i, ''))}<small>${module.lessons.length} sesiones</small></span>${icon('plus')}</summary><div class="module-content"><ol class="session-list">${module.lessons.map(lesson => `<li><details class="lesson-details"><summary>${escapeHTML(lesson.title)}${icon('plus')}</summary><ul class="session-topics">${lesson.topics.map(topic => `<li>${escapeHTML(topic)}</li>`).join('')}</ul></details></li>`).join('')}</ol></div></details>`).join('')}</div><div class="project-box"><span class="benefit-icon">${icon('spark')}</span><p class="eyebrow">APRENDE HACIENDO</p><h3>${escapeHTML(course.project.title)}</h3><p>${escapeHTML(course.project.description)}</p><ul>${course.project.deliverables.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></div><h3>Prepara tu primer día</h3><ul class="requirements-list">${course.requirements.map(item => `<li>${icon('check')}${escapeHTML(item)}</li>`).join('')}</ul></div>
      <aside class="detail-sidebar"><div class="detail-price"><small>Tu inversión, un solo pago</small><strong>$300 <span>MXN</span></strong><p>Por el curso completo</p></div><div class="detail-schedule"><span>${icon('calendar')} <strong>Inicio: ${dateText(course)}</strong></span><span>${dayText(course)}</span><strong>${timeText(course)}</strong><span>4 semanas · ${course.sessionHours} ${course.sessionHours === 1 ? 'hora' : 'horas'} por sesión</span></div><a class="btn btn-primary btn-lg" href="${interestLink(course)}" target="_blank" rel="noopener noreferrer">Me interesa ${icon('whatsapp')}</a><a class="btn btn-white" href="${course.pdf}" download>Descargar temario ${icon('download')}</a><h4>Todo esto va incluido</h4><ul class="included-list">${['Clases en vivo por Google Meet','Grabaciones en Google Drive','Google Classroom y WhatsApp','Material y archivos de práctica','Proyecto final guiado','Certificado de participación'].map(item => `<li>${icon('check')} ${item}</li>`).join('')}</ul><p class="detail-note">Consulta disponibilidad, zona horaria e indicaciones de pago por WhatsApp. El certificado digital se entrega al completar el curso.</p></aside></div>`;
    openDialog($('#course-modal'));
  }

  function updateComparison() {
    $('#compare-bar').hidden = selectedCourses.size === 0;
    $('#compare-count').textContent = `${selectedCourses.size} ${selectedCourses.size === 1 ? 'curso seleccionado' : 'cursos seleccionados'} · máximo 3`;
    $('#show-compare').disabled = selectedCourses.size < 2;
    $('#show-compare').title = selectedCourses.size < 2 ? 'Selecciona al menos 2 cursos' : 'Ver comparación';
    $$('[data-compare]').forEach(input => { input.checked = selectedCourses.has(input.dataset.compare); });
    document.body.classList.toggle('has-comparison', selectedCourses.size > 0);
  }

  function showComparison() {
    const chosen = [...selectedCourses].map(findCourse).filter(Boolean);
    if (chosen.length < 2) { toast('Elige al menos dos cursos para compararlos.'); return; }
    const rows = [
      ['Ideal para ti si…', course => course.audience],
      ['Inicio', dateText], ['Días', dayText], ['Horario', timeText],
      ['Duración', course => `4 semanas · ${course.hours} h · ${course.sessions} sesiones`],
      ['Aprenderás', course => course.tags.join(' · ')],
      ['Proyecto final', course => course.project.title],
      ['Inversión', () => '$300 MXN · pago único'],
      ['Incluye', () => 'En vivo, grabaciones, material, comunidad y certificado de participación']
    ];
    $('#compare-body').innerHTML = `<p class="compare-intro">Compara el enfoque, el proyecto y el tiempo de cada curso.</p><div class="comparison-table-wrap" tabindex="0" role="region" aria-label="Tabla comparativa de cursos, desplázate horizontalmente para ver todas las columnas"><table class="comparison-table"><thead><tr><th scope="col">Tu decisión</th>${chosen.map(course => `<th scope="col" data-theme="${course.theme}">${icon(course.icon)} ${escapeHTML(course.shortTitle)}</th>`).join('')}</tr></thead><tbody>${rows.map(([label, value]) => `<tr><th scope="row">${label}</th>${chosen.map(course => `<td>${escapeHTML(value(course))}</td>`).join('')}</tr>`).join('')}<tr><th scope="row">Tu siguiente paso</th>${chosen.map(course => `<td><button class="btn btn-primary btn-sm" data-course="${course.id}">Ver curso ${icon('arrow')}</button></td>`).join('')}</tr></tbody></table></div><p class="detail-note">Confirma la zona horaria y la disponibilidad por WhatsApp antes de inscribirte.</p>`;
    openDialog($('#compare-modal'));
  }

  const goals = [
    {id:'excel-power-bi', icon:'chart', title:'Crear reportes y dashboards', text:'Organizar información y presentar indicadores claros.'},
    {id:'sql', icon:'db', title:'Consultar bases de datos', text:'Encontrar respuestas con consultas, filtros y relaciones.'},
    {id:'git-github', icon:'git', title:'Organizar y compartir mi código', text:'Controlar versiones y colaborar en proyectos.'},
    {id:'latex', icon:'file', title:'Escribir documentos académicos', text:'Dar forma a reportes, ecuaciones y bibliografía.'},
    {id:'r', icon:'code', title:'Analizar datos con programación', text:'Limpiar datos, hacer estadística y crear gráficas.'}
  ];

  function renderQuiz() {
    const box = $('#quiz-body');
    const progress = `<div class="quiz-progress" aria-label="Paso ${Math.min(quizStep + 1, 2)} de 2"><span class="${quizStep >= 0 ? 'active' : ''}"></span><span class="${quizStep >= 1 ? 'active' : ''}"></span></div>`;
    if (quizStep === 0) {
      box.innerHTML = `${progress}<p class="quiz-kicker eyebrow">PASO 01 / 02 · TU OBJETIVO</p><h2 id="quiz-title" tabindex="-1">¿Qué te gustaría hacer?</h2><p>Elige lo que más se parezca a tu próximo proyecto.</p><div class="quiz-options">${goals.map(goal => `<button class="quiz-option" data-quiz-goal="${goal.id}"><span class="quiz-option-icon">${icon(goal.icon)}</span><span><strong>${goal.title}</strong><small>${goal.text}</small></span>${icon('arrow')}</button>`).join('')}</div>`;
    } else if (quizStep === 1) {
      box.innerHTML = `${progress}<p class="quiz-kicker eyebrow">PASO 02 / 02 · TU TIEMPO</p><h2 id="quiz-title" tabindex="-1">¿Qué horario va contigo?</h2><p>Así podrás revisar si el curso encaja con tu semana.</p><div class="quiz-options">${[['weekends','Mis fines de semana','Sábados y domingos por la mañana.'],['weekdays','De lunes a viernes','Una hora diaria por la tarde o noche.'],['flexible','Tengo flexibilidad','Puedo organizarme según el curso.']].map(([id,title,text]) => `<button class="quiz-option" data-quiz-schedule="${id}"><span class="quiz-option-icon">${icon('calendar')}</span><span><strong>${title}</strong><small>${text}</small></span>${icon('arrow')}</button>`).join('')}</div><div class="quiz-navigation"><button class="text-button" data-quiz-back>← Cambiar mi objetivo</button></div>`;
    } else {
      const course = findCourse(quizGoal) || courses[0];
      const isWeekend = course.id === 'excel-power-bi';
      const mismatch = (isWeekend && quizSchedule === 'weekdays') || (!isWeekend && quizSchedule === 'weekends');
      box.innerHTML = `<div class="quiz-result" data-theme="${course.theme}"><span class="result-match">${icon('spark')} UNA BUENA OPCIÓN PARA TU META</span><h2 id="quiz-title" tabindex="-1">${escapeHTML(course.shortTitle)}</h2><p>${escapeHTML(course.summary)}</p><div class="result-project"><small>TU PROYECTO FINAL</small><strong>${escapeHTML(course.project.title)}</strong></div><div class="detail-facts"><span>${icon('calendar')} ${dayText(course)}</span><span>${icon('clock')} ${timeText(course)}</span></div><p class="quiz-schedule-note ${mismatch ? 'schedule-mismatch' : ''}">${mismatch ? 'El contenido coincide con tu objetivo, pero el horario anunciado no coincide con tu preferencia. Escríbenos para consultar opciones antes de inscribirte.' : 'Este horario coincide con tu disponibilidad general. Confirma la zona horaria y el cupo antes de inscribirte.'}</p><div class="detail-actions"><button class="btn btn-primary" data-course="${course.id}">Conocer el curso ${icon('arrow')}</button><a class="btn btn-white" href="${interestLink(course)}" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp ${icon('whatsapp')}</a></div><div class="quiz-navigation"><button class="text-button" data-quiz-back>← Cambiar horario</button><button class="text-button" data-quiz-restart>Volver a empezar</button></div></div>`;
    }
    if ($('#quiz-modal').open) $('#quiz-title').focus({preventScroll:true});
  }

  function openQuiz() {
    quizStep = 0; quizGoal = ''; quizSchedule = '';
    renderQuiz();
    openDialog($('#quiz-modal'));
    $('#quiz-title').focus({preventScroll:true});
  }

  function closeMobileMenu() {
    $('#mobile-nav').hidden = true;
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
    $('#menu-toggle').setAttribute('aria-label', 'Abrir menú');
  }

  document.addEventListener('click', event => {
    const courseButton = event.target.closest('[data-course]');
    if (courseButton) showCourse(courseButton.dataset.course);
    if (event.target.closest('[data-open-quiz]')) openQuiz();
    const close = event.target.closest('[data-close-dialog]');
    if (close) close.closest('dialog').close();
    const filter = event.target.closest('[data-filter]');
    if (filter) {
      activeFilter = filter.dataset.filter;
      $$('[data-filter]').forEach(button => { const active = button === filter; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); });
      renderCourses();
    }
    const goal = event.target.closest('[data-quiz-goal]');
    if (goal) { quizGoal = goal.dataset.quizGoal; quizStep = 1; renderQuiz(); }
    const schedule = event.target.closest('[data-quiz-schedule]');
    if (schedule) { quizSchedule = schedule.dataset.quizSchedule; quizStep = 2; renderQuiz(); }
    if (event.target.closest('[data-quiz-back]')) { quizStep = Math.max(0, quizStep - 1); renderQuiz(); }
    if (event.target.closest('[data-quiz-restart]')) { quizStep = 0; renderQuiz(); }
    if (event.target.closest('#mobile-nav a')) closeMobileMenu();
  });

  $('#course-search').addEventListener('input', renderCourses);
  $('#clear-filters').addEventListener('click', () => {
    $('#course-search').value = '';
    $('[data-filter="all"]').click();
    $('#course-search').focus();
  });
  document.addEventListener('change', event => {
    const input = event.target.closest('[data-compare]');
    if (!input) return;
    if (input.checked && selectedCourses.size >= 3) { input.checked = false; toast('Puedes comparar hasta 3 cursos. Quita uno para agregar otro.'); return; }
    if (input.checked) selectedCourses.add(input.dataset.compare); else selectedCourses.delete(input.dataset.compare);
    updateComparison();
  });
  $('#show-compare').addEventListener('click', showComparison);
  $('#clear-compare').addEventListener('click', () => { selectedCourses.clear(); updateComparison(); });
  $('#menu-toggle').addEventListener('click', () => {
    const open = $('#mobile-nav').hidden;
    $('#mobile-nav').hidden = !open;
    $('#menu-toggle').setAttribute('aria-expanded', String(open));
    $('#menu-toggle').setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMobileMenu(); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMobileMenu(); });
  $$('dialog').forEach(dialog => {
    let pointerStartedOutside = false;
    dialog.addEventListener('pointerdown', event => { pointerStartedOutside = event.target === dialog; });
    dialog.addEventListener('click', event => {
      if (pointerStartedOutside && event.target === dialog) {
        const bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
      }
      pointerStartedOutside = false;
    });
    dialog.addEventListener('close', () => { if (!$('dialog[open]')) document.body.classList.remove('modal-open'); });
  });
  $('#privacy-button').addEventListener('click', () => openDialog($('#privacy-modal')));
  $$('[data-whatsapp]').forEach(link => { link.href = waLink(link.dataset.whatsapp); });

  $('#schedule-body').innerHTML = [courses[0], ...courses.slice(1).sort((a,b) => a.startTime.localeCompare(b.startTime))].map(course => `<tr><th scope="row"><span class="schedule-course-icon" data-theme="${course.theme}">${icon(course.icon)}</span><span>${escapeHTML(course.shortTitle)}<small>Desde cero · en línea</small></span></th><td>${dateText(course)}</td><td><strong>${dayText(course)}</strong><span>${timeText(course)}</span></td><td><strong>${course.hours} horas</strong><span>${course.sessions} sesiones · 4 semanas</span></td><td><button class="text-link" data-course="${course.id}">Ver curso ${icon('up-right')}</button></td></tr>`).join('');
  courses.forEach(course => { const option = document.createElement('option'); option.value = course.id; option.textContent = `${course.shortTitle} · $300 MXN`; $('#contact-course').append(option); });
  $('#contact-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const name = $('#contact-name').value.trim();
    const selected = $('#contact-course').value;
    const course = findCourse(selected);
    const message = $('#contact-message').value.trim();
    const text = `${name ? `Hola, soy ${name}.` : 'Hola.'} ${course ? `Me interesa el curso ${course.shortTitle} de Aprende y Avanza, con inicio el ${dateText(course)}.` : 'Me gustaría recibir orientación para elegir un curso de Aprende y Avanza.'}${message ? `\n\n${message}` : '\n\n¿Me compartes disponibilidad, zona horaria y los pasos para inscribirme?'}`;
    const url = waLink(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    const status = $('#form-status');
    status.replaceChildren(document.createTextNode('Tu mensaje está preparado. Si WhatsApp no se abrió, '));
    const link = document.createElement('a'); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'pulsa aquí para continuar';
    status.append(link, document.createTextNode('. Revisa y envía tu mensaje allí.')); status.hidden = false;
  });
  $('#current-year').textContent = new Date().getFullYear();
  renderCourses();
  updateComparison();
})();
