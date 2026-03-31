import kalmarImg from '../../assets/img/SH-Kalmar.png'
import bodaEnvelopeImg from '../../assets/img/SH-Boda-Karla-y-Jose-1.png'
import bodaMainImg from '../../assets/img/SH-Boda-Karla-y-Jose-2.png'

export const PROJECTS = [
    {
        id: 'KW-24',
        type: 'LANDING_PAGE',
        status: 'LIVE',
        title: 'Kalmar — Atención Gerontológica',
        shortDesc: 'Landing page profesional para clínica de atención gerontológica con blog integrado y diseño responsivo.',
        fullDesc: 'Landing page profesional diseñada para Kalmar, una clínica especializada en atención gerontológica. El sitio presenta los servicios médicos, equipo profesional y blog informativo. Construida con enfoque mobile-first y optimizada para SEO, cuenta con un diseño elegante que transmite confianza y profesionalismo en el sector salud.',
        tags: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'GITHUB PAGES'],
        img: kalmarImg,
        previewImg: kalmarImg,
        viewLabel: 'VER SITIO',
        liveUrl: 'https://kalmar-atencion-gerontologica.github.io/Kalmar-Web/#blog',
        repoUrl: 'https://github.com/kalmar-atencion-gerontologica/Kalmar-Web',
        features: [
            { icon: 'medical_services', label: 'Presentación de servicios médicos especializados' },
            { icon: 'article', label: 'Blog integrado con artículos de salud geriátrica' },
            { icon: 'smartphone', label: 'Diseño 100% adaptable a celular y tablet' },
            { icon: 'savings', label: 'Hosting gratuito con URL personalizada sin costo de dominio' }
        ],
        metrics: [
            { label: 'Lighthouse', value: '95+' },
            { label: 'Mobile', value: '100%' },
            { label: 'Load Time', value: '1.4s' },
            { label: 'Costo Hosting', value: '$0' }
        ]
    },
    {
        id: 'BK-23',
        type: 'INVITACIÓN_DIGITAL',
        status: 'LIVE',
        title: 'Boda Karla & José',
        shortDesc: 'Invitación digital elegante para boda con RSVP en tiempo real, galería fotográfica y mapa interactivo.',
        fullDesc: 'Invitación de boda digital completamente personalizada para Karla y José. Incluye una animación de sobre interactiva al entrar, confirmación de asistencia (RSVP) conectada a Google Sheets en tiempo real, galería de fotos con lightbox, mapa con ubicaciones de la ceremonia y recepción, y un reproductor de música ambiental. Todo alojado en GitHub Pages con una URL personalizada sin costo de dominio.',
        tags: ['HTML', 'CSS', 'JAVASCRIPT', 'GOOGLE APPS SCRIPT', 'GITHUB PAGES'],
        img: bodaMainImg,
        previewImg: bodaEnvelopeImg,
        viewLabel: 'VER INVITACIÓN',
        liveUrl: 'https://karla-y-jose.github.io/Web-Boda/',
        repoUrl: 'https://github.com/karla-y-jose/Web-Boda',
        features: [
            { icon: 'mail', label: 'Animación de sobre interactiva al abrir la invitación' },
            { icon: 'how_to_reg', label: 'Confirmación RSVP conectada a Google Sheets' },
            { icon: 'photo_library', label: 'Galería fotográfica con lightbox y carga de fotos' },
            { icon: 'map', label: 'Mapa interactivo con ubicaciones de ceremonia y recepción' }
        ],
        metrics: [
            { label: 'Invitados', value: '200+' },
            { label: 'Mobile', value: '100%' },
            { label: 'Load Time', value: '1.8s' },
            { label: 'Costo Hosting', value: '$0' }
        ]
    }
];
