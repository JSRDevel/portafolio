// NOTE: Images are hosted on Google's CDN (lh3.googleusercontent.com) and may expire.
// Replace with self-hosted images (e.g. /assets/img/kalmar.webp) when available.
export const PROJECTS = [
    {
        id: 'KW-24',
        type: 'LANDING_PAGE',
        status: 'LIVE',
        title: 'Kalmar — Atención Gerontológica',
        shortDesc: 'Landing page profesional para clínica de atención gerontológica con blog integrado y diseño responsivo.',
        fullDesc: 'Landing page profesional diseñada para Kalmar, una clínica especializada en atención gerontológica. El sitio presenta los servicios médicos, equipo profesional y blog informativo. Construida con enfoque mobile-first y optimizada para SEO, cuenta con un diseño elegante que transmite confianza y profesionalismo en el sector salud.',
        tags: ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'GITHUB PAGES'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6r2Ns3p_N5kv_eRbFm5gGFY8j7UaY0iNpQx0eDUw4RFyj9xxuvVR86xk608iMrBkL8UV8DAMug5EHcKa7rBBiXgswi0IiIElddIV9nxcWsodGQZwjvxo3PvFI7I1w6S9Kg1PagHc8tmSvVYPzt_UaWyOORhua9jSHV2qQ_LbtU9mcPHhvG4eDT48GNqLZ2TnNpVRPfP_Ku7IfRAC96ma5tsqrJ94jwcSKcnPxFThcBGS4v5326ZRvmCp9LvNruxJvMiHqTP8cq2o',
        imgAlt: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgJ6E6tymLBSVJ6sdnWu-32zjFNFIh7gV6LDr6ivsHR6KsoTYEtNhTJ6opc28iO1gJB5WmLE47SOHSUR7C_aKI1Nql0q78c7aF2uULPMvfnG2nTmpUIFg17aVyUPgcxlfas40xplNmi1zoBy4JClXHb1TBNQA7YsmC9OWT0KlXmLf2-2HqYFbJ03mqOygieZMTzJETTeCpM_18Iqa_ctDsh-Yv_1L5VHaPwP5su57FZvGXhQoLDbV6ooOOidUXNEXVFZ0UbylkLpY',
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
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy6Y0DBgPkc9U1iklNwuTrmu5EmO1sJsOVQ9PKDsfqgelHu-xXYAXs8LJrzw-mpZHEUtESv1FKaTMRMm2SrAufqV34Ffi_4lciXwlOhSeVIQFbI5s438tegCra4ViBETPJWcgFp1iERYEqgRvlW9uGdQKJJetL-hg6L5mC82SHnUmOeP-mC_s0Oo8AfOzJ5daspXPfeKInG2CuOnnWZRJD2jeUJC7vrpg6kaPueop3ceKKNC_rX1Lo1IWAOjqAMYotpRstH2QGMGQ',
        imgAlt: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_gm0SwvYj8ODaxaiZtvM4gCmZZx39aB-jDFKB0WuNb4mPqt7LClezCke1Vpttw9cWQmzy0OwhOiV-taILzMPZsug8mfWH7TG-gBmXyCuzbpT41bchaoRVukSX3ps0xJ3detPr7vcczxsWZHJzJr1QLHQpQs9RsFAbf7czPwgFdrwEBMqSAqzDcKoYD__mXbKDDOgbbp9osVDscgurok0etvZqJpbEimCn5vN9KuFhRzuE8dRszH4S5ejdFXywJjaFZXeiuyd_Hub8',
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
