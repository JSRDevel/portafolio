import { useParams, useNavigate, Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects.js'

const ProjectDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = PROJECTS.find(p => p.id === id);

    if (!project) {
        return (
            <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-center">
                <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">ERROR 404 // PROJECT_NOT_FOUND</span>
                <h1 className="font-headline text-5xl font-black text-white uppercase tracking-tighter mb-6">Módulo no encontrado</h1>
                <p className="text-on-surface-variant text-sm mb-8 max-w-md">El proyecto solicitado no existe en el directorio del sistema.</p>
                <button onClick={() => navigate('/proyectos')} className="px-8 py-4 bg-primary text-white font-label text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg">
                    Volver al Directorio
                </button>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 min-h-screen">
            {/* Breadcrumb */}
            <div className="px-6 max-w-7xl mx-auto mb-8">
                <div className="flex items-center gap-2 font-label text-[10px] tracking-widest uppercase text-white/40">
                    <Link to="/proyectos" className="hover:text-primary transition-colors">Proyectos</Link>
                    <span className="text-primary">//</span>
                    <span className="text-white/70">{project.id}</span>
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full max-w-7xl mx-auto px-6 mb-12">
                <div className="relative overflow-hidden rounded-lg ghost-border aspect-video">
                    <img
                        loading="lazy"
                        alt={project.title}
                        className="w-full h-full object-cover"
                        src={project.img}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                        <span className="font-label text-[10px] px-3 py-1 bg-primary/90 text-white tracking-widest uppercase rounded-lg">{project.status}</span>
                        <span className="font-label text-[10px] px-3 py-1 bg-background/80 text-white/70 ghost-border tracking-widest uppercase rounded-lg">ID: {project.id}</span>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <div className="mb-8">
                        <span className="font-label text-primary text-xs tracking-[0.3em] uppercase font-bold">TYPE: {project.type}</span>
                        <h1 className="font-headline text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mt-2 leading-none">
                            {project.title}
                        </h1>
                    </div>

                    <p className="text-on-surface-variant text-base leading-relaxed mb-12 max-w-2xl">
                        {project.fullDesc}
                    </p>

                    {/* Features */}
                    <div className="mb-12">
                        <h2 className="font-label text-[11px] tracking-widest uppercase text-primary font-bold mb-6">Módulos_Implementados</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {project.features.map((feat, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 bg-surface-container-low ghost-border rounded-lg group hover:bg-surface-container-high transition-colors">
                                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">{feat.icon}</span>
                                    <span className="text-white/80 text-sm leading-relaxed">{feat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-12">
                        <h2 className="font-label text-[11px] tracking-widest uppercase text-primary font-bold mb-6">Stack_Tecnológico</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.tags.map(tag => (
                                <span key={tag} className="font-label text-xs px-4 py-2 bg-surface-container-high text-primary ghost-border font-bold tracking-widest uppercase rounded-lg">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-primary text-white font-label text-xs font-black py-5 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg">
                            Ejecutar Módulo
                        </a>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-transparent border border-primary text-primary font-label text-xs font-black py-5 uppercase tracking-widest hover:bg-primary/10 active:scale-95 transition-all rounded-lg">
                            Ver Código Fuente
                        </a>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4">
                    {/* Performance Metrics */}
                    <div className="bg-surface-container-low ghost-border p-6 rounded-lg mb-6">
                        <h3 className="font-label text-[11px] tracking-widest uppercase text-primary font-bold mb-6">Métricas_Sistema</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {project.metrics.map((m, i) => (
                                <div key={i} className="text-center p-4 bg-surface-container-lowest rounded-lg ghost-border">
                                    <span className="block font-headline text-2xl font-black text-white">{m.value}</span>
                                    <span className="font-label text-[9px] tracking-widest uppercase text-white/40">{m.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Info */}
                    <div className="bg-surface-container-low ghost-border p-6 rounded-lg mb-6">
                        <h3 className="font-label text-[11px] tracking-widest uppercase text-primary font-bold mb-4">Información</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-[#5b403e]/10">
                                <span className="font-label text-[10px] text-white/40 uppercase tracking-widest">Estado</span>
                                <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">{project.status}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-[#5b403e]/10">
                                <span className="font-label text-[10px] text-white/40 uppercase tracking-widest">Tipo</span>
                                <span className="font-label text-[10px] text-white/70 uppercase tracking-widest">{project.type}</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="font-label text-[10px] text-white/40 uppercase tracking-widest">ID</span>
                                <span className="font-label text-[10px] text-white/70 uppercase tracking-widest">{project.id}</span>
                            </div>
                        </div>
                    </div>

                    {/* Back Link */}
                    <Link to="/proyectos" className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-white/50 hover:text-primary transition-colors group">
                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Volver al Directorio
                    </Link>
                </aside>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
