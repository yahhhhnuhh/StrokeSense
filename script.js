// Animated StrokeSense Landing Page Interactions

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// THEME TOGGLE
const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeToggle) {
        const icon = themeToggle.querySelector('.theme-icon');
        if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀';
    }
    localStorage.setItem('strokesense-theme', theme);
}

const savedTheme = localStorage.getItem('strokesense-theme') || 'bright';
setTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'bright' : 'dark';
        setTheme(next);
    });
}

// LANGUAGE TOGGLE
const translations = {
    en: {
        'brand.name': 'StrokeSense',
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.howItWorks': 'How It Works',
        'nav.about': 'About',
        'hero.title': 'StrokeSense: Learn Baybayin the Smart and Fun Way',
        'hero.subtitle': 'Discover the ancient Filipino script through interactive lessons, stroke-by-stroke guidance, and gamified challenges. Reconnect with your roots while mastering Baybayin writing.',
        'hero.ctaPrimary': 'Start Learning Free',
        'hero.ctaSecondary': 'Watch Demo',
        'features.title': 'Why Choose StrokeSense?',
        'features.aiTitle': 'AI Handwriting Feedback',
        'features.aiBody': 'Instant stroke accuracy evaluation to help you improve with every practice session.',
        'features.gameTitle': 'Gamified Learning',
        'features.gameBody': 'Earn points, unlock badges, and progress through levels as you master Baybayin.',
        'features.progressTitle': 'Progress Tracking',
        'features.progressBody': 'Visual charts and achievement certificates to celebrate your learning journey.',
        'features.cultureTitle': 'Cultural Insights',
        'features.cultureBody': 'Discover the historical context and meaning behind each Baybayin character.',
        'features.responsiveTitle': 'Responsive Design',
        'features.responsiveBody': 'Works seamlessly on desktop, tablet, and mobile devices for learning anywhere.',
        'visual.title': 'Experience Baybayin',
        'visual.charactersTitle': 'Baybayin Characters',
        'gallery.title': 'Filipino Heritage',
        'gallery.subtitle': 'Discover the rich cultural heritage that inspires StrokeSense',
        'how.title': 'How It Works',
        'how.step1Title': 'Sign Up',
        'how.step1Body': 'Create your free account on our web platform in seconds.',
        'how.step2Title': 'Practice',
        'how.step2Body': 'Use your mouse or touchscreen to practice handwriting Baybayin characters.',
        'how.step3Title': 'Get Feedback',
        'how.step3Body': 'Receive instant AI feedback and complete interactive challenges.',
        'how.step4Title': 'Track Progress',
        'how.step4Body': 'Monitor your improvement and unlock achievements as you learn.',
        'benefits.title': 'Benefits',
        'benefits.item1': 'Learn faster with AI guidance',
        'benefits.item2': 'Stay motivated with gamification',
        'benefits.item3': 'Build confidence through progress tracking',
        'benefits.item4': 'Preserve Filipino cultural heritage',
        'benefits.item5': 'Accessible anytime, anywhere',
        'who.title': 'Who It\'s For',
        'who.item1Title': 'Students & Schools',
        'who.item1Body': 'Perfect for classroom learning and homework practice.',
        'who.item2Title': 'Heritage Learners',
        'who.item2Body': 'Connect with your Filipino roots through authentic script learning.',
        'who.item3Title': 'Teachers & Educators',
        'who.item3Body': 'Engage students with interactive cultural education tools.',
        'who.item4Title': 'Cultural Organizations',
        'who.item4Body': 'Promote Filipino heritage in museums and cultural centers.',
        'who.item5Title': 'Art Enthusiasts',
        'who.item5Body': 'Explore the beauty of traditional Filipino calligraphy.',
        'about.title': 'About StrokeSense',
        'about.introTitle': 'Preserving Filipino Heritage Through Technology',
        'about.introBody': 'StrokeSense was born from a passion to preserve and share the beautiful ancient script of Baybayin, the pre-colonial writing system of the Philippines. Our mission is to make learning this traditional script accessible, engaging, and fun for Filipinos and heritage learners worldwide.',
        'about.missionTitle': 'Our Mission',
        'about.missionBody': 'We believe that cultural heritage should be preserved and passed down through generations. By combining cutting-edge AI technology with gamified learning, we\'re making Baybayin accessible to students, educators, and cultural enthusiasts everywhere.',
        'about.valuesTitle': 'Our Values',
        'about.value1Title': 'Cultural Pride',
        'about.value1Body': 'Celebrating and preserving Filipino heritage',
        'about.value2Title': 'Education First',
        'about.value2Body': 'Making learning accessible to everyone',
        'about.value3Title': 'Innovation',
        'about.value3Body': 'Using modern technology for traditional learning',
        'about.value4Title': 'Community',
        'about.value4Body': 'Building connections through shared heritage',
        'quote.title': 'Why StrokeSense Matters',
        'cta.title': 'Start Your Baybayin Journey Today',
        'cta.subtitle': 'Join thousands learning Filipino heritage writing',
        'cta.primary': 'Sign Up Free',
        'cta.secondary': 'See Pricing'
    },
    tl: {
        'brand.name': 'StrokeSense',
        'nav.home': 'Home',
        'nav.features': 'Mga Tampok',
        'nav.howItWorks': 'Paano Gumagana',
        'nav.about': 'Tungkol',
        'hero.title': 'Magbaybayin nang Masaya',
        'hero.subtitle': 'Masterin ang pagsulat ng Baybayin sa tulong ng AI at masayang mga gawain.',
        'hero.ctaPrimary': 'Magsimulang Matuto nang Libre',
        'hero.ctaSecondary': 'Panoorin ang Demo',
        'features.title': 'Bakit StrokeSense?',
        'features.aiTitle': 'AI na Puna sa Sulat-Kamay',
        'features.aiBody': 'Mabilis na pagsusuri ng tama at mali ng bawat stroke habang nagsasanay ka.',
        'features.gameTitle': 'Ginawang Laro ang Pag-aaral',
        'features.gameBody': 'Kumita ng puntos, badges, at level habang natututo ng Baybayin.',
        'features.progressTitle': 'Pagsubaybay ng Progreso',
        'features.progressBody': 'Mga tsart at sertipiko upang ipakita ang iyong pag-unlad.',
        'features.cultureTitle': 'Kultural na Kaalaman',
        'features.cultureBody': 'Alamin ang kasaysayan at kahulugan sa likod ng bawat karakter.',
        'features.responsiveTitle': 'Handa sa Anumang Device',
        'features.responsiveBody': 'Gumagana sa desktop, tablet, at mobile para kahit saan pwedeng mag-aral.',
        'visual.title': 'Maramdaman ang Baybayin',
        'visual.charactersTitle': 'Mga Karakter ng Baybayin',
        'gallery.title': 'Pamanang Pilipino',
        'gallery.subtitle': 'Tuklasin ang mayamang kulturang pinagmulan ng StrokeSense',
        'how.title': 'Paano Gumagana',
        'how.step1Title': 'Mag-sign Up',
        'how.step1Body': 'Gumawa ng iyong libreng account sa ilang segundo lang.',
        'how.step2Title': 'Magsanay',
        'how.step2Body': 'Gamitin ang mouse o touchscreen para magsanay magsulat ng Baybayin.',
        'how.step3Title': 'Tumanggap ng Puna',
        'how.step3Body': 'Tumanggap ng instant na AI feedback at tapusin ang mga hamon.',
        'how.step4Title': 'Subaybayan ang Progreso',
        'how.step4Body': 'Tingnan ang iyong pag-unlad at i-unlock ang mga achievement.',
        'benefits.title': 'Mga Benepisyo',
        'benefits.item1': 'Mas mabilis matuto sa tulong ng AI',
        'benefits.item2': 'Laging ganado dahil parang laro ang pag-aaral',
        'benefits.item3': 'Mas tumataas ang kumpiyansa habang kita ang progreso',
        'benefits.item4': 'Tumutulong sa pagpreserba ng kulturang Pilipino',
        'benefits.item5': 'Accessible kahit saan at kahit kailan',
        'who.title': 'Para Kanino Ito',
        'who.item1Title': 'Mga Estudyante at Paaralan',
        'who.item1Body': 'Sakto para sa klase at takdang-aralin.',
        'who.item2Title': 'Mga Heritage Learner',
        'who.item2Body': 'Mas mapapalapit ka sa iyong pinagmulan bilang Pilipino.',
        'who.item3Title': 'Mga Guro at Tagapagturo',
        'who.item3Body': 'Mas nakaka-engganyong paraan ng pagtuturo ng kultura.',
        'who.item4Title': 'Mga Kultural na Organisasyon',
        'who.item4Body': 'Maipapakita ang Baybayin sa museo at cultural centers.',
        'who.item5Title': 'Mga Mahilig sa Sining',
        'who.item5Body': 'Matuklasan ang ganda ng tradisyunal na kaligrapiyang Pilipino.',
        'about.title': 'Tungkol sa StrokeSense',
        'about.introTitle': 'Pag-iingat ng Pamanang Pilipino sa Pamamagitan ng Teknolohiya',
        'about.introBody': 'Ipinanganak ang StrokeSense mula sa hangaring buhayin at ibahagi ang kagandahan ng Baybayin, ang sinaunang sulat ng Pilipinas.',
        'about.missionTitle': 'Aming Misyon',
        'about.missionBody': 'Pagsamahin ang AI, laro, at kultura upang gawing masaya at epektibo ang pag-aaral ng Baybayin.',
        'about.valuesTitle': 'Aming Mga Halaga',
        'about.value1Title': 'Pagmamalaki sa Kultura',
        'about.value1Body': 'Pagdiriwang at pag-iingat sa pamanang Pilipino.',
        'about.value2Title': 'Edukasyon Muna',
        'about.value2Body': 'Gawing abot-kamay ang pag-aaral para sa lahat.',
        'about.value3Title': 'Inobasyon',
        'about.value3Body': 'Makabagong teknolohiya para sa sinaunang pagsulat.',
        'about.value4Title': 'Komunidad',
        'about.value4Body': 'Pagbuo ng ugnayan sa pamamagitan ng pinagsasaluhang kultura.',
        'quote.title': 'Bakit Mahalaga ang StrokeSense',
        'cta.title': 'Simulan ang Iyong Baybayin Journey Ngayon',
        'cta.subtitle': 'Sumali sa libo-libong natututong magsulat ng Baybayin',
        'cta.primary': 'Mag-sign Up nang Libre',
        'cta.secondary': 'Tingnan ang Pricing'
    }
};

const langButtons = document.querySelectorAll('.lang-btn');

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    localStorage.setItem('strokesense-lang', lang);
}

const savedLang = 'en';
applyLanguage(savedLang);

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
    });
});

// Character click interaction with simple alert (kept)
const charItems = document.querySelectorAll('.char-item');

charItems.forEach(item => {
    item.addEventListener('click', () => {
        const char = item.getAttribute('data-char');
        const translation = item.getAttribute('data-translation');
        alert(`${char} = ${translation}`);
    });
});
