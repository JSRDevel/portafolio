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
        { path: '/proyectos', label: 'Proyectos' }
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
        <nav className="fixed top-0 w-full z-50 bg-[#131313]/90 backdrop-blur-xl border-b border-[#5b403e]/20">
            {/* 3-column grid: logo | links (centered) | button */}
            <div className="grid grid-cols-3 items-center px-6 py-3 max-w-7xl mx-auto">

                {/* Left — Logo */}
                <Link to="/" className="text-xl font-black tracking-tighter text-white font-['Space_Grotesk'] uppercase z-[60] relative justify-self-start">
                    JSRDev
                </Link>

                {/* Center — Desktop Nav Links */}
                <div className="justify-self-center">
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
                </div>

                {/* Right — Cotizar button / Hamburger */}
                <div className="justify-self-end flex items-center">
                    {!isMobile && (
                        <button
                            onClick={() => navigate('/contacto')}
                            className="bg-primary text-white px-6 py-2 font-label uppercase text-xs font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg"
                        >
                            Cotizar
                        </button>
                    )}

                    {isMobile && (
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'44px', height:'44px', position:'relative', zIndex:60, background:'none', border:'none', cursor:'pointer', padding:0}}
                            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                            type="button"
                        >
                            <span style={{display:'block', width:'24px', height:'2px', backgroundColor:'#fff', transition:'all 300ms ease-in-out', transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none'}}></span>
                            <span style={{display:'block', width:'24px', height:'2px', backgroundColor:'#fff', marginTop:'6px', transition:'all 300ms ease-in-out', transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none'}}></span>
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile overlay + slide-in panel */}
            {isMobile && (
                <>
                    {/* Backdrop */}
                    <div style={overlayStyle} onClick={() => setMobileOpen(false)} />

                    {/* Panel */}
                    <div style={panelStyle}>
                        {/* Panel header */}
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'1.25rem 1.5rem', borderBottom:'1px solid rgba(91,64,62,0.15)'}}>
                            <span style={{fontFamily:"'Space Grotesk',sans-serif", fontWeight:900, fontSize:'1.125rem', color:'#fff', textTransform:'uppercase', letterSpacing:'-0.05em'}}>JSRDev</span>
                            <button
                                onClick={() => setMobileOpen(false)}
                                style={{background:'none', border:'none', cursor:'pointer', color:'rgba(255,255,255,0.5)', display:'flex', alignItems:'center', justifyContent:'center', width:'36px', height:'36px'}}
                                aria-label="Cerrar menú"
                                type="button"
                            >
                                <span className="material-symbols-outlined" style={{fontSize:'20px'}}>close</span>
                            </button>
                        </div>

                        {/* Nav links */}
                        <div style={{padding:'0.5rem 0'}}>
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    style={{
                                        display:'flex', alignItems:'center', gap:'1rem',
                                        padding:'1rem 1.5rem',
                                        borderBottom:'1px solid rgba(91,64,62,0.1)',
                                        textDecoration:'none',
                                        color: isActive(link.path) ? '#ef4444' : 'rgba(255,255,255,0.7)',
                                        transition:'color 200ms'
                                    }}
                                >
                                    <span style={{fontFamily:"'Space Grotesk',sans-serif", fontSize:'10px', letterSpacing:'0.2em', color:'rgba(255,255,255,0.2)', fontWeight:700}}>{'0' + (idx + 1)}</span>
                                    <span style={{fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'1.125rem', textTransform:'uppercase', letterSpacing:'-0.03em'}}>{link.label}</span>
                                    {isActive(link.path) && (
                                        <span style={{marginLeft:'auto', width:'6px', height:'6px', borderRadius:'50%', backgroundColor:'#ef4444'}} />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div style={{padding:'1.5rem'}}>
                            <button
                                onClick={() => { navigate('/contacto'); setMobileOpen(false); }}
                                style={{
                                    width:'100%', backgroundColor:'#ef4444', color:'#fff',
                                    padding:'1rem', border:'none', borderRadius:'8px',
                                    fontFamily:"'Space Grotesk',sans-serif", fontWeight:700,
                                    fontSize:'11px', letterSpacing:'0.2em', textTransform:'uppercase',
                                    cursor:'pointer'
                                }}
                                type="button"
                            >
                                Cotizar Proyecto
                            </button>
                        </div>

                        {/* Footer */}
                        <div style={{position:'absolute', bottom:'2rem', left:'1.5rem'}}>
                            <span style={{fontFamily:"'Space Grotesk',sans-serif", fontSize:'9px', letterSpacing:'0.2em', color:'rgba(255,255,255,0.15)', textTransform:'uppercase'}}>JSRDev — Desarrollo Web</span>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navigation;
