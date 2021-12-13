function aboutAnimation() {
  setTimeout(() => {
    document
      .querySelector('.about__canvas')
      .classList.add('about__canvas--active');
  }, 250);
  setTimeout(() => {
    document
      .querySelector('.about__container')
      .classList.remove('container--active');
  }, 500);
}

function aboutAnimationClose() {
  document
    .querySelector('.about__canvas')
    .classList.remove('about__canvas--active');
  document
    .querySelector('.about__container')
    .classList.add('container--active');
}

function contactsAnimation() {
  setTimeout(() => {
    const projectsItem = document.querySelectorAll('.contacts__item');

    for (let i = 0; i < projectsItem.length; i++) {
      projectsItem[i].classList.add('contacts__item--active');
    }
    document
      .querySelector('.contacts__container')
      .classList.remove('container--active');
  }, 600);
}

function contactsAnimationClose() {
  const projectsItem = document.querySelectorAll('.contacts__item');

  for (let i = 0; i < projectsItem.length; i++) {
    projectsItem[i].classList.remove('contacts__item--active');
  }
  document
    .querySelector('.contacts__container')
    .classList.add('container--active');
}

function heroAnimate() {
  document
    .querySelector('.hero__container')
    .classList.add('hero__container--active');
}

function selectlanguage() {
  //Данные всех языков
  const langData = {
    //RU
    ru: {
      hero: {
        title: 'Frontend Developer',
        name: 'Игорь Деревянко',
        btn: 'Начать',
      },
      header: ['Главная', 'Обо мне', 'Работы', 'Контакты'],
      about: {
        title: 'Обо мне',
        text: 'Привет, меня зовут Игорь, я Fontend Developer. <br> Почти все свободное время посвящаю написанию кода или же его изучению. <br> Учусь самостоятельно, но также нахожусь на 3 курсе в Национальном Авиационном Университете на специальности Кибербезопасность.',
        btn: 'Cкачать резюме',
      },
      projects: {
        title: 'Работы',
        more: 'Больше',
        btnSite: 'Сайт',
        btnCode: 'Код',
        projectsList: [
          {
            projectName: 'Игра Крестики-нолики',
            projectDesc:
              'Старая добрая, известная всем игра, крестики-нолики.<br>Имеет небольшой функционал, а именно, смену имени игрока, выбор крестиков или ноликов, очистку игрового поля и отображение победителя или же ничью. ',
            projectSite: 'https://iamigrek.github.io/game-tic-tac-toe/',
            projectCode: 'https://github.com/iamigrek/game-tic-tac-toe',
          },
          {
            projectName: 'Магазин фруктов',
            projectDesc:
              'Интернет магазин с рабочей корзиной и калькулятором в ней.<br>Добавленный в корзину товар хранится на локальном хранилище.<br>Проект разрабатывался только для отображения функционала корзины.',
            projectSite: 'https://iamigrek.github.io/fruity-shop/',
            projectCode: 'https://github.com/iamigrek/fruity-shop',
          },
          {
            projectName: 'Портфолио оператора',
            projectDesc:
              'Сайт состоит из 4 секций: Главная - на которой находится модальное окно для обратной связи, с проверкой на валидность; Обо мне - секция с кратной информацией о человеке и его фото; Портфолио - самая интересная секция, в галерею можно добавлять контент, также в ней присутствует кастомный плеер; Контакты - секция с формой обратной связи и ссылками на владельца сайта. Также на сайте присутствует функция смены языка.',
            projectSite: 'https://iamigrek.github.io/cameraman-host/',
            projectCode: 'https://github.com/iamigrek/cameraman-host',
          },
          {
            projectName: 'Калькулятор на JS',
            projectDesc:
              'Имеет красивую анимацию и полноценный функционал калькулятора, в том числе и полное удаление.',
            projectSite: 'https://iamigrek.github.io/calc/',
            projectCode: 'https://github.com/iamigrek/calc',
          },
          {
            projectName: 'Сайт маркетингового агентства',
            projectDesc:
              'На сайте есть появляющееся меню навигации, при скролле, два самодельных слайдера (в отзывах и в блоге).',
            projectSite: 'https://iamigrek.github.io/marketing-agency/',
            projectCode: 'https://github.com/iamigrek/marketing-agency',
          },
        ],
      },
      contacts: {
        title: 'Контакты',
        contactsHelp: ['GitHub', 'Telegram', 'Email'],
      },
    },
    //EN
    en: {
      hero: {
        title: 'Frontend Developer',
        name: 'Ihor Derevianko',
        btn: 'Get start',
      },
      header: ['Home', 'About', 'Projects', 'Contacts'],
      about: {
        title: 'About',
        text: 'Hi, my name is Igor, I am a Fontend Developer.<br> I devote almost all my free time to writing code or studying it.<br> I am studying on my own, but I am also in the 3rd year at the National Aviation University with a Cybersecurity major.',
        btn: 'Download cv',
      },
      projects: {
        title: 'Projects',
        more: 'More',
        btnSite: 'visit site',
        btnCode: 'view code',
        projectsList: [
          {
            projectName: 'Tic Tac Toe',
            projectDesc:
              "Good old, well-known game, tic-tac-toe. It has a small functionality, namely, changing the player's name, choosing zeroes or crosses, clearing the playing field and displaying a winner or a draw.",
            projectSite: 'https://iamigrek.github.io/game-tic-tac-toe/',
            projectCode: 'https://github.com/iamigrek/game-tic-tac-toe',
          },
          {
            projectName: 'Fruit shop',
            projectDesc:
              'Online store with a working basket and a calculator in it. <br> The product added to the basket is stored on the local storage. <br> The project was developed only to display the functionality of the basket.',
            projectSite: 'https://iamigrek.github.io/fruity-shop/',
            projectCode: 'https://github.com/iamigrek/fruity-shop',
          },
          {
            projectName: 'Operator portfolio',
            projectDesc:
              'The site consists of 4 sections: Home - on which there is a modal window for feedback, with a check for validity; About me - a section with brief information about a person and his photo; Portfolio is the most interesting section, you can add content to the gallery, it also has a custom player; Contacts - a section with a feedback form and links to the site owner. Also, the site has a function for changing the language.',
            projectSite: 'https://iamigrek.github.io/cameraman-host/',
            projectCode: 'https://github.com/iamigrek/cameraman-host',
          },
          {
            projectName: 'JS calculator',
            projectDesc:
              'Has beautiful animation and full functionality of the calculator, including complete removal.',
            projectSite: 'https://iamigrek.github.io/calc/',
            projectCode: 'https://github.com/iamigrek/calc',
          },
          {
            projectName: 'Marketing agency website',
            projectDesc:
              'The site has a navigation menu that appears when scrolling, two homemade sliders (in reviews and in the blog).',
            projectSite: 'https://iamigrek.github.io/marketing-agency/',
            projectCode: 'https://github.com/iamigrek/marketing-agency',
          },
        ],
      },
      contacts: {
        title: 'Contacts',
        contactsHelp: ['My GitHub', 'My Telegram', 'My Email'],
      },
    },
    //UK
    uk: {
      hero: {
        title: 'Frontend Developer',
        name: "Ігор Дерев'янко",
        btn: 'Почати',
      },
      header: ['Головна', 'Про мене', 'Роботи', 'Контакти'],
      about: {
        title: 'Про мене',
        text: 'Привіт мене звати Ігор, я Fontend Developer. <br> Майже весь вільний час присвячую написанню коду або його вивченню. <br> Вчуся самостійно, але також перебуваю на 3 курсі в Національному Авіаційному Університеті на спеціальності Кібербезпека.',
        btn: 'Завантажити резюме',
      },
      projects: {
        title: 'Роботи',
        more: 'Більше',
        btnSite: 'Сайт',
        btnCode: 'Код',
        projectsList: [
          {
            projectName: 'Гра Хрестики-нуліки',
            projectDesc:
              'Стара добра, відома всім гра, хрестики-нуліки. Має невеликий функціонал, а саме, зміну імені гравця, вибір хрестиків або нуліків, очищення ігрового поля та відображення переможця або нічию.',
            projectSite: 'https://iamigrek.github.io/game-tic-tac-toe/',
            projectCode: 'https://github.com/iamigrek/game-tic-tac-toe',
          },
          {
            projectName: 'Магазин фруктів',
            projectDesc:
              'Інтернет магазин з робочим кошиком та калькулятором у ньому.<br>Доданий до кошику товар зберігається на локальному сховищі.<br>Проект розроблявся тільки для відображення функціоналу кошика.',
            projectSite: 'https://iamigrek.github.io/fruity-shop/',
            projectCode: 'https://github.com/iamigrek/fruity-shop',
          },
          {
            projectName: 'Портфоліо оператора',
            projectDesc:
              "Сайт складається з 4 секцій: Головна – на якій знаходиться модальне вікно для зворотного зв'язку, з перевіркою на валідність; Про мене - секція з короткою інформацією про людину та її портфоліо; Портфоліо - найцікавіша секція, до галереї можна додавати контент, також у ній присутній кастомний плеєр; Контакти - секція з формою зворотного зв'язку та посиланнями на власника сайту. Також на сайті є функція зміни мови.",
            projectSite: 'https://iamigrek.github.io/cameraman-host/',
            projectCode: 'https://github.com/iamigrek/cameraman-host',
          },
          {
            projectName: 'Калькулятор на JS',
            projectDesc:
              'Має гарну анімацію та повноцінний функціонал калькулятора, у тому числі повне видалення.',
            projectSite: 'https://iamigrek.github.io/calc/',
            projectCode: 'https://github.com/iamigrek/calc',
          },
          {
            projectName: 'Сайт маркетингової агенції',
            projectDesc:
              'На сайті є відображення меню навігації, при прокрутці, два саморобні слайдери (у відгуках і в блозі).',
            projectSite: 'https://iamigrek.github.io/marketing-agency/',
            projectCode: 'https://github.com/iamigrek/marketing-agency',
          },
        ],
      },
      contacts: {
        title: 'Контакти',
        contactsHelp: ['GitHub', 'Telegram', 'Email'],
      },
    },
  };

  //Начальный язык в зависимости от языка браузера
  let lang;

  if (localStorage.getItem('lang')) {
    //получение выбраного языка из localStorage

    lang = localStorage.getItem('lang');

    document.querySelectorAll('.header__lang-btn').forEach(item => {
      if (item.dataset.lang == lang) {
        item.classList.add('btn--lang-selected');
      }
    });
    //применить изменения
    changeLang(lang);
  } else {
    //Стандартный язык
    if (
      !Object.keys(langData).includes(
        navigator.language || navigator.userLanguage
      )
    ) {
      lang = 'en';
      changeLang(lang);
    } else {
      //в случае отсутствия выбраного языка применяеться язык браузера
      lang = navigator.language || navigator.userLanguage;
      changeLang(lang);
    }
  }

  //Отслеживание и анимация выбраного языка
  document.querySelectorAll('.header__lang-btn').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.header__lang-btn').forEach(el => {
        el.classList.remove('btn--lang-selected');
      });
      item.classList.add('btn--lang-selected');
      lang = item.dataset.lang;
      //Запись выбраного языка в localStorage
      localStorage.setItem('lang', lang);
      changeLang(lang);
    });
  });

  //Функция изменения языка
  function changeLang(lang) {
    //HERO
    document.querySelector(
      '.hero__title'
    ).innerHTML = `${langData[lang].hero.title} <span class="hero__title-big title--hero-big lh">${langData[lang].hero.name}</span>`;
    document.querySelector('.hero__btn').textContent = langData[lang].hero.btn;
    letterHover();

    //HEADER
    document.querySelectorAll('.nav__link').forEach((item, index) => {
      item.textContent = langData[lang].header[index];
    });

    //ABOUT
    document.querySelector('.about__title').textContent =
      langData[lang].about.title;
    document.querySelector('.about__desc').innerHTML =
      langData[lang].about.text;
    document.querySelector('.about__big-title').textContent =
      langData[lang].about.title;
    document.querySelector('.about__btn').textContent =
      langData[lang].about.btn;

    //PROJECTS
    document.querySelector('.projects__title').textContent =
      langData[lang].projects.title;
    document.querySelector('.projects__more-btn').textContent =
      langData[lang].projects.more;
    document.querySelector('.projects__bit-title').textContent =
      langData[lang].projects.title;
    document.querySelectorAll('.project__title').forEach((item, index) => {
      item.innerHTML = langData[lang].projects.projectsList[index].projectName;
    });
    document.querySelectorAll('.project__desc').forEach((item, index) => {
      item.innerHTML = langData[lang].projects.projectsList[index].projectDesc;
    });
    document.querySelectorAll('.project__btn-site').forEach((item, index) => {
      item.href = langData[lang].projects.projectsList[index].projectSite;
    });
    document.querySelectorAll('.project__btn-code').forEach((item, index) => {
      item.href = langData[lang].projects.projectsList[index].projectCode;
    });
    document.querySelectorAll('.project__btn-code').forEach(item => {
      item.textContent = langData[lang].projects.btnCode;
    });
    document.querySelectorAll('.project__btn-site').forEach(item => {
      item.textContent = langData[lang].projects.btnSite;
    });

    //CONTACTS
    document.querySelectorAll('.contacts__title').forEach(item => {
      item.textContent = langData[lang].contacts.title;
    });
    document.querySelectorAll('.contacts__help').forEach((item, index) => {
      item.textContent = langData[lang].contacts.contactsHelp[index];
    });
  }
}

//функция для анимации каждой буквы
function letterHover() {
  const letterText = document.querySelector('.lh');
  letterText.innerHTML = letterText.textContent.replace(
    /\S/g,
    '<span class="lh__letter">$&</span>'
  );

  letterText.addEventListener('mousemove', e => {
    if (e.target.className != 'lh__letter') return;
    e.target.classList.add('lh__hover');
    setTimeout(() => {
      e.target.classList.remove('lh__hover');
    }, 500);
  });
}

document.querySelector('.projects__more-btn').addEventListener('click', () => {
  document
    .querySelector('.projects__container')
    .classList.add('projects__container--more');
});

function navigation() {
  const header = document.querySelector('.header');
  const siteInner = document.querySelector('.site-inner');

  //Массив с дата атрибутами ссылок
  let allSections = [];

  //Кнопка начала на начальной странице
  document.querySelector('.hero__btn').addEventListener('click', () => {
    siteInner.style.top = '-100vh';
    //Вызов анимации появления в About
    aboutAnimation();
    //Появление панели навигации
    header.classList.add('header--visible');
    //Назначение ссылке активного состояния
    document.querySelectorAll('.nav__link').forEach(item => {
      item.dataset.nav == allSections[1] &&
        item.classList.add('btn--link-active');
    });
  });

  document.querySelectorAll('.nav__link').forEach(item => {
    //добавление дата атрибутов в массив
    allSections.push(item.dataset.nav);

    //Отслеживание клика на ссылку
    item.addEventListener('click', () => {
      //Удаление активного состояния у всех ссылках
      document
        .querySelectorAll('.nav__link')
        .forEach(item => item.classList.remove('btn--link-active'));
      //Добавление активного состояния активной ссылке
      item.classList.add('btn--link-active');

      //Анимация секций при нажатии на ссылку (зависит от расположения ссылок (ссылки и секции должны идти 1 в 1))
      switch (allSections.indexOf(item.dataset.nav)) {
        case 1:
          aboutAnimation();
          projectAnimationClose();
          contactsAnimationClose();
          break;
        case 2:
          projectAnimation();
          aboutAnimationClose();
          contactsAnimationClose();

          break;
        case 3:
          contactsAnimation();
          aboutAnimationClose();
          projectAnimationClose();

          break;

        default:
          header.classList.remove('header--visible');
          aboutAnimationClose();
          projectAnimationClose();
          contactsAnimationClose();
          document.querySelectorAll('.nav__link').forEach(item => {
            item.classList.remove('btn--link-active');
          });
          break;
      }

      //передвижение экрана
      siteInner.style.top = `${allSections.indexOf(item.dataset.nav) * -100}vh`;
    });
  });
}

const project = document.querySelectorAll('.project');
let projectActive;

project.forEach(item => {
  item.addEventListener('click', () => {
    project.forEach(el => el.classList.remove('project--active'));
    if (item == projectActive) {
      item.classList.remove('project--active');
      projectActive = '';
    } else {
      item.classList.add('project--active');
      projectActive = item;
    }
  });
});

const projectsItem = document.querySelectorAll('.projects__item');

projectsItem.forEach(item => {
  item.addEventListener('mouseover', () => {
    document
      .querySelectorAll('.project')
      .forEach(el => el.classList.remove('project--visible'));
    item.querySelector('.project').classList.add('project--visible');

    document.querySelectorAll('.projects__link').forEach(el => {
      el.classList.add('projects__link--hidden');
    });
    item
      .querySelector('.projects__link')
      .classList.remove('projects__link--hidden');
  });
  item.addEventListener('mouseout', () => {
    item.querySelector('.project').classList.remove('project--visible');
    document.querySelectorAll('.projects__link').forEach(el => {
      el.classList.remove('projects__link--hidden');
    });
  });
});

function heroParticles() {
  const prtCanvas = document.createElement('canvas');
  const ctx = prtCanvas.getContext('2d');

  //Размеры канвас
  let w = (prtCanvas.width = innerWidth);
  let h = (prtCanvas.height = innerHeight);
  //Для хранения частиц
  let prt = [];
  //Главные настройки частиц
  const prtSettings = {
    prtBgColor: 'rgba(17, 17, 19, 1)',
    prtColor: 'rgba(255, 255, 255, 1)',
    prtRadius: 4,
    prtCount: 30,
    prtMaxVelocity: 0.2,
  };

  //Помещение частиц в секцию
  prtCanvas.classList.add('hero__canvas');
  document.querySelector('.hero').appendChild(prtCanvas);

  //Изменение размеров канвы при изменении размеров окна
  window.addEventListener('resize', () => {
    w = prtCanvas.width = innerWidth;
    h = prtCanvas.height = innerHeight;
  });

  class Particle {
    constructor() {
      //Назначение координат случайного размещения частиц
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      //Назначение радиуса частиц
      this.r = Math.random() * prtSettings.prtRadius;
      //Назначение направления движения частиц
      this.velocityX =
        Math.random() * (prtSettings.prtMaxVelocity * 2) -
        prtSettings.prtMaxVelocity;
      this.velocityY =
        Math.random() * (prtSettings.prtMaxVelocity * 2) -
        prtSettings.prtMaxVelocity;
    }
    position() {
      //Изменение направления при столкновении с границей
      (this.x + this.velocityX > w && this.velocityX > 0) ||
      (this.x + this.velocityX < 0 && this.velocityX < 0)
        ? (this.velocityX *= -1)
        : this.velocityX;
      (this.y + this.velocityY > h && this.velocityY > 0) ||
      (this.y + this.velocityY < 0 && this.velocityY < 0)
        ? (this.velocityY *= -1)
        : this.velocityY;

      //Движение частиц
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
    //Отрисовка частиц
    reDraw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = prtSettings.prtColor;
      ctx.fill();
    }
  }
  //Заполнение канвас цветом
  function reDrawBackgroung() {
    ctx.fillStyle = prtSettings.prtBgColor;
    ctx.fillRect(0, 0, w, h);
  }
  //Цикл применения функций к частицам
  function reDrawParticles() {
    for (var i in prt) {
      prt[i].position();
      prt[i].reDraw();
    }
  }

  //Вызов функций, которые отвечают за анимацию частиц
  function loop() {
    reDrawBackgroung();
    reDrawParticles();
    requestAnimationFrame(loop);
  }

  //Назначение параметров частицам
  function init() {
    for (let i = 0; i < prtSettings.prtCount; i++) {
      prt.push(new Particle());
    }

    loop();
  }

  init();
}

function projectAnimation() {
  setTimeout(() => {
    const projectsItem = document.querySelectorAll('.projects__item');

    for (let i = 0; i < projectsItem.length; i++) {
      projectsItem[i].classList.add('projects__item--active');
    }
    document
      .querySelector('.projects__container')
      .classList.remove('container--active');
  }, 500);
}

function projectAnimationClose() {
  const projectsItem = document.querySelectorAll('.projects__item');

  for (let i = 0; i < projectsItem.length; i++) {
    projectsItem[i].classList.remove('projects__item--active');
  }
  document
    .querySelector('.projects__container')
    .classList.add('container--active');
}

function aboutWords() {
  const wordsCanvas = document.createElement('canvas');
  const ctx = wordsCanvas.getContext('2d');
  //Начальный угол
  var currentAngle = 0;
  //Размеры канвас
  let w = (wordsCanvas.width = innerWidth);
  let h = (wordsCanvas.height = innerHeight);
  //Середина экрана
  var baseX = innerWidth / 2;
  var baseY = innerHeight / 2;
  //Радиус
  var radius = w / 3;

  let wordsLength = 0;
  //угол для анимации
  let currentAngle2 = 0;

  //Массив для индивидуальных данных частиц
  let words = [];
  //Настройки
  wordsSettings = {
    wordsName: [
      'HTML',
      'CSS',
      'JS',
      'SCSS',
      'SASS',
      'BEM',
      'GIT',
      'FLEX',
      'GRID',
      'CANVAS',
    ],
    prtMaxVelocity: 0.5,
    prtBgColor: 'rgba(26, 29, 45, 1)',
  };

  //Помещение частиц в секцию
  wordsCanvas.classList.add('about__canvas');
  document.querySelector('.about').appendChild(wordsCanvas);

  //Изменение параметров при изменении размеров окна
  window.onresize = () => {
    w = wordsCanvas.width = innerWidth;
    h = wordsCanvas.height = innerHeight;
    baseX = w / 2;
    baseY = h / 2;
    radius = w / 3;
  };

  class Word {
    constructor() {
      //Текст
      this.text = this.word = wordsSettings.wordsName[wordsLength];
      //Назначение координаты частиц
      this.vx = Math.cos(currentAngle) * radius;
      this.vy = (Math.sin(currentAngle) * radius) / 2;
      //изменение угла
      currentAngle += 360 / (10 / 3.3333);
      wordsLength++;
    }
    position() {
      //изменение угла для анимации
      currentAngle2 += 360 / (10 / 3.3333) + 0.01;
      //изменение координат для анимации
      this.vx = Math.cos(currentAngle2) * radius;
      this.vy = (Math.sin(currentAngle2) * radius) / 2;
    }
    //отрисовка частиц (текста)
    wordDraw() {
      ctx.font = `400 16px montserrat`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fff';
      ctx.fillText(this.text, baseX + this.vx, baseY + this.vy);
    }
  }

  //Заполнение канвас цветом
  function reDrawBackgroung() {
    ctx.fillStyle = 'rgba(26, 29, 45)';
    ctx.fillRect(0, 0, w, h);
  }

  //Цикл применения функций к частицам
  function reDrawParticles() {
    for (var i in words) {
      words[i].position();
      words[i].wordDraw();
    }
  }

  //Вызов функций, которые отвечают за анимацию частиц
  function loop() {
    reDrawBackgroung();
    reDrawParticles();
    requestAnimationFrame(loop);
  }

  //Назначение параметров частицам
  function init() {
    for (let i = 0; i < wordsSettings.wordsName.length; i++) {
      words.push(new Word());
    }
    loop();
  }
  init();
}

document.addEventListener('DOMContentLoaded', () => {
  //Частицы на главной
  heroParticles();
  //Анимация появления заголовка на главной
  heroAnimate();
  //Анимация каждой буквы при наведении
  letterHover();
  //Навигация по сайту
  navigation();
  //Анимация движения слов
  aboutWords();
  //Выбор языка
  selectlanguage();
});
