import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects.js'

const ProjectsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto radial-grid-bg min-h-screen">
            <header className="mb-16 border-l-4 border-primary pl-6 py-4">
                <p className="font-label text-primary text-xs tracking-[0.3em] mb-2 font-bold">PORTAFOLIO // PROYECTOS</p>
                <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-none">
                    NUESTROS <span className="text-primary">PROYECTOS</span>
                </h1>
            </header>

            <div className="grid grid-cols-1 gap-12">
                {/* Project 1 — Kalmar */}
                <article className="bg-surface-container-low ghost-border flex flex-col md:grid md:grid-cols-12 overflow-hidden rounded-lg">
                    <div className="md:col-span-7 relative group">
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img loading="lazy" alt="Kalmar — Atención Gerontológica" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border-b md:border-b-0 md:border-r border-[#5b403e]/30" src={PROJECTS[0].img} />
                        <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 ghost-border">
                            <span className="font-label text-[10px] text-primary tracking-widest font-bold">LANDING PAGE</span>
                        </div>
                    </div>
                    <div className="md:col-span-5 p-8 flex flex-col justify-between">
                        <div>
                            <div className="font-label text-[10px] text-white/40 tracking-widest uppercase mb-6">PROJECT_ID: KW-24 // STATUS: <span className="text-primary">LIVE</span></div>
                            <h2 className="font-headline text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Kalmar — Atención Gerontológica</h2>
                            <p className="text-on-surface/70 text-sm leading-relaxed mb-8">Landing page profesional para clínica de atención gerontológica. Diseño moderno con blog integrado, completamente responsivo y alojada en GitHub Pages con URL personalizada sin costo de dominio.</p>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {PROJECTS[0].tags.map(tag => (
                                    <span key={tag} className="font-label text-[10px] px-2 py-1 bg-surface-container-high text-primary ghost-border font-bold rounded-lg">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://kalmar-atencion-gerontologica.github.io/Kalmar-Web/#blog" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-primary text-white font-label text-xs font-black py-4 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg">VER SITIO</a>
                            <button onClick={() => navigate('/proyectos/KW-24')} className="flex-1 bg-transparent border border-primary text-primary font-label text-xs font-black py-4 uppercase tracking-widest hover:bg-primary/10 active:scale-95 transition-all rounded-lg">DETALLES</button>
                        </div>
                    </div>
                </article>

                {/* Project 2 — Boda */}
                <article className="bg-surface-container-low ghost-border flex flex-col md:grid md:grid-cols-12 overflow-hidden rounded-lg">
                    <div className="md:col-span-7 md:order-2 relative group">
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img loading="lazy" alt="Boda Karla & José" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border-b md:border-b-0 md:border-l border-[#5b403e]/30" src={PROJECTS[1].img} />
                        <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 ghost-border">
                            <span className="font-label text-[10px] text-primary tracking-widest font-bold">INVITACIÓN DIGITAL</span>
                        </div>
                    </div>
                    <div className="md:col-span-5 md:order-1 p-8 flex flex-col justify-between">
                        <div>
                            <div className="font-label text-[10px] text-white/40 tracking-widest uppercase mb-6">PROJECT_ID: BK-23 // STATUS: <span className="text-primary">LIVE</span></div>
                            <h2 className="font-headline text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Boda Karla & José</h2>
                            <p className="text-on-surface/70 text-sm leading-relaxed mb-8">Invitación de boda digital con animación de sobre interactiva, RSVP conectado a Google Sheets, galería de fotos, mapa de ubicaciones y música ambiental. Alojada con URL personalizada sin costo.</p>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {PROJECTS[1].tags.map(tag => (
                                    <span key={tag} className="font-label text-[10px] px-2 py-1 bg-surface-container-high text-primary ghost-border font-bold rounded-lg">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://karla-y-jose.github.io/Web-Boda/" target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-primary text-white font-label text-xs font-black py-4 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg">VER INVITACIÓN</a>
                            <button onClick={() => navigate('/proyectos/BK-23')} className="flex-1 bg-transparent border border-primary text-primary font-label text-xs font-black py-4 uppercase tracking-widest hover:bg-primary/10 active:scale-95 transition-all rounded-lg">DETALLES</button>
                        </div>
                    </div>
                </article>
            </div>

            {/* Highlight section */}
            <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: 'celebration', title: 'Eventos Digitales', desc: 'Invitaciones personalizadas para bodas, XV años, bautizos y más — elegantes y fáciles de compartir por WhatsApp.' },
                    { icon: 'smartphone', title: 'Mobile First', desc: 'Todos nuestros proyectos están diseñados pensando primero en celular. Se ven perfectos en cualquier dispositivo.' },
                    { icon: 'savings', title: 'Sin Costo de Hosting', desc: 'Publicamos con GitHub Pages y URL personalizada — tu proyecto al aire sin costo de dominio ni hosting.' }
                ].map((spec, i) => (
                    <div key={i} className="bg-surface-container-lowest p-6 ghost-border rounded-lg">
                        <div className="flex items-center gap-3 mb-4 text-primary">
                            <span className="material-symbols-outlined text-sm">{spec.icon}</span>
                            <span className="font-label text-xs font-bold tracking-widest uppercase">{spec.title}</span>
                        </div>
                        <p className="text-xs text-on-surface/50 font-label leading-relaxed">{spec.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ProjectsPage;
