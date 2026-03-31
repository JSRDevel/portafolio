import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ title, desc, img, type, id, status }) => {
    const navigate = useNavigate();
    return (
        <div className="group bg-surface-container-low border border-outline-variant/10 overflow-hidden rounded-lg">
            <div className="aspect-video overflow-hidden cursor-pointer" onClick={() => navigate('/proyectos/' + id)}>
                <img alt={title} loading="lazy" width="640" height="360" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={img}/>
            </div>
            <div className="p-8">
                <div className="flex flex-wrap gap-4 mb-6">
                    <span className="bg-secondary-container text-on-secondary-container font-label text-[9px] px-3 py-1 uppercase tracking-widest rounded-lg">TYPE: {type}</span>
                    <span className="bg-surface-container-highest text-white font-label text-[9px] px-3 py-1 uppercase tracking-widest rounded-lg">STATUS: {status}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-4">{title}</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed opacity-70">{desc}</p>
                <button onClick={() => navigate('/proyectos/' + id)} className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    Análisis de Caso
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;

