// ===== PLAAN LOGIN — JS v8 (полный редизайн по спецификации README.md) =====
(function () {
  'use strict';

  // === SVG-иконки полей (stroke-стиль из спецификации) ===
  var emailSVG =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="2" y="4" width="20" height="16" rx="3" stroke="#3b5bdb" stroke-width="1.8"/>' +
    '<path d="M2 7l10 7 10-7" stroke="#3b5bdb" stroke-width="1.8" stroke-linecap="round"/>' +
    '</svg>';

  var lockSVG =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<rect x="5" y="11" width="14" height="10" rx="2" stroke="#3b5bdb" stroke-width="1.8"/>' +
    '<path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#3b5bdb" stroke-width="1.8" stroke-linecap="round"/>' +
    '</svg>';

  // === CDN URLs ===
  var LOGO_URL =
    'https://fs.getcourse.ru/fileservice/file/download/a/677405/sc/390/h/f4a5ab9447bb5aedb5e2fc781098f3dc.png';
  var FONT_URL =
    'https://fonts.googleapis.com/css2?family=Unbounded:wght@700;800&display=swap';

  function init() {
    // Guard: не запускать повторно если уже инициализировано
    if (document.querySelector('.plaan-card-outer')) return;

    var form = document.querySelector('form.xdget-loginUserForm');
    if (!form) return;

    // === 0. Подключаем шрифт Unbounded ===
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
        'max-width:200px!important;height:auto!important;display:block!important;margin:0 auto!important;';
    }

    // === 2. Оборачиваем форму в div.plaan-card-outer (двойная рамка) ===
    var wrapper = document.createElement('div');
    wrapper.className = 'plaan-card-outer';
    form.parentNode.insertBefore(wrapper, form);
    wrapper.appendChild(form);

    // === 3. Заменяем emoji-иконки на SVG в полях ввода ===
    var formStates = form.querySelectorAll('.login-form, .register-form');
    formStates.forEach(function (stateForm) {
      var fields = stateForm.querySelectorAll('.xdget-formField');
      fields.forEach(function (field, i) {
        // Удаляем старые иконки если есть
        field
          .querySelectorAll('.plaan-field-icon')
          .forEach(function (el) {
            el.remove();
          });

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
        inputBlock.style.position = 'relative';
        inputBlock.insertBefore(icon, inputBlock.firstChild);
      });
    });

    // === 4a. Меняем текст кнопки "Войти" → "ВОЙТИ »" ===
    form.querySelectorAll('.login-form .btn-success').forEach(function (btn) {
      btn.innerHTML =
        '<span style="position:relative;z-index:2">ВОЙТИ \u00A0\u00BB</span>';
    });

    // === 4a-reg. Кнопка регистрации → "РЕГИСТРАЦИЯ »" ===
    form
      .querySelectorAll('.register-form .btn-success')
      .forEach(function (btn) {
        btn.innerHTML =
          '<span style="position:relative;z-index:2">РЕГИСТРАЦИЯ \u00A0\u00BB</span>';
      });

    // === 4b. "Восстановить пароль" → "Забыли пароль?" + иконка ⓘ ===
    var remindBtn = form.querySelector('.login-form .btn-remind');
    var submitBtn = form.querySelector('.login-form .btn-success');

    if (remindBtn) {
      remindBtn.textContent = 'Забыли пароль?';

      var infoIcon = document.createElement('span');
      infoIcon.className = 'plaan-info-icon';
      infoIcon.textContent = 'i';
      remindBtn.appendChild(infoIcon);

      // Клик на ⓘ — toggle tooltip
      infoIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var tooltip = document.querySelector('.plaan-tooltip-card');
        if (tooltip) tooltip.classList.toggle('active');
      });
    }

    // === 4c. Перемещаем btn-remind ПЕРЕД btn-success ===
    // Создаём .plaan-middle-row для чекбокса + "Забыли пароль?"
    var formButtons = form.querySelector('.login-form .form-buttons');
    if (formButtons && remindBtn && submitBtn) {
      // Создаём средний ряд
      var middleRow = document.createElement('div');
      middleRow.className = 'plaan-middle-row';

      // Чекбокс согласия (слева)
      var consent = document.createElement('label');
      consent.className = 'plaan-consent';
      consent.innerHTML =
        '<input type="checkbox" checked>' +
        '<span>Даю согласие на обработку персональных данных ' +
        'в соответствии с <a href="https://web.plaan.ai/privacy" target="_blank">Политикой</a></span>';
      middleRow.appendChild(consent);

      // "Забыли пароль?" (справа)
      middleRow.appendChild(remindBtn);

      // Вставляем средний ряд перед кнопкой ВОЙТИ
      formButtons.insertBefore(middleRow, submitBtn);
    }

    // === 4d. Создаём tooltip-карточку "Забыли пароль? Не проблема" ===
    var cardOuter = document.querySelector('.plaan-card-outer');
    if (cardOuter && !document.querySelector('.plaan-tooltip-card')) {
      var tooltip = document.createElement('div');
      tooltip.className = 'plaan-tooltip-card';
      tooltip.innerHTML =
        '<div class="plaan-tooltip-header">' +
        '<span class="plaan-tooltip-title">Забыли пароль? Не проблема</span>' +
        '<span class="plaan-info-icon" style="cursor:default">i</span>' +
        '</div>' +
        '<ol>' +
        '<li>Нажмите кнопку «Восстановить пароль».</li>' +
        '<li>Введите почту, которую указывали при записи на обучение.</li>' +
        '<li>Подтвердите отправку — мы пришлём письмо с доступом.</li>' +
        '<li>Откройте письмо и перейдите по ссылке.</li>' +
        '<li>В личном кабинете зайдите в раздел «Профиль».</li>' +
        '<li>Установите новый пароль — и вы снова в игре \uD83D\uDE80</li>' +
        '</ol>';
      cardOuter.parentNode.insertBefore(tooltip, cardOuter.nextSibling);
    }

    // === 5. Лейбл "Авторизация через" перед соцкнопками ===
    form
      .querySelectorAll('.xdget-socialUserFormField')
      .forEach(function (social) {
        if (social.querySelector('.plaan-social-label')) return;
        var label = document.createElement('span');
        label.className = 'plaan-social-label';
        label.textContent = 'Авторизация через';
        social.insertBefore(label, social.firstChild);
      });

    // === 6. Footer внутри формы ===
    if (!form.querySelector('.plaan-footer')) {
      var footer = document.createElement('div');
      footer.className = 'plaan-footer';
      footer.innerHTML =
        '<div class="plaan-footer-left">' +
        '\u00A9 Все права защищены<br>' +
        'По всем вопросам обращайтесь<br>' +
        'по форме <a href="/cms/system/contact">обратной связи</a>' +
        '</div>' +
        '<div class="plaan-footer-right">' +
        '<a href="/oferta_neuro">Договор оферты</a><br>' +
        '<a href="https://web.plaan.ai/privacy">Политика конфиденциальности</a>' +
        '</div>';
      form.appendChild(footer);
    }

    // === 7. Скрыть стандартный блок "Обратная связь" ===
    document
      .querySelectorAll(
        '[id^="xdget124522"], .area-PAGE > .xdget-html'
      )
      .forEach(function (el) {
        if (
          el.id.indexOf('xdget124522') === 0 ||
          el.textContent.trim().indexOf('Обратная связь') !== -1
        ) {
          el.style.display = 'none';
        }
      });
  }

  // === Запуск: DOMContentLoaded + тройной setTimeout (ГК грузит виджеты асинхронно) ===
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
