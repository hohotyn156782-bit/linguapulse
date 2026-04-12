// ===== i18n =====
const translations = {
    ru: {
        nav_languages: 'Языки',
        nav_how: 'Как это работает',
        nav_courses: 'Курсы',
        nav_teachers: 'Преподаватели',
        nav_reviews: 'Отзывы',
        nav_faq: 'FAQ',
        nav_trial: 'Пробный урок',
        hero_badge: 'Онлайн-школа языков',
        hero_title1: 'Заговори на',
        hero_title2: 'уверенно',
        hero_subtitle: '6 языков, живые уроки с носителями, гибкое расписание. Первый результат — через 2 недели.',
        hero_cta: 'Записаться на пробный урок',
        hero_cta2: 'Смотреть курсы',
        hero_trust: '2,500+ студентов уже учатся с нами',
        hero_card1: 'Живые уроки',
        hero_card2: '6 языков',
        hero_card3: 'Откуда угодно',
        hero_card4: 'Сертификат',
        stat1: 'Студентов',
        stat2: 'Преподавателей',
        stat3: 'Языков',
        stat4: 'Довольных студентов',
        lang_title: 'Выберите свой язык',
        lang_subtitle: 'Мы преподаём 6 самых востребованных языков мира',
        lang_en: 'Английский',
        lang_de: 'Немецкий',
        lang_fr: 'Французский',
        lang_es: 'Испанский',
        lang_zh: 'Китайский',
        lang_ja: 'Японский',
        lang_en_desc: 'Международный язык бизнеса и технологий',
        lang_de_desc: 'Язык инженерии, науки и культуры',
        lang_fr_desc: 'Язык дипломатии, моды и искусства',
        lang_es_desc: 'Второй по распространённости язык мира',
        lang_zh_desc: 'Язык крупнейшей экономики будущего',
        lang_ja_desc: 'Язык технологий, аниме и уникальной культуры',
        lang_levels: 'A1 — C2',
        lang_levels_zh: 'HSK 1 — HSK 6',
        lang_levels_ja: 'N5 — N1',
        how_title: 'Как это работает',
        how_subtitle: '4 простых шага к свободному владению языком',
        how_step1_title: 'Запишитесь',
        how_step1_desc: 'Оставьте заявку на бесплатный пробный урок. Мы свяжемся с вами в течение часа.',
        how_step2_title: 'Определим уровень',
        how_step2_desc: 'На пробном уроке преподаватель определит ваш уровень и составит персональный план.',
        how_step3_title: 'Занимайтесь',
        how_step3_desc: 'Живые уроки по видеосвязи с носителем языка. Гибкий график — вы выбираете время.',
        how_step4_title: 'Получите результат',
        how_step4_desc: 'Сдайте финальный тест и получите сертификат. Средний срок до первых результатов — 2 недели.',
        courses_title: 'Наши курсы',
        courses_subtitle: 'Выберите формат, который подходит именно вам',
        course_popular: 'Популярный',
        course_best: 'Лучший выбор',
        course_intensive: 'Интенсив',
        course1_name: 'Индивидуальный',
        course1_desc: 'Персональные занятия 1-на-1 с преподавателем. Максимум внимания и гибкий график.',
        course1_f1: '60 минут урок',
        course1_f2: 'Персональная программа',
        course1_f3: 'Гибкое расписание',
        course1_f4: 'Домашние задания',
        course2_name: 'Мини-группа',
        course2_desc: 'Группы по 3-5 человек. Баланс внимания преподавателя и разговорной практики.',
        course2_f1: '90 минут урок',
        course2_f2: '3-5 человек в группе',
        course2_f3: 'Разговорный клуб',
        course2_f4: 'Материалы включены',
        course3_name: 'Интенсивный',
        course3_desc: '5 занятий в неделю для тех, кто хочет быстрый результат. Уровень за 2 месяца.',
        course3_f1: '60 минут урок',
        course3_f2: '5 раз в неделю',
        course3_f3: 'Ежедневные задания',
        course3_f4: 'Прогресс-трекер',
        course_per: '/ урок',
        course_cta: 'Начать обучение',
        teachers_title: 'Наши преподаватели',
        teachers_subtitle: 'Носители языка с педагогическим образованием и опытом от 5 лет',
        teacher1_lang: 'Английский',
        teacher1_exp: '8 лет опыта • CELTA',
        teacher1_desc: 'Специалист по бизнес-английскому и подготовке к IELTS. Работала в Лондоне и Сингапуре.',
        teacher2_lang: 'Немецкий',
        teacher2_exp: '12 лет опыта • Goethe-Institut',
        teacher2_desc: 'Преподавал в университетах Мюнхена. Автор методики быстрого освоения немецкой грамматики.',
        teacher3_lang: 'Французский',
        teacher3_exp: '6 лет опыта • DALF C2',
        teacher3_desc: 'Родом из Парижа. Делает уроки живыми — через кино, музыку и современную культуру.',
        teacher4_lang: 'Японский',
        teacher4_exp: '7 лет опыта • JLPT N1',
        teacher4_desc: 'Из Токио. Обучает через аниме, мангу и реальные ситуации. Популярна среди студентов.',
        reviews_title: 'Отзывы студентов',
        reviews_subtitle: 'Что говорят те, кто уже учится в LinguaPulse',
        review1_text: '«За 3 месяца подняла английский с B1 до B2. Преподаватель Sarah — просто огонь! Уроки пролетают незаметно.»',
        review1_name: 'Анна М.',
        review1_course: 'Английский, B1→B2',
        review2_text: '«Начал учить японский с нуля, думал будет невозможно. Через полгода уже смотрю аниме без субтитров. Юки-сенсей — лучшая!»',
        review2_name: 'Дмитрий К.',
        review2_course: 'Японский, N5→N3',
        review3_text: '«Мини-группа — идеальный формат. И дешевле, и разговорной практики больше. Немецкий перестал казаться сложным!»',
        review3_name: 'Мария С.',
        review3_course: 'Немецкий, A2→B1',
        review4_text: '«Интенсивный курс — то, что нужно перед переездом. За 2 месяца выучил испанский до уровня уверенного общения.»',
        review4_name: 'Игорь Л.',
        review4_course: 'Испанский, A1→B1',
        faq_title: 'Частые вопросы',
        faq_subtitle: 'Ответы на самые популярные вопросы наших студентов',
        faq1_q: 'Как проходят занятия?',
        faq1_a: 'Занятия проходят онлайн по видеосвязи (Zoom или Google Meet). Вам нужен только компьютер или планшет с камерой и микрофоном. Все материалы предоставляются в электронном виде.',
        faq2_q: 'Можно ли перенести урок?',
        faq2_a: 'Да, урок можно перенести бесплатно, если предупредить за 4 часа до начала. Мы понимаем, что планы меняются, и стараемся быть гибкими.',
        faq3_q: 'У меня нулевой уровень — это нормально?',
        faq3_a: 'Абсолютно! Большинство наших студентов начинают с нуля. Наши преподаватели владеют русским языком и помогут вам комфортно начать обучение.',
        faq4_q: 'Какой сертификат я получу?',
        faq4_a: 'По окончании курса вы получите сертификат LinguaPulse с указанием достигнутого уровня. Также мы помогаем подготовиться к международным экзаменам (IELTS, DELF, Goethe-Zertifikat и др.).',
        faq5_q: 'Есть ли скидки на пакеты уроков?',
        faq5_a: 'Да! При покупке пакета от 10 уроков — скидка 10%, от 20 уроков — 15%, от 40 уроков — 20%. Также действуют семейные скидки и скидки для студентов.',
        faq6_q: 'Как оплатить обучение?',
        faq6_a: 'Принимаем банковские карты, электронные кошельки и банковские переводы. Оплата помесячная или за пакет уроков — как вам удобнее.',
        trial_title: 'Запишитесь на бесплатный пробный урок',
        trial_desc: '30 минут, которые изменят ваш подход к изучению языков. Без обязательств — просто попробуйте.',
        trial_b1: 'Определим ваш текущий уровень',
        trial_b2: 'Составим персональный план обучения',
        trial_b3: 'Познакомитесь с преподавателем',
        trial_b4: 'Получите рекомендации по формату',
        form_name: 'Ваше имя',
        form_email: 'Email',
        form_phone: 'Телефон',
        form_language: 'Какой язык хотите изучать?',
        form_select: 'Выберите язык',
        form_submit: 'Записаться бесплатно',
        form_note: 'Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности',
        footer_tagline: 'Онлайн-школа иностранных языков. Учитесь у лучших преподавателей мира.',
        footer_nav: 'Навигация',
        footer_contacts: 'Контакты',
        footer_rights: 'Все права защищены.',
        success_title: 'Заявка отправлена!',
        success_text: 'Мы свяжемся с вами в течение часа для подтверждения пробного урока.'
    },
    en: {
        nav_languages: 'Languages',
        nav_how: 'How It Works',
        nav_courses: 'Courses',
        nav_teachers: 'Teachers',
        nav_reviews: 'Reviews',
        nav_faq: 'FAQ',
        nav_trial: 'Free Trial',
        hero_badge: 'Online Language School',
        hero_title1: 'Speak',
        hero_title2: 'with confidence',
        hero_subtitle: '6 languages, live lessons with native speakers, flexible schedule. First results in just 2 weeks.',
        hero_cta: 'Book a Free Trial Lesson',
        hero_cta2: 'View Courses',
        hero_trust: '2,500+ students already learning with us',
        hero_card1: 'Live Lessons',
        hero_card2: '6 Languages',
        hero_card3: 'From Anywhere',
        hero_card4: 'Certificate',
        stat1: 'Students',
        stat2: 'Teachers',
        stat3: 'Languages',
        stat4: 'Satisfaction Rate',
        lang_title: 'Choose Your Language',
        lang_subtitle: 'We teach the 6 most in-demand languages in the world',
        lang_en: 'English',
        lang_de: 'German',
        lang_fr: 'French',
        lang_es: 'Spanish',
        lang_zh: 'Chinese',
        lang_ja: 'Japanese',
        lang_en_desc: 'The international language of business and technology',
        lang_de_desc: 'The language of engineering, science, and culture',
        lang_fr_desc: 'The language of diplomacy, fashion, and art',
        lang_es_desc: 'The second most spoken language in the world',
        lang_zh_desc: 'The language of the world\'s largest future economy',
        lang_ja_desc: 'The language of technology, anime, and unique culture',
        lang_levels: 'A1 — C2',
        lang_levels_zh: 'HSK 1 — HSK 6',
        lang_levels_ja: 'N5 — N1',
        how_title: 'How It Works',
        how_subtitle: '4 simple steps to language fluency',
        how_step1_title: 'Sign Up',
        how_step1_desc: 'Submit a request for a free trial lesson. We\'ll contact you within an hour.',
        how_step2_title: 'Level Assessment',
        how_step2_desc: 'During your trial, the teacher will assess your level and create a personalized plan.',
        how_step3_title: 'Start Learning',
        how_step3_desc: 'Live video lessons with native speakers. Flexible schedule — you choose the time.',
        how_step4_title: 'Get Results',
        how_step4_desc: 'Pass the final test and earn your certificate. Average time to first results — 2 weeks.',
        courses_title: 'Our Courses',
        courses_subtitle: 'Choose the format that works best for you',
        course_popular: 'Popular',
        course_best: 'Best Value',
        course_intensive: 'Intensive',
        course1_name: 'Individual',
        course1_desc: 'Personal 1-on-1 sessions with a teacher. Maximum attention and flexible schedule.',
        course1_f1: '60-minute lessons',
        course1_f2: 'Personalized program',
        course1_f3: 'Flexible schedule',
        course1_f4: 'Homework assignments',
        course2_name: 'Mini Group',
        course2_desc: 'Groups of 3-5 students. Perfect balance of teacher attention and speaking practice.',
        course2_f1: '90-minute lessons',
        course2_f2: '3-5 students per group',
        course2_f3: 'Speaking club',
        course2_f4: 'Materials included',
        course3_name: 'Intensive',
        course3_desc: '5 lessons per week for those who want fast results. One level in 2 months.',
        course3_f1: '60-minute lessons',
        course3_f2: '5 times per week',
        course3_f3: 'Daily assignments',
        course3_f4: 'Progress tracker',
        course_per: '/ lesson',
        course_cta: 'Start Learning',
        teachers_title: 'Our Teachers',
        teachers_subtitle: 'Native speakers with teaching degrees and 5+ years of experience',
        teacher1_lang: 'English',
        teacher1_exp: '8 years exp. • CELTA',
        teacher1_desc: 'Business English and IELTS specialist. Worked in London and Singapore.',
        teacher2_lang: 'German',
        teacher2_exp: '12 years exp. • Goethe-Institut',
        teacher2_desc: 'Taught at Munich universities. Author of a fast German grammar method.',
        teacher3_lang: 'French',
        teacher3_exp: '6 years exp. • DALF C2',
        teacher3_desc: 'From Paris. Makes lessons engaging through cinema, music, and modern culture.',
        teacher4_lang: 'Japanese',
        teacher4_exp: '7 years exp. • JLPT N1',
        teacher4_desc: 'From Tokyo. Teaches through anime, manga, and real-life situations. Student favorite.',
        reviews_title: 'Student Reviews',
        reviews_subtitle: 'What our LinguaPulse students are saying',
        review1_text: '"Raised my English from B1 to B2 in 3 months. Sarah is amazing! Lessons fly by."',
        review1_name: 'Anna M.',
        review1_course: 'English, B1→B2',
        review2_text: '"Started Japanese from zero, thought it would be impossible. After 6 months I watch anime without subtitles. Yuki-sensei is the best!"',
        review2_name: 'Dmitry K.',
        review2_course: 'Japanese, N5→N3',
        review3_text: '"Mini group is the perfect format. Cheaper and more speaking practice. German stopped feeling hard!"',
        review3_name: 'Maria S.',
        review3_course: 'German, A2→B1',
        review4_text: '"The intensive course was exactly what I needed before relocating. Learned Spanish to conversational level in 2 months."',
        review4_name: 'Igor L.',
        review4_course: 'Spanish, A1→B1',
        faq_title: 'Frequently Asked Questions',
        faq_subtitle: 'Answers to the most common questions from our students',
        faq1_q: 'How are lessons conducted?',
        faq1_a: 'Lessons are held online via video call (Zoom or Google Meet). All you need is a computer or tablet with a camera and microphone. All materials are provided digitally.',
        faq2_q: 'Can I reschedule a lesson?',
        faq2_a: 'Yes, you can reschedule for free with at least 4 hours notice. We understand plans change and try to be flexible.',
        faq3_q: 'I\'m a complete beginner — is that okay?',
        faq3_a: 'Absolutely! Most of our students start from zero. Our teachers speak Russian and will help you get started comfortably.',
        faq4_q: 'What certificate will I receive?',
        faq4_a: 'Upon completion, you\'ll receive a LinguaPulse certificate with your achieved level. We also help prepare for international exams (IELTS, DELF, Goethe-Zertifikat, etc.).',
        faq5_q: 'Are there bulk lesson discounts?',
        faq5_a: 'Yes! 10+ lessons — 10% off, 20+ — 15% off, 40+ — 20% off. Family and student discounts are also available.',
        faq6_q: 'How do I pay?',
        faq6_a: 'We accept bank cards, e-wallets, and bank transfers. Pay monthly or per lesson package — whatever works for you.',
        trial_title: 'Book a Free Trial Lesson',
        trial_desc: '30 minutes that will change your approach to learning languages. No commitment — just try.',
        trial_b1: 'Assess your current level',
        trial_b2: 'Create a personalized learning plan',
        trial_b3: 'Meet your teacher',
        trial_b4: 'Get format recommendations',
        form_name: 'Your Name',
        form_email: 'Email',
        form_phone: 'Phone',
        form_language: 'Which language do you want to learn?',
        form_select: 'Choose a language',
        form_submit: 'Book for Free',
        form_note: 'By clicking, you agree to our privacy policy',
        footer_tagline: 'Online language school. Learn from the best teachers worldwide.',
        footer_nav: 'Navigation',
        footer_contacts: 'Contacts',
        footer_rights: 'All rights reserved.',
        success_title: 'Request Sent!',
        success_text: 'We\'ll contact you within an hour to confirm your trial lesson.'
    }
};

let currentLang = 'ru';

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });

    const toggle = document.getElementById('langToggle');
    toggle.textContent = lang === 'ru' ? 'EN' : 'RU';
}

// ===== HEADER SCROLL =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== BURGER =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===== LANG TOGGLE =====
document.getElementById('langToggle').addEventListener('click', () => {
    setLanguage(currentLang === 'ru' ? 'en' : 'ru');
});

// ===== HERO LANGUAGE ROTATION =====
const heroLanguages = ['English', 'Deutsch', 'Français', 'Español', '中文', '日本語'];
let heroLangIndex = 0;
const heroLangEl = document.getElementById('heroLang');

setInterval(() => {
    heroLangEl.style.opacity = '0';
    setTimeout(() => {
        heroLangIndex = (heroLangIndex + 1) % heroLanguages.length;
        heroLangEl.textContent = heroLanguages[heroLangIndex];
        heroLangEl.style.opacity = '1';
    }, 300);
}, 2500);

// ===== COUNTER ANIMATION =====
function animateCounters() {
    document.querySelectorAll('.stat').forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const numberEl = stat.querySelector('.stat__number');
        if (stat.dataset.animated) return;

        const rect = stat.getBoundingClientRect();
        if (rect.top > window.innerHeight || rect.bottom < 0) return;

        stat.dataset.animated = 'true';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(target * eased);
            numberEl.textContent = current.toLocaleString();
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    });
}

window.addEventListener('scroll', animateCounters);
animateCounters();

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const answer = item.querySelector('.faq__answer');
        const isActive = item.classList.contains('active');

        // close all
        document.querySelectorAll('.faq__item').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.faq__answer').style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// ===== REVIEWS SLIDER =====
const track = document.getElementById('reviewsTrack');
const prevBtn = document.getElementById('reviewPrev');
const nextBtn = document.getElementById('reviewNext');
let reviewIndex = 0;

function getVisibleCards() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

function updateSlider() {
    const cards = track.querySelectorAll('.review-card');
    const visible = getVisibleCards();
    const maxIndex = Math.max(0, cards.length - visible);
    reviewIndex = Math.min(reviewIndex, maxIndex);

    const gap = 24;
    const cardWidth = (track.parentElement.offsetWidth - gap * (visible - 1)) / visible;
    const offset = reviewIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    cards.forEach(c => c.style.minWidth = cardWidth + 'px');
}

prevBtn.addEventListener('click', () => {
    reviewIndex = Math.max(0, reviewIndex - 1);
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    const cards = track.querySelectorAll('.review-card');
    const maxIndex = Math.max(0, cards.length - getVisibleCards());
    reviewIndex = Math.min(maxIndex, reviewIndex + 1);
    updateSlider();
});

window.addEventListener('resize', updateSlider);
updateSlider();

// ===== FORM =====
document.getElementById('trialForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const t = translations[currentLang];

    form.classList.add('success');
    form.innerHTML = `
        <div class="trial__success">
            <div class="trial__success-icon">🎉</div>
            <h3 class="trial__success-title">${t.success_title}</h3>
            <p class="trial__success-text">${t.success_text}</p>
        </div>
    `;
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const els = document.querySelectorAll(
        '.lang-card, .how__step, .course-card, .teacher-card, .review-card, .faq__item, .trial__inner'
    );
    els.forEach(el => el.classList.add('fade-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    els.forEach(el => observer.observe(el));
}

initScrollAnimations();

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href === '#' || href === '') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
