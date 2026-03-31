import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(15);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className="pt-24 pb-20 px-6 min-h-screen flex items-center justify-center radial-grid-bg">
            <div className="max-w-2xl text-center">
                {/* Glitch-style 404 */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-primary/30 bg-primary/5 rounded-lg">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary">SYSTEM_ERROR // ROUTE_NOT_FOUND</span>
                    </div>
                    <h1 className="font-headline text-8xl md:text-[12rem] font-black text-white/5 leading-none tracking-tighter select-none">
                        404
                    </h1>
                    <h2 className="font-headline text-3xl md:text-5xl font-black text-white uppercase tracking-tighter -mt-8 md:-mt-16 relative">
                        Módulo no <span className="text-primary">encontrado</span>
                    </h2>
                </div>

                <p className="text-on-surface-variant text-sm leading-relaxed mb-8 max-w-md mx-auto">
                    La ruta solicitada no existe en el sistema. El módulo puede haber sido desactivado,
                    movido o eliminado del directorio principal.
                </p>

                {/* Terminal-style box */}
                <div className="bg-surface-container-lowest ghost-border p-6 rounded-lg mb-8 text-left max-w-sm mx-auto">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="font-label text-[11px] text-white/50 space-y-1">
                        <p><span className="text-primary">$</span> route --resolve <span className="text-white/30">"{window.location.hash}"</span></p>
                        <p className="text-primary">ERROR: PATH_UNDEFINED</p>
                        <p><span className="text-primary">$</span> redirect --home --in <span className="text-white">{countdown}s</span></p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-4 bg-primary text-white font-label text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg"
                    >
                        Volver al Inicio
                    </button>
                    <button
                        onClick={() => navigate('/proyectos')}
                        className="px-8 py-4 border border-white/20 text-white font-label text-xs font-bold uppercase tracking-widest hover:bg-white/5 active:scale-95 transition-all rounded-lg"
                    >
                        Ver Proyectos
                    </button>
                </div>

                {/* Auto redirect notice */}
                <p className="mt-8 font-label text-[9px] tracking-[0.2em] text-white/20 uppercase">
                    REDIRECCIONAMIENTO_AUTOMÁTICO EN {countdown} SEGUNDOS
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;
