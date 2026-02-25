# PLAAN — Редизайн страницы авторизации GetCourse

## О проекте

Кастомный дизайн страницы логина школы **Plaan** на платформе GetCourse. Кибер-футуристическая эстетика: тёмный фон (#060614), неоновые фиолетовые акценты, glassmorphism-карточка с градиентной обводкой, киборг справа.

**Критическое ограничение платформы:** GetCourse НЕ даёт менять HTML-шаблон страницы логина. Доступны ТОЛЬКО CSS и JS (вставляются через админку). Вся кастомизация — через CSS-оверрайды с `!important` и JS-манипуляции DOM. Нельзя менять порядок элементов через CSS — только через JS (insertBefore, appendChild и т.д.).

---

## Ссылки

| Что | URL |
|-----|-----|
| Страница логина | `https://edu.plaan.ai/cms/system/login` |
| Виджет формы ID | `xdget273461` |
| Оферта | `/oferta_neuro` |
| Политика конфиденциальности | `https://web.plaan.ai/privacy` |
| Обратная связь | `/cms/system/contact` |

---

## Структура проекта

```
├── README.md                # Этот файл — ГЛАВНАЯ СПЕЦИФИКАЦИЯ
├── index.html               # HTML-код стоковой страницы авторизации ГК (из DevTools)
├── new_design.css           # Финальный CSS (вставляется в ГК)
├── new_design.js            # Финальный JS (вставляется в ГК)
└── img/                     # Макеты
    ├── desktop.png          # Макет desktop (1456×816)
    └── mobile.png           # Макет mobile (~375px ширина)
```

---

## Ассеты на CDN GetCourse

Все изображения УЖЕ загружены на файловый сервер ГК. Используй ИМЕННО эти URL:

| Элемент | URL | Описание |
|---------|-----|----------|
| Киборг | `https://fs.getcourse.ru/fileservice/file/download/a/677405/sc/305/h/fb14ce9932e13fceebfc9e883416b763.png` | Мужчина-киборг, справа от формы, обрезан примерно по грудь, лицо повёрнуто влево. Занимает правую ~45% экрана на desktop |
| BG-шейп | `https://fs.getcourse.ru/fileservice/file/download/a/677405/sc/407/h/b9cb4b96e9ccece4c40cfe582df64669.png` | Синий геометрический фон — абстрактные угловатые линии, фиолетово-синие тона. Покрывает правую часть фона |
| Хром-оверлей | `https://fs.getcourse.ru/fileservice/file/download/a/677405/sc/194/h/9b0a54ece636e23a3621b7ec98bd4473.png` | Полупрозрачный слой поверх BG-шейпа, добавляет глубину |
| Логотип Plaan | `https://fs.getcourse.ru/fileservice/file/download/a/677405/sc/390/h/f4a5ab9447bb5aedb5e2fc781098f3dc.png` | Белый логотип "Plaan" с характерной буквой П в виде квадратной скобки. Размер ~200px по ширине |

---

## Дизайн-система — ТОЧНЫЕ ЗНАЧЕНИЯ

### Цвета

| Назначение | Значение | Контекст |
|-----------|----------|----------|
| Фон страницы | `#060614` | Почти чёрный с синим подтоном |
| Фон карточки формы | `rgba(10, 10, 26, 0.96)` | Почти непрозрачный тёмный |
| Фиолетовый акцент | `#4A47FE` | Бордер карточки, ссылки footer, свечение углов |
| Оранжевый CTA кнопки | Градиент: `#f5c96a` → `#f0a830` → `#e8922a` → `#c06a18` | Сверху вниз, 4 color-stops |
| Оранжевый текст ссылок | `#f5a623` | "обратной связи" в footer |
| Белый текст | `#ffffff` | Заголовки, основной текст |
| Muted текст | `rgba(255,255,255,0.25)` | Копирайт, мелкий текст |
| Текст "Регистрация" | `#f5a623` (оранжевый) | Ссылка справа от "Войти" |
| Текст "Еще нет аккаунта?" | `rgba(255,255,255,0.5)` | Перед "Регистрация" |
| Фон input | `rgba(6, 6, 20, 0.9)` | Тёмный, почти чёрный |
| Бордер input | `rgba(255,255,255,0.08)` | Едва заметный белый |
| Бордер input focus | `rgba(74, 71, 254, 0.5)` | Фиолетовый при фокусе |
| SVG иконки в полях | `#3b5bdb` | Синие, слева в input |
| Текст placeholder | `rgba(255,255,255,0.35)` | "Электронная почта", "Пароль" |
| Текст "Забыли пароль?" | `#ffffff` | Белый |
| Иконка ⓘ | `#4A47FE` | Фиолетовая, справа от "Забыли пароль?" |
| Footer ссылки юридические | `#4A47FE` | "Договор оферты", "Политика конфиденциальности" |

### Шрифты

| Элемент | Шрифт | Weight | Размер (desktop) | Размер (mobile) |
|---------|-------|--------|------------------|-----------------|
| Заголовок "Войти" | Unbounded | 800 | 36px | 32px |
| Placeholder input | Montserrat | 400 | 15px | 14px |
| Кнопка "ВОЙТИ »" | Montserrat | 800 | 18px | 16px |
| "Забыли пароль?" | Montserrat | 600 | 14px | 13px |
| "Еще нет аккаунта?" | Montserrat | 400 | 13px | 12px |
| "Регистрация" | Montserrat | 700 | 14px | 13px |
| "Авторизация через" | Montserrat | 500 | 13px | 12px |
| Footer текст | Montserrat | 400 | 11px | 10px |
| Footer ссылки | Montserrat | 500 | 11px | 10px |
| Чекбокс текст | Montserrat | 400 | 12px | 11px |
| Tooltip заголовок | Unbounded | 700 | 22px | 20px |
| Tooltip текст | Montserrat | 400 | 14px | 13px |

**Подключение Unbounded:** через Google Fonts `<link>` в `<head>`:
```
https://fonts.googleapis.com/css2?family=Unbounded:wght@700;800&display=swap
```
Montserrat уже есть в ГК.

### SVG-иконки полей ввода

**Email (конверт):**
```svg
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="4" width="20" height="16" rx="3" stroke="#3b5bdb" stroke-width="1.8"/>
  <path d="M2 7l10 7 10-7" stroke="#3b5bdb" stroke-width="1.8" stroke-linecap="round"/>
</svg>
```

**Password (замок):**
```svg
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="11" width="14" height="10" rx="2" stroke="#3b5bdb" stroke-width="1.8"/>
  <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="#3b5bdb" stroke-width="1.8" stroke-linecap="round"/>
</svg>
```

Иконки вставляются через JS, заменяя стандартные emoji-иконки ГК. Позиционируются абсолютно внутри `.field-input-block`, слева, `left: 16px`, вертикально по центру.

---

## Архитектура решения — ПОСЛОЙНОЕ ОПИСАНИЕ

### Фон страницы (3 слоя, снизу вверх)

**Слой 1 — `body::before`:**
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 0;
  /* Левая часть — чёрный, правая — BG-шейп */
  background:
    linear-gradient(to right, #060614 0%, #060614 40%, transparent 65%),
    url('BG-шейп URL') no-repeat right center / 70% auto;
}
```

**Слой 2 — `.gc-main-content::before`:**
```css
.gc-main-content::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 1;
  background: url('Хром-оверлей URL') no-repeat right center / 60% auto;
  opacity: 0.7;
  pointer-events: none;
}
```

**Слой 3 — `body::after` (Киборг):**
```css
body::after {
  content: '';
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
  width: 55%;
  height: 100%;
  background: url('Киборг URL') no-repeat right bottom / contain;
  pointer-events: none;
}
```

**Важно:** Киборг на макете расположен справа, обрезан снизу примерно по пояс, голова примерно на уровне верхней трети экрана. Лицо повёрнуто влево (смотрит на форму). Механическая рука с неоновыми бирюзовыми подсветками видна справа-снизу.

### Логотип Plaan

Расположен **над карточкой формы**, горизонтально по центру карточки (НЕ по центру экрана). На desktop — примерно left: 35% от ширины экрана, т.к. форма смещена влево.

```css
/* Логотип вставляется через img тег, JS меняет src */
.gc-logo img {
  max-width: 200px;
  height: auto;
  display: block;
  /* Позиционирование — по центру карточки */
}
```

На мобильном — по центру экрана.

---

## Карточка формы — ДЕТАЛЬНАЯ СПЕЦИФИКАЦИЯ

### Общая структура (двойная рамка через обёртку)

JS оборачивает `<form>` в `div.plaan-card-outer`:

```
div.plaan-card-outer          ← создаёт градиентный бордер (padding: 3px)
  └── form.xdget-loginUserForm ← основная карточка с содержимым
```

### Внешняя обёртка `.plaan-card-outer`

```css
.plaan-card-outer {
  position: relative;
  z-index: 10;
  max-width: 500px; /* Ширина карточки на desktop */
  width: 100%;
  margin: 0 auto;
  padding: 3px; /* Толщина градиентного бордера */
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    rgba(74, 71, 254, 0.6) 0%,      /* Фиолетовый верхний левый */
    rgba(74, 71, 254, 0.1) 25%,
    transparent 50%,
    rgba(74, 71, 254, 0.1) 75%,
    rgba(74, 71, 254, 0.6) 100%     /* Фиолетовый нижний правый */
  );
}
```

**Glow-эффект под карточкой — `::after`:**
```css
.plaan-card-outer::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 10%;
  right: 10%;
  height: 20px;
  background: rgba(74, 71, 254, 0.3);
  filter: blur(20px);
  border-radius: 50%;
  z-index: -1;
}
```

### Внутренняя карточка (форма)

```css
form.xdget-loginUserForm {
  background:
    radial-gradient(ellipse at 0% 0%, rgba(74,71,254,0.22) 0%, transparent 45%),
    radial-gradient(ellipse at 100% 100%, rgba(74,71,254,0.22) 0%, transparent 45%),
    rgba(10, 10, 26, 0.96);
  border-radius: 21px; /* 24px outer - 3px padding */
  padding: 40px 36px 28px;
  position: relative;
  overflow: visible;
}
```

**Два свечения в углах:** верхний-левый и нижний-правый углы имеют фиолетовое свечение (`rgba(74,71,254,0.22)`), размер ~45% от карточки. Это создаёт эффект, что градиентный бордер "проникает" внутрь карточки.

---

## Заголовок "Войти" + "Регистрация"

```
[Войти]                    Еще нет аккаунта? [Регистрация]
```

- **"Войти"** — слева, Unbounded 800, 36px, #ffffff, letter-spacing: -0.5px
- **"Еще нет аккаунта?"** — справа, Montserrat 400, 13px, rgba(255,255,255,0.5)
- **"Регистрация"** — справа, после "Еще нет аккаунта?", Montserrat 700, 14px, #f5a623, ссылка
- Расположение: flex, space-between, align-items: baseline
- Отступ снизу: 24px до первого input

---

## Поля ввода — ТОЧНОЕ ОПИСАНИЕ

### Структура одного поля

```
.xdget-formField
  └── .form-field
      └── .field-input-block   (position: relative)
          ├── [SVG иконка]     (position: absolute, left: 16px, top: 50%, transform: translateY(-50%))
          └── input.form-control
```

### Стили input

```css
input.form-control {
  width: 100%;
  height: 56px;
  background: rgba(6, 6, 20, 0.9);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 400;
  padding: 0 20px 0 50px; /* Левый padding для иконки */
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input.form-control:focus {
  border-color: rgba(74, 71, 254, 0.5);
  box-shadow: 0 0 0 3px rgba(74, 71, 254, 0.1);
}

input.form-control::placeholder {
  color: rgba(255,255,255,0.35);
  font-weight: 400;
}
```

### Chrome autofill fix

```css
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px rgba(6, 6, 20, 1) inset !important;
  -webkit-text-fill-color: #ffffff !important;
  caret-color: #ffffff !important;
  transition: background-color 5000s ease-in-out 0s;
}
```

### Расстояние между полями

- Email → Password: `16px` margin-bottom
- Password → блок чекбокса/забыли пароль: `16px`

---

## Блок "Забыли пароль?" + Чекбокс согласия

### Layout (desktop)

```
[✅ Даю согласие на обработку          ]  [Забыли пароль? ⓘ]
[   персональных данных                ]
[   в соответствии с Политикой         ]
```

- Этот ряд расположен между полем пароля и кнопкой "ВОЙТИ"
- Flex, space-between, align-items: flex-start
- Чекбокс + текст согласия — слева, максимальная ширина ~60%
- "Забыли пароль?" + ⓘ — справа

### Чекбокс согласия

- Чекбокс: кастомный, зелёная галочка на тёмном фоне, размер ~18x18px, border-radius: 4px
- Текст: Montserrat 400, 12px, rgba(255,255,255,0.7)
- "Политикой" — ссылка, подчёркнутая

### "Забыли пароль?" + иконка ⓘ

```css
.btn-remind {
  /* Кнопка стилизована под текст */
  background: none;
  border: none;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
```

**Иконка ⓘ:**
- Круг: 22px, border: 2px solid #4A47FE, background: transparent
- "i" внутри: #4A47FE, font-weight: 700, font-size: 13px
- Или SVG:
```svg
<svg width="22" height="22" viewBox="0 0 22 22">
  <circle cx="11" cy="11" r="10" stroke="#4A47FE" stroke-width="2" fill="none"/>
  <text x="11" y="15.5" text-anchor="middle" fill="#4A47FE" font-size="13" font-weight="700">i</text>
</svg>
```

**JS:** Клик на "Забыли пароль?" — стандартное восстановление пароля ГК. Клик на ⓘ — toggle `.plaan-tooltip-card`.

**JS перемещение:** `.btn-remind` перемещается ПЕРЕД `.btn-success` в DOM через `insertBefore`.

---

## Кнопка "ВОЙТИ »" — ДЕТАЛЬНАЯ СПЕЦИФИКАЦИЯ

### Визуал с макета

Кнопка на всю ширину карточки (100% минус padding). Высота ~52px. Скруглённые углы.

Градиент — золотисто-оранжевый, сверху вниз, 4 color-stop:
- Верх: светло-золотой `#f5c96a`
- Верхняя середина: `#f0a830`
- Нижняя середина: `#e8922a`
- Низ: тёмно-оранжевый `#c06a18`

Текст: "ВОЙТИ »" (CAPS, два символа `»`), чёрный (#1a1a1a), Montserrat 800, 18px, letter-spacing: 2px.

### CSS кнопки

```css
button.btn-success {
  display: block;
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(
    to bottom,
    #f5c96a 0%,
    #f0a830 35%,
    #e8922a 65%,
    #c06a18 100%
  );
  color: #1a1a1a;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  /* Тень снизу — тёмная, даёт объём */
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.6),
    0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
```

### Глянцевый блик (::before)

```css
button.btn-success::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.18) 0%,
    transparent 100%
  );
  border-radius: 12px 12px 0 0;
  pointer-events: none;
}
```

### Hover & Active

```css
button.btn-success:hover {
  transform: translateY(-1px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.7),
    0 3px 10px rgba(0, 0, 0, 0.4);
}

button.btn-success:active {
  transform: translateY(1px);
  box-shadow:
    0 3px 12px rgba(0, 0, 0, 0.5),
    0 1px 4px rgba(0, 0, 0, 0.3);
}
```

### Отступы

- От блока "Забыли пароль?"/чекбокса до кнопки: `20px`
- От кнопки до соцкнопок: `24px`

---

## Соцкнопки — "Авторизация через"

### Layout

```
Авторизация через                    [□] [Я] [G] [VK]
```

- Flex, space-between, align-items: center
- "Авторизация через" — слева, Montserrat 500, 13px, rgba(255,255,255,0.5)
- Соцкнопки — справа, gap: 8px
- **НЕ стилизуем сами кнопки соцсетей** — ГК ломается при переопределении. Только layout.

### JS: вставка лейбла

```javascript
// Лейбл "Авторизация через" создаётся через JS
const label = document.createElement('span');
label.className = 'plaan-social-label';
label.textContent = 'Авторизация через';
// Вставляется перед .xdget-socialUserFormField
```

---

## Footer внутри формы

### Layout

```
©Все права защищены                          Договор оферты
По всем вопросам обращайтесь                 Политика конфиденциальности
по форме [обратной связи]
```

- Вставляется JS ВНУТРИ `<form>`, в самом низу
- Flex, space-between
- Левая колонка: copyright + обратная связь
- Правая колонка: юридические ссылки, text-align: right

### Стили текста

```css
.plaan-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 24px;
  margin-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.plaan-footer-left {
  font-size: 11px;
  color: rgba(255,255,255,0.25);
  line-height: 1.6;
}

.plaan-footer-left a {
  color: #f5a623; /* Оранжевый */
  text-decoration: underline;
}

.plaan-footer-right {
  text-align: right;
  font-size: 11px;
  line-height: 1.6;
}

.plaan-footer-right a {
  color: #4A47FE; /* Фиолетовый */
  text-decoration: none;
}
```

### Ссылки footer

- "обратной связи" → `/cms/system/contact` (оранжевая `#f5a623`)
- "Договор оферты" → `/oferta_neuro` (фиолетовая `#4A47FE`)
- "Политика конфиденциальности" → `https://web.plaan.ai/privacy` (фиолетовая `#4A47FE`)

### Скрытие стандартного блока

Стандартный блок ГК "Обратная связь" (`#xdget124522`) — полностью скрыт: `display: none !important`.

---

## Tooltip-карточка "Забыли пароль? Не проблема"

### Расположение

- Находится **ПОД карточкой формы**, отдельным блоком
- Вставляется JS ПОСЛЕ `.plaan-card-outer`
- Видимость toggle по клику на ⓘ
- По умолчанию **скрыта** (display: none)

### Визуал с макета

```
┌──────────────────────────────────────────────────────────────────┐
│  Забыли пароль? Не проблема                               ⓘ    │
│                                                                  │
│  1. Нажмите кнопку «Восстановить пароль».                       │
│  2. Введите почту, которую указывали при записи на обучение.    │
│  3. Подтвердите отправку — мы пришлём письмо с доступом.        │
│  4. Откройте письмо и перейдите по ссылке.                      │
│  5. В личном кабинете зайдите в раздел «Профиль».               │
│  6. Установите новый пароль — и вы снова в игре 🚀              │
└──────────────────────────────────────────────────────────────────┘
```

### Стили

```css
.plaan-tooltip-card {
  display: none; /* Показывается по клику на ⓘ */
  max-width: 500px;
  width: 100%;
  margin: 16px auto 0;
  padding: 28px 32px;
  background:
    radial-gradient(ellipse at 0% 0%, rgba(74,71,254,0.15) 0%, transparent 40%),
    radial-gradient(ellipse at 100% 100%, rgba(74,71,254,0.15) 0%, transparent 40%),
    rgba(10, 10, 26, 0.96);
  border: 1px solid rgba(74, 71, 254, 0.3);
  border-radius: 20px;
  position: relative;
  z-index: 10;
}

.plaan-tooltip-card.active {
  display: block;
}
```

### Содержимое tooltip

- Заголовок: "Забыли пароль? Не проблема" — Unbounded 700, 22px, #ffffff
- Иконка ⓘ справа — та же что в форме, 22px, #4A47FE
- Список: нумерованный 1-6, Montserrat 400, 14px, rgba(255,255,255,0.7)
- Последний пункт заканчивается на 🚀
- line-height: 1.8 для списка
- Отступ заголовок → список: 16px

---

## DOM-структура GetCourse — КЛЮЧЕВЫЕ СЕЛЕКТОРЫ

```
body
└── .gc-main-content
    └── .gc-main-content-area (или аналог)
        ├── .gc-logo                              # Логотип
        │   └── img
        ├── div.plaan-card-outer                  # ← СОЗДАЁТСЯ JS (обёртка)
        │   └── form.xdget-loginUserForm.standard-form.container-center
        │       ├── .login-form.state-form.active-state
        │       │   ├── .btn-register                     # Ссылка "Регистрация"
        │       │   ├── h2.xdget-header                   # "Войти"
        │       │   ├── .xdget-formField.xdget-form-field-email
        │       │   │   └── .form-field
        │       │   │       └── .field-input-block
        │       │   │           ├── [SVG email icon]      # ← ВСТАВЛЯЕТСЯ JS
        │       │   │           └── input.form-control[type="text"]
        │       │   ├── .xdget-formField.xdget-form-field-password
        │       │   │   └── .form-field
        │       │   │       └── .field-input-block
        │       │   │           ├── [SVG lock icon]       # ← ВСТАВЛЯЕТСЯ JS
        │       │   │           └── input.form-control[type="password"]
        │       │   └── .form-buttons.float-row           # ⚠️ float-row, НЕ flex!
        │       │       ├── button.btn-remind             # ← ПЕРЕМЕЩЁН JS перед btn-success
        │       │       ├── button.btn-success            # "ВОЙТИ »"
        │       │       └── .xdget-socialUserFormField    # Соцкнопки
        │       ├── .register-form.state-form             # Скрыта
        │       ├── .logined-form.state-form              # Скрыта
        │       ├── .login-block                          # hidden
        │       ├── .remind-block                         # hidden
        │       └── .plaan-footer                         # ← ВСТАВЛЯЕТСЯ JS
        └── .plaan-tooltip-card                   # ← ВСТАВЛЯЕТСЯ JS после card-outer
```

**⚠️ КРИТИЧНО:** `.form-buttons` имеет класс `float-row` — дочерние элементы по умолчанию float. CSS ОБЯЗАН обнулить float и задать `display: block` для правильной работы:

```css
.form-buttons.float-row {
  float: none !important;
  display: block !important;
  width: 100% !important;
  overflow: visible !important;
}

.form-buttons .btn-remind,
.form-buttons .btn-success {
  float: none !important;
}
```

---

## Что делает JS (new_design.js) — ПОЛНЫЙ СПИСОК

| # | Действие | Детали |
|---|----------|--------|
| 0 | Подключает шрифт Unbounded | `<link>` в `<head>` с Google Fonts URL |
| 1 | Заменяет URL логотипа | `document.querySelector('.gc-logo img').src = CDN_URL` |
| 2 | Оборачивает `<form>` в `div.plaan-card-outer` | `form.parentNode.insertBefore(outer, form); outer.appendChild(form)` |
| 3 | Заменяет emoji-иконки на SVG | Находит `.field-input-block`, вставляет SVG перед `input` |
| 4a | Меняет текст кнопки "Войти" | `btn-success.textContent = 'ВОЙТИ »'` |
| 4b | Меняет "Восстановить пароль" | Текст → "Забыли пароль?" + добавляет иконку ⓘ (span или SVG) |
| 4c | Перемещает `.btn-remind` | `formButtons.insertBefore(btnRemind, btnSuccess)` — ПЕРЕД кнопкой ВОЙТИ |
| 4d | Создаёт `.plaan-tooltip-card` | Вставляет ПОСЛЕ `.plaan-card-outer`, с содержимым из спецификации |
| 4e | Toggle tooltip по клику на ⓘ | `infoIcon.addEventListener('click', () => tooltip.classList.toggle('active'))` |
| 5 | Добавляет "Авторизация через" | Лейбл перед `.xdget-socialUserFormField` |
| 6 | Вставляет footer | `.plaan-footer` внутри `<form>`, в конце |
| 7 | Скрывает стандартный блок | `#xdget124522 { display: none }` |

**Запуск JS:**

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // ГК подгружает элементы асинхронно, нужны множественные вызовы
  setTimeout(init, 300);
  setTimeout(init, 800);
  setTimeout(init, 2000);
});

function init() {
  // Guard: не запускать повторно если уже инициализировано
  if (document.querySelector('.plaan-card-outer')) return;
  // ... все манипуляции
}
```

**⚠️ ВАЖНО:** ГК асинхронно загружает виджеты. `setTimeout` с 300, 800, 2000ms — обязательны. Функция `init()` должна иметь guard-проверку, чтобы не дублировать элементы при повторных вызовах.

---

## Responsive — BREAKPOINTS

### > 1200px (Desktop)

- Полный layout: форма слева (~55% экрана), киборг справа (~45%)
- Карточка: max-width 500px, margin-left ~10%
- Логотип: над карточкой, по центру карточки
- Все три фоновых слоя видны
- Tooltip под карточкой, той же ширины

### ≤ 1200px

- Киборг уменьшен (width: 45%, opacity: 0.8)
- Карточка: max-width 480px

### ≤ 992px

- Киборг: opacity: 0.3, width: 40%
- Padding карточки уменьшен до 32px 28px 24px

### ≤ 768px (Tablet / Mobile)

- **Киборг полностью скрыт** (`display: none` или `opacity: 0`)
- BG-шейп и хром-оверлей скрыты или сильно затемнены
- Форма: на всю ширину экрана (max-width: 100%, padding: 0 16px)
- Карточка: padding 28px 20px 20px
- Соцкнопки: flex-direction: column или row, centered
- Footer: flex-direction: column, text-align: center
- Логотип: по центру, margin-bottom: 20px

### ≤ 480px (Small Mobile) — по макету mobile.png

На мобильном макете видно:

1. **Логотип** — по центру, сверху, ~60px от верха
2. **Карточка** — занимает почти всю ширину (padding: 0 12px от краёв экрана)
3. **"Войти"** слева, **"Еще нет аккаунта? Регистрация"** справа — в одну строку
4. **Email поле** — на всю ширину
5. **Password поле** — на всю ширину
6. **"Забыли пароль? ⓘ"** — по центру, под полями
7. **Чекбокс согласия** — под "Забыли пароль", на всю ширину
8. **Кнопка "ВОЙТИ »"** — на всю ширину
9. **"Авторизация через" [иконки]** — в строку, слева текст, справа иконки
10. **Footer** — по центру, все ссылки в столбик
11. **Tooltip** — ПОД карточкой, на всю ширину

**Ключевые отличия mobile от desktop:**
- Порядок элементов: "Забыли пароль?" идёт ПЕРЕД чекбоксом (на desktop они в одной строке)
- Чекбокс и "Забыли пароль?" — каждый на своей строке, centered
- Нет киборга
- Нет BG-шейпа
- Минимальные padding: 20px 16px
- border-radius карточки: 20px (чуть меньше)

---

## Состояния формы

### Состояние "Логин" (`.login-form.active-state`)

Основное, описано выше.

### Состояние "Регистрация" (`.register-form`)

- Заголовок: "Зарегистрироваться" → **"РЕГИСТРАЦИЯ »"** (JS)
- Кнопка: тот же стиль, текст "РЕГИСТРАЦИЯ »"
- Те же поля, тот же стиль
- Ссылка ".btn-register" меняется на "Войти" (стандарт ГК)

### Состояние "Авторизован" (`.logined-form`)

- Стилизовать в той же тёмной теме
- Текст белый на тёмном фоне

### Скрытые блоки ГК

`.login-block`, `.remind-block` — при активации (восстановление пароля) стилизовать в той же теме:
- Тёмный фон
- Белый текст
- Input в том же стиле
- Кнопки в оранжевом градиенте

---

## Специфика платформы GetCourse — КРИТИЧНО ДЛЯ РАЗРАБОТКИ

### Что такое GetCourse

GetCourse (ГК) — российская LMS-платформа для онлайн-школ. Это закрытая платформа с собственной CMS, НЕ open-source. Нет прямого доступа к серверному шаблону страниц — вся кастомизация только через CSS/JS-оверрайды.

### Способы вставки CSS и JS в GetCourse

**Способ 1: Через настройки аккаунта (глобально, на ВСЕ страницы)**
- `Настройки аккаунта → Настройки → "Дополнительные теги для HEAD"` — сюда CSS в тегах `<style>` или `<link>`
- `Настройки аккаунта → Настройки → "Счётчики и прочие скрипты для BODY"` — сюда JS в тегах `<script>`. Код вставляется перед `</body>` и работает на ВСЕХ страницах, включая системные

**Способ 2: Через настройки конкретной страницы**
- В настройках страницы → "Показать дополнительные настройки" → "Теги в разделе HEAD" — CSS/JS только для этой страницы

**Способ 3: Через CMS-блоки на странице (конструктор)**
- Раздел "Вставка" → блоки "HTML-код", "Javascript-код", "CSS-код" — вставляются в тело страницы
- ⚠️ На системной странице входа блоки добавляются через "Настроить вид" → "Добавить блок"

**Способ 4: Через Темы (рекомендуемый для масштабных кастомизаций)**
- `Сайт → Страницы → Темы → Создать тему`
- Вкладка "CSS" — CSS-код БЕЗ тегов `<style>`
- Вкладка "JS" — JS-код БЕЗ тегов `<script>`
- Вкладка "Шрифты" — подключение Google Fonts
- Лимит: 65535 символов на каждую вкладку. Если больше — загружать через доп. файлы
- Тему можно привязать к конкретным страницам или ко всему аккаунту
- Есть опция Bootstrap4 (по умолчанию Bootstrap3)
- Можно создавать дочерние темы с наследованием

### Системная страница входа — особенности

Путь: `Сайт → Страницы → Системные страницы → Страница входа → Настроить вид`

**Критические ограничения:**
1. HTML-шаблон страницы входа **НЕЛЬЗЯ менять**. Вообще. GetCourse рендерит его серверно
2. Доступны только CSS-оверрайды и JS-манипуляции DOM
3. Виджет формы входа (`xdget-loginUserForm`) загружается **АСИНХРОННО** — элементы появляются с задержкой
4. При сохранении изменений в CMS-редакторе **кастомный код может быть потерян** — всегда сохранять копию отдельно
5. Логотип аккаунта настраивается в `Профиль → Настройки аккаунта → Настройки`

### Кэширование GetCourse — ⚠️ АГРЕССИВНОЕ

- ГК агрессивно кэширует CSS и JS файлы
- После изменения кода изменения могут не появиться сразу
- **Обязательно:** тестировать в режиме инкогнито (Ctrl+Shift+N)
- **Обязательно:** полная перезагрузка Ctrl+Shift+R (или Cmd+Shift+R на Mac)
- Параметр `?offscript=1` в URL — временно отключает все пользовательские скрипты (полезно если скрипт сломал страницу)

### DOM и CSS GetCourse — подводные камни

**Bootstrap 3 по умолчанию:**
- ГК использует Bootstrap 3 (можно переключить на Bootstrap4 через Темы)
- Много классов Bootstrap (`.container`, `.pull-right`, `.float-row`) уже применены к элементам
- CSS-специфичность стандартных стилей ГК высокая — почти всегда нужен `!important`

**Асинхронная загрузка виджетов:**
- Виджеты (формы, кнопки) подгружаются через AJAX после DOMContentLoaded
- `document.querySelector('.xdget-loginUserForm')` может вернуть `null` при первом вызове
- **Решение:** множественные `setTimeout` (300ms, 800ms, 2000ms) с guard-проверкой
- Альтернатива: `MutationObserver` на контейнер

**Классы и селекторы ГК, которые НЕ НАДО трогать:**
- `.xdget-socialUserFormField` — соцкнопки. Их стилизация ломает авторизацию через соцсети
- Внутренние классы виджетов `xdget*` — могут меняться при обновлениях платформы
- `.gc-*` — системные классы GetCourse

**Float-row проблема:**
- Контейнер кнопок `.form-buttons` имеет класс `.float-row`
- Все дочерние элементы по умолчанию `float: left/right`
- Для нормального flex/block layout нужно обнулять float на каждом ребёнке

**Стандартные стили формы ГК:**
- `.standard-form` — белый фон, серые бордеры, Roboto/Arial шрифт
- `.container-center` — центрирование, max-width
- `h2.xdget-header` — стандартный заголовок формы, встроенные стили
- `.btn-success` — зелёная кнопка Bootstrap, нужен полный override
- `.btn-remind` — текстовая кнопка, дефолтные стили кнопки
- `.form-control` — стандартный Bootstrap input, белый фон, серый бордер

**Все CSS-оверрайды ТРЕБУЮТ `!important`** — без него стандартные стили ГК перебьют кастомные.

### Загрузка файлов на CDN GetCourse

- Изображения загружаются через файловый менеджер ГК
- URL формат: `https://fs.getcourse.ru/fileservice/file/download/a/{account_id}/sc/{hash1}/h/{hash2}.{ext}`
- Файлы кэшируются на CDN, URL стабильные
- Максимальный размер файла для загрузки: 50 МБ

### Отладка

- `?offscript=1` — отключает все пользовательские скрипты на странице (добавить в URL)
- Chrome DevTools → Network → отключить кэш
- Console: ГК может выводить свои ошибки — не путать с нашими
- При ошибке в JS-коде страница может стать неуправляемой — блок с кодом можно удалить через CMS-редактор

---

## Как деплоить в GetCourse

### CSS

Настройки → Аккаунт → "Дополнительный CSS" (или виджет стилей на странице логина).

### JS

Вставить через HTML-виджет `<script>...</script>` на странице логина.

### Проверка

- **Всегда** тестировать в режиме инкогнито (Ctrl+Shift+N)
- ГК агрессивно кэширует — Ctrl+Shift+R для полной перезагрузки
- Проверять все 3 состояния: логин, регистрация, авторизован
- Проверять Chrome autofill — поля НЕ должны становиться белыми/жёлтыми
- Проверять responsive на реальных устройствах (iOS Safari, Android Chrome)

---

## Чеклист готовности

- [ ] Фон: 3 слоя (BG-шейп, хром-оверлей, киборг) корректно отображаются
- [ ] Логотип Plaan белый, по центру над карточкой
- [ ] Карточка: двойная градиентная рамка (фиолетовая в углах)
- [ ] Карточка: свечения в верхнем-левом и нижнем-правом углах
- [ ] Glow-полоска под карточкой
- [ ] Заголовок "Войти" — Unbounded 800
- [ ] "Еще нет аккаунта? Регистрация" — справа, оранжевая ссылка
- [ ] Поля ввода: тёмные, скруглённые, с SVG иконками слева
- [ ] Поля: focus state с фиолетовым бордером
- [ ] Chrome autofill не ломает стили
- [ ] "Забыли пароль?" + ⓘ — правильная позиция
- [ ] Чекбокс согласия — кастомный стиль
- [ ] Кнопка "ВОЙТИ »" — оранжевый градиент, глянцевый блик, тень
- [ ] Соцкнопки: лейбл "Авторизация через" слева, кнопки справа
- [ ] Footer: copyright слева, юридические ссылки справа
- [ ] Tooltip "Забыли пароль? Не проблема" — toggle по ⓘ
- [ ] Responsive ≤768px: киборг скрыт, мобильный layout
- [ ] Responsive ≤480px: соответствует мобильному макету
- [ ] Состояние "Регистрация" — стилизовано
- [ ] Состояние "Авторизован" — стилизовано
- [ ] `.remind-block` — стилизован в тёмной теме
- [ ] Стандартный блок "Обратная связь" ГК скрыт
