import { useState } from 'react'

const WHATSAPP_NUMBER = '523313331634'

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const nombre = form.nombre.value;
        const contacto = form.contacto.value;
        const tipo = form.tipo.value;
        const detalles = form.detalles.value;

        const message =
            `Hola JSRDev! 👋\n\n*Nombre:* ${nombre}\n*Contacto:* ${contacto}\n*Tipo de proyecto:* ${tipo}\n\n*Detalles:*\n${detalles}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto small-grid-bg min-h-screen">
            <header className="mb-12 border-l-4 border-primary pl-6">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 bg-primary animate-pulse"></span>
                    <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase">Módulo de Contacto</span>
                </div>
                <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                    Cotiza tu Proyecto
                </h1>
                <p className="font-label text-sm text-outline mt-4 max-w-xl">
                    ENVÍANOS UN MENSAJE CON LOS DETALLES DE TU PROYECTO Y TE RESPONDEREMOS CON UNA COTIZACIÓN.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-outline-variant/20 bg-surface-container-low shadow-2xl rounded-lg overflow-hidden">
                <section className="lg:col-span-7 p-8 md:p-12 border-r border-outline-variant/20 relative">
                    <div className="absolute top-4 right-4 flex gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500/50"></span>
                        <span className="w-1.5 h-1.5 bg-yellow-500/50"></span>
                        <span className="w-1.5 h-1.5 bg-primary/80"></span>
                    </div>
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-4 py-20 text-center">
                            <span className="material-symbols-outlined text-6xl text-green-500">check_circle</span>
                            <h2 className="font-headline text-2xl font-bold text-white uppercase">¡Mensaje en Camino!</h2>
                            <p className="text-on-surface/60 font-label">Se abrió WhatsApp con tu mensaje. ¡Gracias por contactarnos!</p>
                        </div>
                    ) : (
                        <form className="space-y-10" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label htmlFor="nombre" className="block font-label text-[11px] font-bold tracking-widest text-primary uppercase">01_Nombre_Completo</label>
                                <input id="nombre" name="nombre" required className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-white font-body py-4 transition-all placeholder:text-outline/30" placeholder="Tu nombre..." type="text"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contacto" className="block font-label text-[11px] font-bold tracking-widest text-primary uppercase">02_Correo_o_Teléfono</label>
                                <input id="contacto" name="contacto" required className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-white font-body py-4 transition-all placeholder:text-outline/30" placeholder="correo@ejemplo.com o WhatsApp..." type="text"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="tipo" className="block font-label text-[11px] font-bold tracking-widest text-primary uppercase">03_Tipo_de_Proyecto</label>
                                <select id="tipo" name="tipo" aria-label="Tipo de proyecto" className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-white font-body py-4 transition-all appearance-none">
                                    <option value="Invitación Digital — Boda">Invitación Digital — Boda</option>
                                    <option value="Invitación Digital — XV Años">Invitación Digital — XV Años</option>
                                    <option value="Invitación Digital — Bautizo / Otro Evento">Invitación Digital — Bautizo / Otro Evento</option>
                                    <option value="Landing Page — Negocio">Landing Page — Negocio</option>
                                    <option value="Landing Page — Marca Personal">Landing Page — Marca Personal</option>
                                    <option value="Otro Proyecto">Otro Proyecto</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="detalles" className="block font-label text-[11px] font-bold tracking-widest text-primary uppercase">04_Detalles</label>
                                <textarea id="detalles" name="detalles" required className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-white font-body py-4 transition-all placeholder:text-outline/30 resize-none" placeholder="Cuéntanos sobre tu evento o negocio, fecha, y cualquier detalle importante..." rows="4"></textarea>
                            </div>
                            <div className="pt-6">
                                <button className="w-full md:w-auto bg-primary text-white px-12 py-5 font-headline font-black uppercase tracking-tighter text-lg hover:brightness-110 transition-all active:scale-[0.98] flex items-center justify-center gap-4 rounded-lg" type="submit">
                                    Enviar por WhatsApp
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>
                        </form>
                    )}
                    <div className="mt-12 pt-6 border-t border-outline-variant/10 flex justify-between items-center text-[10px] font-label text-outline/40 uppercase tracking-[0.2em]">
                        <span>Respuesta: 24hrs</span>
                        <span>Cotización: Gratis</span>
                        <span>Sin Compromiso</span>
                    </div>
                </section>

                <aside className="lg:col-span-5 bg-surface-container-high/40 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-primary/20 group-hover:bg-primary/40 transition-all blur-sm rounded-lg"></div>
                                {/* TODO: Replace with a self-hosted profile/logo image in /assets/img/ */}
                                <img alt="JSRDev — Desarrollo Web" loading="lazy" width="96" height="96" className="relative w-24 h-24 grayscale brightness-75 border-2 border-primary/30 object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4UTyB2Z-vEqPUuK6fObz8IkJL2CaKVSQF4TFffodW02ih6mHRJgwfQrO0ilUBrce6T42vIRnWxfkOPxE6wjC1clNpynzqbXfc-GazzqIagKbbO0osWXDgBXkPPSQXIzVLB1Cc2fDvg2GE5nirmB3Olex2wkKsnroMEIoTl6M0QrIMOqWr7CspYDxva-WPrpnktwW0-o0PQuno3CR77lhaM0y9Kvx4g27qvBnLsg-kEHW0Z1P2JccA_yLxz-peRe53ru1VBYtEuRw" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-surface-container-high animate-pulse rounded-full"></div>
                            </div>
                            <div>
                                <h3 className="font-headline text-2xl font-black text-white leading-tight uppercase tracking-tight">JSRDev</h3>
                                <div className="font-label text-[10px] text-primary font-bold tracking-widest mt-1">Desarrollo Web</div>
                            </div>
                        </div>
                        <div className="space-y-6 text-sm leading-relaxed text-on-surface/80">
                            <p className="font-body">Creamos landing pages modernas e invitaciones digitales para eventos. Diseño elegante, adaptable a celular y entrega rápida.</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-surface-container-lowest border border-outline-variant/20 rounded-lg">
                                    <span className="block font-label text-[9px] text-outline uppercase mb-1">Especialidad</span>
                                    <span className="font-headline text-xs font-bold text-white uppercase tracking-wider">Web / Invitaciones</span>
                                </div>
                                <div className="p-4 bg-surface-container-lowest border border-outline-variant/20 rounded-lg">
                                    <span className="block font-label text-[9px] text-outline uppercase mb-1">Hosting</span>
                                    <span className="font-headline text-xs font-bold text-primary uppercase tracking-wider">GitHub Pages ($0)</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 space-y-4">
                            <h4 className="font-label text-[11px] font-bold tracking-widest text-primary uppercase">Encuéntranos_en</h4>
                            <div className="flex flex-col gap-2">
                                <a className="flex items-center justify-between p-3 bg-surface-container-low hover:bg-surface-container-highest transition-colors group rounded-lg" href="https://www.instagram.com/jsr.devel/" target="_blank" rel="noopener noreferrer">
                                    <span className="font-label text-xs text-white/70 group-hover:text-primary">INSTAGRAM</span>
                                    <span className="material-symbols-outlined text-sm text-outline group-hover:text-primary">photo_camera</span>
                                </a>
                                <a className="flex items-center justify-between p-3 bg-surface-container-low hover:bg-surface-container-highest transition-colors group rounded-lg" href="https://www.facebook.com/profile.php?id=61574386194827" target="_blank" rel="noopener noreferrer">
                                    <span className="font-label text-xs text-white/70 group-hover:text-primary">FACEBOOK</span>
                                    <span className="material-symbols-outlined text-sm text-outline group-hover:text-primary">group</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-col items-end opacity-20">
                        <span className="font-label text-[40px] font-black tracking-tighter text-white leading-none">JSRDev</span>
                        <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary">Desarrollo Web</span>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ContactPage;

