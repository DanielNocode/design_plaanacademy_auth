// ===== PLAAN LOGIN — JS v9 (по полной Figma-спецификации) =====
(function () {
  'use strict';

  // === SVG-иконки полей: Figma — 24x24, цвет #4A47FE ===
  var emailSVG =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M2 7l10 7 10-7" stroke="#4A47FE" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<rect x="2" y="4" width="20" height="16" rx="3" stroke="#4A47FE" stroke-width="1.8"/>' +
    '</svg>';

  var lockSVG =
    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="5" y="11" width="14" height="10" rx="2" stroke="#4A47FE" stroke-width="1.8"/>' +
    '<path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#4A47FE" stroke-width="1.8" stroke-linecap="round"/>' +
    '</svg>';

  // === Figma chevron icon для кнопки (22x16) ===
  var chevronSVG =
    '<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M5.5 0L11 8L5.5 16" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M12 0L17.5 8L12 16" stroke="#0A0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';

  // === CDN URLs ===
  var LOGO_URL =
    'https://fs.getcourse.ru/fileservice/file/download/a/677405/sc/390/h/f4a5ab9447bb5aedb5e2fc781098f3dc.png';

  // Geologica + Unbounded
  var FONT_URL =
    'https://fonts.googleapis.com/css2?family=Geologica:wght@200;300;400;500;600;700&family=Unbounded:wght@400;500;700;800&display=swap';

  function init() {
    // Guard: не запускать повторно если уже инициализировано
    if (document.querySelector('.plaan-card-outer')) return;

    var form = document.querySelector('form.xdget-loginUserForm');
    if (!form) return;

    // === 0. Подключаем шрифты Geologica + Unbounded ===
    if (!document.getElementById('plaan-fonts')) {
      var link = document.createElement('link');
      link.id = 'plaan-fonts';
      link.rel = 'stylesheet';
      link.href = FONT_URL;
      document.head.appendChild(link);
    }

    // === 1. Заменяем URL логотипа ===
    var logoImg = document.querySelector('.gc-account-logo .logo-link img');
    if (logoImg) {
      logoImg.src = LOGO_URL;
      logoImg.style.cssText =
        'max-width:258px!important;height:55px!important;display:block!important;margin:0 auto!important;object-fit:contain!important;';
    }

    // === 2. Оборачиваем форму в div.plaan-card-outer ===
    var wrapper = document.createElement('div');
    wrapper.className = 'plaan-card-outer';
    form.parentNode.insertBefore(wrapper, form);
    wrapper.appendChild(form);

    // === 3. SVG-иконки в полях ввода (24x24, #4A47FE) ===
    var formStates = form.querySelectorAll('.login-form, .register-form');
    formStates.forEach(function (stateForm) {
      var fields = stateForm.querySelectorAll('.xdget-formField');
      fields.forEach(function (field, i) {
        field.querySelectorAll('.plaan-field-icon').forEach(function (el) { el.remove(); });

        var inputBlock = field.querySelector('.field-input-block');
        if (!inputBlock) return;

        var icon = document.createElement('div');
        icon.className = 'plaan-field-icon';
        if (i === 0) {
          icon.innerHTML = emailSVG;
        } else if (i === 1) {
          icon.innerHTML = lockSVG;
        } else {
          return;
        }
        inputBlock.insertBefore(icon, inputBlock.firstChild);
      });
    });

    // === 4a. Текст кнопки "ВОЙТИ" + chevron SVG ===
    form.querySelectorAll('.login-form .btn-success').forEach(function (btn) {
      btn.innerHTML =
        '<span style="position:relative;z-index:2">ВОЙТИ</span>' +
        '<span style="position:relative;z-index:2;display:inline-flex;align-items:center">' + chevronSVG + '</span>';
    });

    form.querySelectorAll('.register-form .btn-success').forEach(function (btn) {
      btn.innerHTML =
        '<span style="position:relative;z-index:2">РЕГИСТРАЦИЯ</span>' +
        '<span style="position:relative;z-index:2;display:inline-flex;align-items:center">' + chevronSVG + '</span>';
    });

    // === 4b. "Восстановить пароль" → "Забыли пароль?" + info icon ===
    var remindBtn = form.querySelector('.login-form .btn-remind');
    var submitBtn = form.querySelector('.login-form .btn-success');

    if (remindBtn) {
      remindBtn.textContent = 'Забыли пароль?';

      // Figma: material-symbols:info, 24x24, color #FE9347
      var infoIcon = document.createElement('span');
      infoIcon.className = 'plaan-info-icon';
      infoIcon.innerHTML =
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="#FE9347" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>' +
        '</svg>';
      remindBtn.appendChild(infoIcon);

      infoIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var tooltip = document.querySelector('.plaan-tooltip-card');
        if (tooltip) tooltip.classList.toggle('active');
      });
    }

    // === 4c. Middle row: checkbox + "Забыли пароль?" ===
    var formButtons = form.querySelector('.login-form .form-buttons');
    if (formButtons && remindBtn && submitBtn) {
      var middleRow = document.createElement('div');
      middleRow.className = 'plaan-middle-row';

      // Figma: checkbox 20x20 bg #FE9347, Geologica 300 12px
      var consent = document.createElement('label');
      consent.className = 'plaan-consent';
      consent.innerHTML =
        '<input type="checkbox" checked>' +
        '<span>Даю согласие на обработку персональных данных ' +
        'в соответствии с <a href="https://web.plaan.ai/privacy" target="_blank">Политикой</a></span>';
      middleRow.appendChild(consent);

      middleRow.appendChild(remindBtn);
      formButtons.insertBefore(middleRow, submitBtn);
    }

    // === 4d. Tooltip: Figma — #131314, R=20, padding 18px 36px ===
    var cardOuter = document.querySelector('.plaan-card-outer');
    if (cardOuter && !document.querySelector('.plaan-tooltip-card')) {
      var tooltip = document.createElement('div');
      tooltip.className = 'plaan-tooltip-card';
      // Figma: flex row, space-between — text block + info icon
      tooltip.innerHTML =
        '<div style="display:flex;flex-direction:column;gap:10px;flex:1">' +
        '<span class="plaan-tooltip-title">Забыли пароль? Не проблема</span>' +
        '<div style="font-size:12px;font-weight:300;color:#FFFFFF;opacity:0.8;line-height:20px">' +
        '1. Введите почту, которую указывали при записи на обучение.<br>' +
        '2. Подтвердите отправку — мы пришлём письмо с доступом.<br>' +
        '3. Откройте письмо и перейдите по ссылке.<br>' +
        '4. В личном кабинете зайдите в раздел «Профиль».<br>' +
        '5. Установите новый пароль — и вы снова в игре \uD83D\uDE80' +
        '</div></div>' +
        '<span class="plaan-info-icon" style="cursor:default;flex-shrink:0">' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="#FE9347"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>' +
        '</span>';
      cardOuter.parentNode.insertBefore(tooltip, cardOuter.nextSibling);
    }

    // === 4e. Mobile: show tooltip in remind-block above email on click ===
    var tooltipEl = document.querySelector('.plaan-tooltip-card');
    if (tooltipEl && remindBtn) {
      var _tOrigParent = tooltipEl.parentNode;
      var _tOrigNext = tooltipEl.nextSibling;

      function restoreTooltip() {
        if (tooltipEl.parentNode !== _tOrigParent) {
          if (_tOrigNext && _tOrigNext.parentNode === _tOrigParent) {
            _tOrigParent.insertBefore(tooltipEl, _tOrigNext);
          } else if (_tOrigParent) {
            _tOrigParent.appendChild(tooltipEl);
          }
        }
        tooltipEl.classList.remove('active');
      }

      // Click on "Забыли пароль?" → move tooltip into remind-block
      remindBtn.addEventListener('click', function () {
        if (window.innerWidth > 768) return;
        var attempts = 0;
        (function tryMove() {
          var rb = form.querySelector('.remind-block');
          if (rb) {
            if (!rb.contains(tooltipEl)) {
              var field = rb.querySelector('.form-field') ||
                          rb.querySelector('.xdget-formField') ||
                          rb.querySelector('.field-input-block') ||
                          rb.querySelector('input');
              if (field) {
                var target = field;
                while (target.parentNode && target.parentNode !== rb) {
                  target = target.parentNode;
                }
                rb.insertBefore(tooltipEl, target);
              } else {
                rb.insertBefore(tooltipEl, rb.firstChild);
              }
              tooltipEl.classList.add('active');
            }
            // Listen for "Вернуться" / back button to restore tooltip
            var backBtn = rb.querySelector('.btn-link, .btn-back');
            if (backBtn) {
              backBtn.addEventListener('click', function () {
                setTimeout(restoreTooltip, 300);
              }, { once: true });
            }
          } else if (++attempts < 10) {
            setTimeout(tryMove, 300);
          }
        })();
      });
    }

    // === 5. Лейбл "Авторизация через" ===
    form.querySelectorAll('.xdget-socialUserFormField').forEach(function (social) {
      if (social.querySelector('.plaan-social-label')) return;
      var label = document.createElement('span');
      label.className = 'plaan-social-label';
      label.textContent = 'Авторизация через';
      social.insertBefore(label, social.firstChild);
    });

    // === 6. Footer: Figma — Geologica 200 10px ===
    if (!form.querySelector('.plaan-footer')) {
      var footer = document.createElement('div');
      footer.className = 'plaan-footer';
      footer.innerHTML =
        '<div class="plaan-footer-left">' +
        '\u00A9\u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b<br><br>' +
        '\u041f\u043e \u0432\u0441\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043e\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c<br>' +
        '\u043f\u043e \u0444\u043e\u0440\u043c\u0435 <a href="/cms/system/contact">\u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438</a>' +
        '</div>' +
        '<div class="plaan-footer-right">' +
        '<a href="/oferta_neuro">\u0414\u043e\u0433\u043e\u0432\u043e\u0440 \u043e\u0444\u0435\u0440\u0442\u044b</a>' +
        '<a href="https://web.plaan.ai/privacy">\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438</a>' +
        '</div>';
      form.appendChild(footer);
    }

    // === 7. Скрыть "Обратная связь" ===
    document.querySelectorAll('[id^="xdget124522"], .area-PAGE > .xdget-html').forEach(function (el) {
      if (el.id.indexOf('xdget124522') === 0 || el.textContent.trim().indexOf('Обратная связь') !== -1) {
        el.style.display = 'none';
      }
    });
  }

  // === Запуск: тройной setTimeout ===
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(init, 300);
      setTimeout(init, 800);
      setTimeout(init, 2000);
    });
  } else {
    setTimeout(init, 300);
    setTimeout(init, 800);
    setTimeout(init, 2000);
  }
})();
