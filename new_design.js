// ===== PLAAN LOGIN — FINAL JS v7 =====
(function() {
  'use strict';

  var emailSVG = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="2" y="5" width="24" height="18" rx="4" fill="#3b5bdb" opacity="0.85"/><path d="M2 9l12 8 12-8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>';

  var lockSVG = '<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="5" y="12" width="18" height="13" rx="3.5" fill="#3b5bdb" opacity="0.85"/><path d="M9 12V9a5 5 0 0110 0v3" stroke="#5c7cfa" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="14" cy="19" r="2" fill="#fff"/><path d="M14 21v2" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>';

  function init() {
    // 0. Шрифты
    if (!document.getElementById('plaan-fonts')) {
      var link = document.createElement('link');
      link.id = 'plaan-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800&display=swap';
      document.head.appendChild(link);
    }

    // 1. Логотип
    var logo = document.querySelector('.gc-account-logo .logo-link img');
    if (logo) {
      logo.src = 'https://fs.getcourse.ru/fileservice/file/download/a/677405/sc/390/h/f4a5ab9447bb5aedb5e2fc781098f3dc.png';
      logo.style.cssText = 'height:50px!important;width:auto!important;filter:none!important;';
    }

    // 2. Обёртка для двойной рамки
    var form = document.querySelector('form.xdget-loginUserForm');
    if (form && !form.parentElement.classList.contains('plaan-card-outer')) {
      var wrapper = document.createElement('div');
      wrapper.className = 'plaan-card-outer';
      form.parentNode.insertBefore(wrapper, form);
      wrapper.appendChild(form);
    }

    // 3. SVG иконки
    var forms = document.querySelectorAll('.login-form, .register-form');
    forms.forEach(function(f) {
      var fields = f.querySelectorAll('.xdget-formField');
      fields.forEach(function(field, i) {
        field.querySelectorAll('.plaan-field-icon').forEach(function(el) { el.remove(); });
        var icon = document.createElement('div');
        icon.className = 'plaan-field-icon';
        if (i === 0) icon.innerHTML = emailSVG;
        else if (i === 1) icon.innerHTML = lockSVG;
        else return;
        field.style.position = 'relative';
        field.insertBefore(icon, field.firstChild);
      });
    });

    // 4. Текст кнопок
    document.querySelectorAll('.login-form .btn-success').forEach(function(btn) {
      var t = btn.textContent.trim().replace(/\s+/g, ' ');
      if (t === 'Войти' || t.indexOf('ВОЙТИ') !== -1) {
        btn.innerHTML = '<span style="position:relative;z-index:2">ВОЙТИ \u00A0\u00BB</span>';
      }
    });
    document.querySelectorAll('.register-form .btn-success').forEach(function(btn) {
      var t = btn.textContent.trim().replace(/\s+/g, ' ');
      if (t === 'Зарегистрироваться' || t.indexOf('РЕГИСТРАЦИЯ') !== -1) {
        btn.innerHTML = '<span style="position:relative;z-index:2">РЕГИСТРАЦИЯ \u00A0\u00BB</span>';
      }
    });

    // 4b. "Забыли пароль?" — меняем текст + иконка i + перемещаем над кнопкой
    var remindBtn = document.querySelector('.login-form .btn-remind');
    var submitBtn = document.querySelector('.login-form .btn-success');
    if (remindBtn && !remindBtn.querySelector('.plaan-info-icon')) {
      remindBtn.textContent = 'Забыли пароль?';
      var infoIcon = document.createElement('span');
      infoIcon.className = 'plaan-info-icon';
      infoIcon.innerHTML = 'i';
      remindBtn.appendChild(infoIcon);
      infoIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        var card = document.querySelector('.plaan-tooltip-card');
        if (card) card.classList.toggle('active');
      });
    }
    // Перемещаем перед кнопкой ВОЙТИ
    if (remindBtn && submitBtn && submitBtn.parentNode === remindBtn.parentNode) {
      remindBtn.parentNode.insertBefore(remindBtn, submitBtn);
    }

    // 4c. Карточка-подсказка ПОД формой
    var cardOuter = document.querySelector('.plaan-card-outer');
    if (cardOuter && !document.querySelector('.plaan-tooltip-card')) {
      var tip = document.createElement('div');
      tip.className = 'plaan-tooltip-card';
      tip.innerHTML = '<div class="plaan-tooltip-header"><span class="plaan-tooltip-title">Забыли пароль? Не проблема</span><span class="plaan-info-icon" style="cursor:default">i</span></div>' +
        '<ol>' +
          '<li>Нажмите кнопку «Забыли пароль?».</li>' +
          '<li>Введите почту, которую указывали при записи на обучение.</li>' +
          '<li>Подтвердите отправку — мы пришлём письмо с доступом.</li>' +
          '<li>Откройте письмо и перейдите по ссылке.</li>' +
          '<li>В личном кабинете зайдите в раздел «Профиль».</li>' +
          '<li>Установите новый пароль — и вы снова в игре \uD83D\uDE80</li>' +
        '</ol>';
      cardOuter.parentNode.insertBefore(tip, cardOuter.nextSibling);
    }

    // 5. Лейбл "Авторизация через"
    document.querySelectorAll('.xdget-loginUserForm .xdget-socialUserFormField').forEach(function(s) {
      if (s.querySelector('.plaan-social-label')) return;
      var lbl = document.createElement('div');
      lbl.className = 'plaan-social-label';
      lbl.textContent = 'Авторизация через';
      s.insertBefore(lbl, s.firstChild);
    });

    // 6. Footer
    var formEl = document.querySelector('form.xdget-loginUserForm');
    if (formEl && !formEl.querySelector('.plaan-footer')) {
      var ft = document.createElement('div');
      ft.className = 'plaan-footer';
      ft.innerHTML = '<div class="plaan-footer-left">\u00A9\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b<br><br>\u041f\u043e \u0432\u0441\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043e\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c<br>\u043f\u043e \u0444\u043e\u0440\u043c\u0435 <a href="/cms/system/contact">\u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438</a></div><div class="plaan-footer-right"><a href="/oferta_neuro">\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043e\u0444\u0435\u0440\u0442\u044b</a><br><a href="https://web.plaan.ai/privacy">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</a></div>';
      formEl.appendChild(ft);
    }

    // 7. Скрыть обратную связь
    var obs = document.getElementById('xdget124522_1');
    if (obs) obs.style.display = 'none';
    // Также ищем по содержимому
    document.querySelectorAll('.area-PAGE > .xdget-html').forEach(function(el) {
      if (el.textContent.trim().indexOf('Обратная связь') !== -1) {
        el.style.display = 'none';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  setTimeout(init, 300);
  setTimeout(init, 800);
  setTimeout(init, 2000);
})();