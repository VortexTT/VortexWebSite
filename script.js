/* =========================================================
   VORTEX WEBSITE
   Main JavaScript
========================================================= */


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    uk: {

        navFeatures: "Можливості",
        navEditions: "Редакції",
        navThemes: "Теми",
        navDownload: "Завантаження",
        navDownloadButton: "Завантажити",

        heroEyebrow: "НОВИЙ СПОСІБ КОРИСТУВАТИСЯ ІНТЕРНЕТОМ",
        heroTitleOne: "Браузер без",
        heroTitleTwo: "обмежень.",
        heroDescription:
            "Vortex — швидкий, комфортний та оптимізований браузер, створений для того, щоб користуватися інтернетом було приємніше.",
        heroDownload: "Завантажити Vortex",
        heroExplore: "Дізнатися більше",

        metaEditions: "Редакції",
        metaLanguages: "Мови",
        metaThemes: "Теми",

        scroll: "Гортайте далі",

        introLabel: "ЧОМУ VORTEX",
        introTitle:
            "Створений навколо<br><span class='gradient-text'>вашого комфорту.</span>",

        featureOneTitle:
            "Швидкий там,<br>де це важливо.",
        featureOneText:
            "Vortex створений так, щоб залишатися швидким та чуйним із моменту запуску. Без зайвої складності. Без марно витрачених ресурсів.",

        tagPerformance: "Продуктивність",
        tagOptimized: "Оптимізація",
        tagResponsive: "Чуйність",

        featureTwoTitle:
            "Зробіть його своїм.",
        featureTwoText:
            "Змінюйте вигляд Vortex за допомогою колекції продуманих тем. Ваш браузер має відчуватися саме вашим.",
        exploreThemes:
            "Переглянути теми →",

        featureThreeTitle:
            "Один браузер.<br>Різні можливості.",
        featureThreeText:
            "Виберіть редакцію Vortex відповідно до того, чим ви зараз займаєтесь: повсякденне використання, робота чи ігри.",

        editionsLabel:
            "ВИБЕРІТЬ СВІЙ ДОСВІД",
        editionsTitle:
            "Три редакції.<br><span class='gradient-text'>Один Vortex.</span>",
        editionsDescription:
            "Vortex адаптується до того, як ви використовуєте свій комп'ютер.",

        defaultName:
            "Простий",
        defaultDescription:
            "Збалансований Vortex для повсякденного використання. Комфортний, оптимізований та готовий до роботи.",
        defaultPointOne:
            "Оптимізований для щоденного використання",
        defaultPointTwo:
            "Комфортний інтерфейс",
        defaultPointThree:
            "Повний набір можливостей Vortex",
        recommended:
            "Рекомендовано",

        officeName:
            "Офісний",
        officeDescription:
            "Зосередьтеся на роботі та навчанні. Ігрові можливості прибрані, щоб нічого не відволікало.",
        officePointOne:
            "Орієнтований на продуктивність",
        officePointTwo:
            "Мінімум ігрових функцій",
        officePointThree:
            "Легке середовище",
        forWork:
            "Для роботи та навчання",

        gamingName:
            "Ігровий",
        gamingDescription:
            "Створений для геймерів. Ігрові інструменти, функції продуктивності та зменшене використання ресурсів у фоні.",
        gamingPointOne:
            "Ігрові можливості",
        gamingPointTwo:
            "Контроль використання RAM",
        gamingPointThree:
            "Фокус на продуктивності",
        forGaming:
            "Для ігор",
        gamingBadge:
            "ДЛЯ ГЕЙМЕРІВ",

        themesLabel:
            "ЗРОБІТЬ VORTEX СВОЇМ",
        themesTitle:
            "Тема для<br><span class='gradient-text'>кожного настрою.</span>",
        themesDescription:
            "Vortex створений з урахуванням кастомізації. З часом колекція тем може постійно розширюватися.",

        themeLuna:
            "Спокійна та атмосферна",
        themeAero:
            "Світла та прозора",
        themeMetro:
            "Чиста та мінімалістична",
        themeDark:
            "Темна та зосереджена",

        philosophyLabel:
            "ФІЛОСОФІЯ VORTEX",
        philosophyTitle:
            "Браузер не повинен<br>заважати вам.",
        philosophyText:
            "Він просто має працювати. Бути достатньо швидким, щоб не заважати, достатньо комфортним для щоденного використання та достатньо гнучким, щоб стати вашим.",

        downloadLabel:
            "ГОТОВІ?",
        downloadTitle:
            "Знайомтеся з вашим новим<br><span>браузером.</span>",
        downloadDescription:
            "Vortex створений для комфорту, продуктивності та свободи вибору.",
        downloadButton:
            "Завантажити Vortex",
        downloadWindows:
            "Версія для Windows",
        downloadSoon:
            "Інсталятор скоро буде доступний",

        faqLabel:
            "FAQ",
        faqTitle:
            "Є питання?",
        faqDescription:
            "Ось кілька відповідей про Vortex.",

        faqOneQuestion:
            "Що таке Vortex?",
        faqOneAnswer:
            "Vortex — браузер, орієнтований на комфорт, оптимізацію та кастомізацію.",

        faqTwoQuestion:
            "Які редакції будуть доступні?",
        faqTwoAnswer:
            "Vortex планується у трьох редакціях: Простий, Офісний та Ігровий.",

        faqThreeQuestion:
            "Чи можна налаштовувати Vortex?",
        faqThreeAnswer:
            "Так. Vortex створюється з підтримкою тем та можливістю персоналізації.",

        faqFourQuestion:
            "Які мови підтримує Vortex?",
        faqFourAnswer:
            "Vortex підтримує українську, англійську та російську мови.",

        footerDescription:
            "Швидкий. Комфортний. Твій.",

        footerProduct:
            "Продукт",
        footerInfo:
            "Інформація",
        footerRights:
            "Усі права захищено.",
        footerMade:
            "Створено з турботою."

    },


    en: {

        navFeatures: "Features",
        navEditions: "Editions",
        navThemes: "Themes",
        navDownload: "Download",
        navDownloadButton: "Download",

        heroEyebrow: "THE NEW WAY TO BROWSE",
        heroTitleOne: "Browse without",
        heroTitleTwo: "limits.",
        heroDescription:
            "Vortex is a fast, comfortable and optimized browser designed to make the web feel better.",
        heroDownload: "Download Vortex",
        heroExplore: "Explore Vortex",

        metaEditions: "Editions",
        metaLanguages: "Languages",
        metaThemes: "Themes",

        scroll: "Scroll to explore",

        introLabel: "WHY VORTEX",
        introTitle:
            "Built around<br><span class='gradient-text'>your comfort.</span>",

        featureOneTitle:
            "Fast where<br>it matters.",
        featureOneText:
            "Vortex is designed to feel responsive from the moment you launch it. No unnecessary complexity. No wasted resources.",

        tagPerformance: "Performance",
        tagOptimized: "Optimized",
        tagResponsive: "Responsive",

        featureTwoTitle:
            "Make it yours.",
        featureTwoText:
            "Change the look of Vortex with a growing collection of carefully designed themes. Your browser should feel like yours.",
        exploreThemes:
            "Explore themes →",

        featureThreeTitle:
            "One browser.<br>Different experiences.",
        featureThreeText:
            "Choose the Vortex edition that matches what you are doing. Everyday browsing, work or gaming.",

        editionsLabel:
            "CHOOSE YOUR EXPERIENCE",
        editionsTitle:
            "Three editions.<br><span class='gradient-text'>One Vortex.</span>",
        editionsDescription:
            "Vortex adapts to the way you use your computer.",

        defaultName:
            "Default",
        defaultDescription:
            "The balanced Vortex experience. Comfortable, optimized and ready for everyday browsing.",
        defaultPointOne:
            "Optimized everyday experience",
        defaultPointTwo:
            "Comfortable interface",
        defaultPointThree:
            "Full Vortex features",
        recommended:
            "Recommended",

        officeName:
            "Office",
        officeDescription:
            "Focus on work and study with gaming features kept out of the way.",
        officePointOne:
            "Productivity focused",
        officePointTwo:
            "Reduced gaming features",
        officePointThree:
            "Lightweight experience",
        forWork:
            "For work & study",

        gamingName:
            "Gaming",
        gamingDescription:
            "Built for gamers. Gaming tools, performance features and reduced background resource usage.",
        gamingPointOne:
            "Gaming features",
        gamingPointTwo:
            "RAM-conscious background behavior",
        gamingPointThree:
            "Performance focused",
        forGaming:
            "For gaming",
        gamingBadge:
            "FOR GAMERS",

        themesLabel:
            "MAKE VORTEX YOURS",
        themesTitle:
            "A theme for<br><span class='gradient-text'>every mood.</span>",
        themesDescription:
            "Vortex is designed to be customizable. More themes can be added over time.",

        themeLuna:
            "Calm & atmospheric",
        themeAero:
            "Light & transparent",
        themeMetro:
            "Clean & minimal",
        themeDark:
            "Pure & focused",

        philosophyLabel:
            "THE VORTEX PHILOSOPHY",
        philosophyTitle:
            "A browser shouldn't<br>get in your way.",
        philosophyText:
            "It should simply work. Fast enough to stay out of the way, comfortable enough to use all day, and flexible enough to become yours.",

        downloadLabel:
            "READY?",
        downloadTitle:
            "Meet your new<br><span>browser.</span>",
        downloadDescription:
            "Vortex is built for comfort, performance and freedom of choice.",
        downloadButton:
            "Download Vortex",
        downloadWindows:
            "Windows version",
        downloadSoon:
            "Setup coming soon",

        faqLabel:
            "FAQ",
        faqTitle:
            "Questions?",
        faqDescription:
            "Here are some answers about Vortex.",

        faqOneQuestion:
            "What is Vortex?",
        faqOneAnswer:
            "Vortex is a browser focused on comfort, optimization and customization.",

        faqTwoQuestion:
            "What editions are available?",
        faqTwoAnswer:
            "Vortex is planned in Default, Office and Gaming editions.",

        faqThreeQuestion:
            "Can I customize Vortex?",
        faqThreeAnswer:
            "Yes. Vortex is designed with themes and customization in mind.",

        faqFourQuestion:
            "Which languages does Vortex support?",
        faqFourAnswer:
            "Vortex currently supports Ukrainian, English and Russian.",

        footerDescription:
            "Fast. Comfortable. Yours.",

        footerProduct:
            "Product",
        footerInfo:
            "Information",
        footerRights:
            "All rights reserved.",
        footerMade:
            "Made with care."

    },


    ru: {

        navFeatures: "Возможности",
        navEditions: "Редакции",
        navThemes: "Темы",
        navDownload: "Скачать",
        navDownloadButton: "Скачать",

        heroEyebrow: "НОВЫЙ СПОСОБ ПОЛЬЗОВАТЬСЯ ИНТЕРНЕТОМ",
        heroTitleOne: "Браузер без",
        heroTitleTwo: "ограничений.",
        heroDescription:
            "Vortex — быстрый, комфортный и оптимизированный браузер, созданный для приятной работы в интернете.",
        heroDownload: "Скачать Vortex",
        heroExplore: "Узнать больше",

        metaEditions: "Редакции",
        metaLanguages: "Языки",
        metaThemes: "Темы",

        scroll: "Листайте дальше",

        introLabel: "ПОЧЕМУ VORTEX",
        introTitle:
            "Создан вокруг<br><span class='gradient-text'>вашего комфорта.</span>",

        featureOneTitle:
            "Быстрый там,<br>где это важно.",
        featureOneText:
            "Vortex создан так, чтобы оставаться быстрым и отзывчивым с момента запуска. Без лишней сложности. Без напрасно потраченных ресурсов.",

        tagPerformance: "Производительность",
        tagOptimized: "Оптимизация",
        tagResponsive: "Отзывчивость",

        featureTwoTitle:
            "Сделайте его своим.",
        featureTwoText:
            "Меняйте внешний вид Vortex с помощью коллекции продуманных тем. Ваш браузер должен ощущаться именно вашим.",
        exploreThemes:
            "Посмотреть темы →",

        featureThreeTitle:
            "Один браузер.<br>Разные возможности.",
        featureThreeText:
            "Выберите редакцию Vortex в зависимости от того, чем вы сейчас занимаетесь: повседневное использование, работа или игры.",

        editionsLabel:
            "ВЫБЕРИТЕ СВОЙ ОПЫТ",
        editionsTitle:
            "Три редакции.<br><span class='gradient-text'>Один Vortex.</span>",
        editionsDescription:
            "Vortex адаптируется к тому, как вы используете свой компьютер.",

        defaultName:
            "Простой",
        defaultDescription:
            "Сбалансированный Vortex для повседневного использования. Комфортный, оптимизированный и готовый к работе.",
        defaultPointOne:
            "Оптимизирован для ежедневного использования",
        defaultPointTwo:
            "Комфортный интерфейс",
        defaultPointThree:
            "Полный набор возможностей Vortex",
        recommended:
            "Рекомендуется",

        officeName:
            "Офисный",
        officeDescription:
            "Сосредоточьтесь на работе и учебе. Игровые возможности убраны, чтобы ничего не отвлекало.",
        officePointOne:
            "Ориентирован на продуктивность",
        officePointTwo:
            "Минимум игровых функций",
        officePointThree:
            "Легкое окружение",
        forWork:
            "Для работы и учебы",

        gamingName:
            "Игровой",
        gamingDescription:
            "Создан для геймеров. Игровые инструменты, функции производительности и уменьшенное использование ресурсов в фоне.",
        gamingPointOne:
            "Игровые возможности",
        gamingPointTwo:
            "Контроль использования RAM",
        gamingPointThree:
            "Фокус на производительности",
        forGaming:
            "Для игр",
        gamingBadge:
            "ДЛЯ ГЕЙМЕРОВ",

        themesLabel:
            "СДЕЛАЙТЕ VORTEX СВОИМ",
        themesTitle:
            "Тема для<br><span class='gradient-text'>любого настроения.</span>",
        themesDescription:
            "Vortex создается с учетом кастомизации. Со временем коллекция тем может постоянно расширяться.",

        themeLuna:
            "Спокойная и атмосферная",
        themeAero:
            "Светлая и прозрачная",
        themeMetro:
            "Чистая и минималистичная",
        themeDark:
            "Темная и сосредоточенная",

        philosophyLabel:
            "ФИЛОСОФИЯ VORTEX",
        philosophyTitle:
            "Браузер не должен<br>мешать вам.",
        philosophyText:
            "Он просто должен работать. Быть достаточно быстрым, чтобы не мешать, достаточно комфортным для ежедневного использования и достаточно гибким, чтобы стать вашим.",

        downloadLabel:
            "ГОТОВЫ?",
        downloadTitle:
            "Познакомьтесь с вашим новым<br><span>браузером.</span>",
        downloadDescription:
            "Vortex создан для комфорта, производительности и свободы выбора.",
        downloadButton:
            "Скачать Vortex",
        downloadWindows:
            "Версия для Windows",
        downloadSoon:
            "Установщик скоро будет доступен",

        faqLabel:
            "FAQ",
        faqTitle:
            "Есть вопросы?",
        faqDescription:
            "Вот несколько ответов о Vortex.",

        faqOneQuestion:
            "Что такое Vortex?",
        faqOneAnswer:
            "Vortex — браузер, ориентированный на комфорт, оптимизацию и кастомизацию.",

        faqTwoQuestion:
            "Какие редакции будут доступны?",
        faqTwoAnswer:
            "Vortex планируется в трех редакциях: Простой, Офисный и Игровой.",

        faqThreeQuestion:
            "Можно ли настраивать Vortex?",
        faqThreeAnswer:
            "Да. Vortex создается с поддержкой тем и возможностью персонализации.",

        faqFourQuestion:
            "Какие языки поддерживает Vortex?",
        faqFourAnswer:
            "Vortex поддерживает украинский, английский и русский языки.",

        footerDescription:
            "Быстрый. Комфортный. Твой.",

        footerProduct:
            "Продукт",
        footerInfo:
            "Информация",
        footerRights:
            "Все права защищены.",
        footerMade:
            "Создано с заботой."

    }

};


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");

const currentLanguage =
    document.getElementById("currentLanguage");

const languageButtons =
    document.querySelectorAll(
        "[data-language]"
    );


function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );

    elements.forEach(element => {

        const key =
            element.getAttribute("data-i18n");

        if (
            translations[language][key] !== undefined
        ) {

            element.innerHTML =
                translations[language][key];

        }

    });


    document.documentElement.lang =
        language;

    const languageCodes = {
        uk: "UA",
        en: "EN",
        ru: "RU"
    };

    currentLanguage.textContent =
        languageCodes[language];

    localStorage.setItem(
        "vortex-language",
        language
    );

}


/* Open / close language menu */

languageButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        languageButton.classList.toggle(
            "active"
        );

        languageMenu.classList.toggle(
            "active"
        );

    }
);


/* Select language */

languageButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const language =
                button.dataset.language;

            setLanguage(language);

            languageButton.classList.remove(
                "active"
            );

            languageMenu.classList.remove(
                "active"
            );

        }
    );

});


/* Close language menu outside */

document.addEventListener(
    "click",
    event => {

        if (
            !languageMenu.contains(event.target) &&
            !languageButton.contains(event.target)
        ) {

            languageButton.classList.remove(
                "active"
            );

            languageMenu.classList.remove(
                "active"
            );

        }

    }
);


/* Load saved language */

const savedLanguage =
    localStorage.getItem(
        "vortex-language"
    );


if (savedLanguage) {

    setLanguage(savedLanguage);

} else {

    setLanguage("uk");

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.getElementById("header");


function updateHeader() {

    if (window.scrollY > 30) {

        header.classList.add(
            "scrolled"
        );

    } else {

        header.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal:not(.hero .reveal)"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        }
    );


revealElements.forEach(
    element => {
        revealObserver.observe(element);
    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


function closeMobileMenu() {

    mobileMenuButton.classList.remove(
        "active"
    );

    mobileMenu.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "menu-open"
    );

}


mobileMenuButton.addEventListener(
    "click",
    () => {

        const active =
            mobileMenu.classList.toggle(
                "active"
            );

        mobileMenuButton.classList.toggle(
            "active",
            active
        );

        document.body.classList.toggle(
            "menu-open",
            active
        );

    }
);


/* Close mobile menu after navigation */

mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/* =========================================================
   FAQ
========================================================= */

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );


faqItems.forEach(item => {

    const question =
        item.querySelector(
            ".faq-question"
        );

    const answer =
        item.querySelector(
            ".faq-answer"
        );


    question.addEventListener(
        "click",
        () => {

            const isActive =
                item.classList.contains(
                    "active"
                );


            faqItems.forEach(
                otherItem => {

                    otherItem.classList.remove(
                        "active"
                    );

                    const otherAnswer =
                        otherItem.querySelector(
                            ".faq-answer"
                        );

                    otherAnswer.style.maxHeight =
                        null;

                }
            );


            if (!isActive) {

                item.classList.add(
                    "active"
                );

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        }
    );

});


/* =========================================================
   SMOOTH ANCHOR NAVIGATION
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header.offsetHeight;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    });


/* =========================================================
   DOWNLOAD BUTTON
========================================================= */

const downloadButton =
    document.getElementById(
        "downloadButton"
    );


downloadButton.addEventListener(
    "click",
    event => {

        event.preventDefault();

        /*
            Тут пізніше можна поставити
            реальний URL:

            window.location.href =
                "downloads/VortexSetup.exe";

            або:

            window.location.href =
                "https://your-domain.com/download/VortexSetup.exe";
        */

        const originalHTML =
            downloadButton.innerHTML;


        downloadButton.innerHTML =
            "<span>Vortex Setup — coming soon</span>";


        setTimeout(
            () => {

                downloadButton.innerHTML =
                    originalHTML;

            },
            2500
        );

    }
);


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );


currentYear.textContent =
    new Date().getFullYear();


/* =========================================================
   SMALL PARALLAX EFFECT FOR HERO
========================================================= */

const heroBrowser =
    document.querySelector(
        ".hero-browser"
    );


if (
    heroBrowser &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth) -
                0.5;

            const y =
                (event.clientY /
                    window.innerHeight) -
                0.5;


            heroBrowser.style.transform =
                `translate3d(
                    ${x * 7}px,
                    ${y * 7}px,
                    0
                )`;

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "mouseleave",
        () => {

            heroBrowser.style.transform =
                "translate3d(0, 0, 0)";

        }
    );

}


/* =========================================================
   THEME CARDS HOVER TILT
========================================================= */

const themeCards =
    document.querySelectorAll(
        ".theme-card"
    );


if (
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    themeCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) /
                        centerY) *
                    -2;

                const rotateY =
                    ((x - centerX) /
                        centerX) *
                    2;


                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-7px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   RESIZE HANDLING
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 800
        ) {

            closeMobileMenu();

        }


        document
            .querySelectorAll(
                ".faq-item.active .faq-answer"
            )
            .forEach(answer => {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            });

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

document.body.classList.add(
    "vortex-ready"
);

console.log(
    "%cVORTEX",
    "font-size:32px;font-weight:800;"
);

console.log(
    "Vortex website initialized."
);