import { useState, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const isActive = (path) => location.pathname === path;

    // Track viewport size
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/proyectos', label: 'Proyectos' },
        { path: '/contacto', label: 'Contacto' }
    ];

    // Inline styles for reliable transform (avoids Tailwind CSS caching/specificity issues)
    const panelStyle = {
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: '18rem',
        backgroundColor: '#131313',
        borderLeft: '1px solid rgba(91, 64, 62, 0.2)',
        zIndex: 50,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 300ms ease-in-out'
    };

    const overlayStyle = {
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        zIndex: 40,
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? 'auto' : 'none',
        transition: 'opacity 300ms'
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-[#131313]/80 backdrop-blur-xl border-b border-[#5b403e]/15">
            <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
                {/* Logo */}
                <Link to="/" className="text-xl font-black tracking-tighter text-white font-['Space_Grotesk'] uppercase z-[60] relative">
                    JSRDev
                </Link>

                {/* Desktop Nav Links */}
                {!isMobile && (
                    <div className="flex items-center space-x-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={"font-['Space_Grotesk'] uppercase tracking-tighter text-sm font-bold transition-colors " + (isActive(link.path) ? 'text-primary border-b-2 border-primary pb-1' : 'text-white/70 hover:text-white')}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Right side */}
                <div className="flex items-center gap-3">
                    {!isMobile && (
                        <button
                            onClick={() => navigate('/contacto')}
                            className="bg-primary text-on-primary-container px-6 py-2 font-label uppercase text-xs font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg"
                        >
                            Cotizar
                        </button>
                    )}

                    {isMobile && (
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'40px', height:'40px', position:'relative', zIndex:60, background:'none', border:'none', cursor:'pointer', padding:0}}
                            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                            type="button"
                        >
                            <span
                                style={{display:'block', width:'24px', height:'2px', backgroundColor:'#fff', transition:'all 300ms ease-in-out', transform: mobileOpen ? 'rotate(45deg) translateY(3px)' : 'none'}}
                            ></span>
                            <span
                                style={{display:'block', width:'24px', height:'2px', backgroundColor:'#fff', marginTop:'5px', transition:'all 300ms ease-in-out', transform: mobileOpen ? 'rotate(-45deg) translateY(-3px)' : 'none'}}
                            ></span>
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile overlay + panel */}
            {isMobile && (
                <div>
                    <div style={overlayStyle} onClick={() => setMobileOpen(false)}></div>
                    <div style={panelStyle}>
                        <div className="flex flex-col pt-20 px-6 h-full">
                            <div className="flex items-center gap-2 mb-8 px-2">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                <span className="font-label text-[10px] tracking-[0.2em] text-primary uppercase">Nav_Module: Active</span>
                            </div>

                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={"group flex items-center gap-4 py-4 px-2 border-b border-[#5b403e]/10 transition-colors " + (isActive(link.path) ? 'text-primary' : 'text-white/70 hover:text-white')}
                                >
                                    <span className="font-label text-[10px] tracking-widest text-white/30 font-bold">{'0' + (idx + 1)}</span>
                                    <span className="font-['Space_Grotesk'] uppercase tracking-tighter text-lg font-bold">{link.label}</span>
                                    {isActive(link.path) && (
                                        <span className="ml-auto w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    )}
                                </Link>
                            ))}

                            <button
                                onClick={() => navigate('/contacto')}
                                className="mt-8 w-full bg-primary text-white py-4 font-label uppercase text-xs font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg"
                                type="button"
                            >
                                Cotizar
                            </button>

                            <div className="mt-auto pb-8">
                                <div className="flex flex-col gap-1 font-label text-[9px] tracking-[0.2em] text-white/20 uppercase">
                                    <span>JSRDev v2.4</span>
                                    <span>Desarrollo Web</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
