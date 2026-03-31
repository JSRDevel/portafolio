import { useNavigate, Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import { PROJECTS } from '../data/projects.js'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative min-h-[870px] flex flex-col items-center justify-center px-6 overflow-hidden grid-bg">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none"></div>
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-outline-variant/30 bg-surface-container-low rounded-lg">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">Desarrollo Web Profesional</span>
                    </div>
                    <h1 className="font-headline font-black text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 text-white uppercase">
                        TU EVENTO O NEGOCIO CON <span className="text-primary">PRESENCIA ONLINE</span>
                    </h1>
                    <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed opacity-80">
                        Creamos landing pages modernas e invitaciones digitales para eventos, elegantes y fáciles de compartir.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={() => navigate('/contacto')} className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-label font-bold uppercase tracking-widest text-sm hover:brightness-110 transition-all rounded-lg">
                            Cotizar Proyecto
                        </button>
                        <button onClick={() => navigate('/proyectos')} className="w-full sm:w-auto px-10 py-5 border border-white text-white font-label font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-background transition-all rounded-lg">
                            Ver Proyectos
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Row */}
            <section className="border-y border-outline-variant/20 bg-surface-container-lowest py-6">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">celebration</span>
                        <span className="font-label text-[10px] uppercase tracking-widest text-white/70">Invitaciones Digitales</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">language</span>
                        <span className="font-label text-[10px] uppercase tracking-widest text-white/70">Landing Pages</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">smartphone</span>
                        <span className="font-label text-[10px] uppercase tracking-widest text-white/70">Diseño Responsivo</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
                        <span className="font-label text-[10px] uppercase tracking-widest text-white/70">Entrega Rápida</span>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="font-label text-primary text-xs uppercase tracking-widest">Nuestros Servicios</span>
                    <h2 className="font-headline text-4xl font-bold text-white mt-2 tracking-tighter uppercase">¿QUÉ HACEMOS?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {[
                        { num: '01', icon: 'celebration', title: 'INVITACIONES DIGITALES', desc: 'Invitaciones personalizadas para bodas, XV años, bautizos y todo tipo de eventos. Incluyen RSVP, galería de fotos, mapa y música — elegantes y fáciles de compartir.' },
                        { num: '02', icon: 'language', title: 'LANDING PAGES', desc: 'Páginas web profesionales para tu negocio o marca personal. Diseño moderno, optimizadas para celular y listas para posicionar tu negocio en internet.' },
                        { num: '03', icon: 'savings', title: 'HOSTING SIN COSTO', desc: 'Publicamos tu página con una URL personalizada usando GitHub Pages — sin costo de dominio ni hosting. Tu proyecto online con inversión mínima.' }
                    ].map((step, idx) => (
                        <div key={idx} className={"group p-8 border border-outline-variant/20 bg-surface-container-low hover:bg-surface-container-high transition-colors " + (idx !== 0 ? 'md:border-l-0' : '')}>
                            <div className="flex justify-between items-start mb-12">
                                <span className="font-headline text-5xl font-black text-outline-variant/30 group-hover:text-primary/40 transition-colors">{step.num}</span>
                                <span className="material-symbols-outlined text-primary text-4xl">{step.icon}</span>
                            </div>
                            <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase">{step.title}</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Selected Work Preview */}
            <section className="py-24 bg-surface-container-lowest px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                        <div>
                            <span className="font-label text-primary text-xs uppercase tracking-widest">Portafolio</span>
                            <h2 className="font-headline text-4xl font-bold text-white mt-2 tracking-tighter uppercase">PROYECTOS RECIENTES</h2>
                        </div>
                        <Link to="/proyectos" className="font-label text-xs uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-white hover:border-white transition-colors">Ver Todos</Link>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <ProjectCard
                            id="KW-24"
                            type="LANDING_PAGE"
                            title="Kalmar — Atención Gerontológica"
                            desc="Landing page profesional para clínica de atención gerontológica con blog integrado y diseño responsivo."
                            img={PROJECTS[0].imgAlt}
                        />
                        <ProjectCard
                            id="BK-23"
                            type="INVITACIÓN_DIGITAL"
                            title="Boda Karla & José"
                            desc="Invitación digital elegante para boda con RSVP en tiempo real, galería fotográfica y mapa interactivo."
                            img={PROJECTS[1].imgAlt}
                        />
                    </div>
                </div>
            </section>

            {/* Budget Friendly Highlight */}
            <section className="py-20 px-6 border-y border-outline-variant/20">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="material-symbols-outlined text-primary text-5xl mb-4">savings</span>
                    <h2 className="font-headline text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
                        ¿Sin presupuesto para <span className="text-primary">dominio</span>?
                    </h2>
                    <p className="font-body text-on-surface-variant text-base mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
                        Creamos una cuenta de GitHub personalizada para tu proyecto, dándote una URL profesional como
                        <span className="text-primary font-bold"> tu-negocio.github.io</span> — completamente gratis. Sin costos de hosting, sin renovaciones anuales, sin sorpresas.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
                        <div className="p-4 bg-surface-container-low ghost-border rounded-lg">
                            <span className="block font-headline text-2xl font-black text-primary">$0</span>
                            <span className="font-label text-[9px] tracking-widest uppercase text-white/40">Hosting</span>
                        </div>
                        <div className="p-4 bg-surface-container-low ghost-border rounded-lg">
                            <span className="block font-headline text-2xl font-black text-primary">$0</span>
                            <span className="font-label text-[9px] tracking-widest uppercase text-white/40">Dominio</span>
                        </div>
                        <div className="p-4 bg-surface-container-low ghost-border rounded-lg">
                            <span className="block font-headline text-2xl font-black text-primary">SSL</span>
                            <span className="font-label text-[9px] tracking-widest uppercase text-white/40">Incluido</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="font-headline text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">¿Listo para tener presencia online?</h2>
                    <p className="font-body text-on-surface-variant text-lg mb-12 opacity-80 max-w-xl mx-auto">
                        Haz que tu evento o negocio destaque con una página web moderna y profesional. Envíanos mensaje para cotizar.
                    </p>
                    <button onClick={() => navigate('/contacto')} className="px-12 py-6 bg-primary text-white font-label font-bold uppercase tracking-[0.3em] text-sm hover:brightness-110 hover:scale-105 transition-all duration-300 rounded-lg">
                        Envíanos Mensaje
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
