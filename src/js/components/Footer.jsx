const Footer = () => (
    <footer className="w-full border-t border-[#5b403e]/15 bg-[#131313] dark:bg-[#131313]">
        <div className="flex flex-col md:flex-row justify-between items-center p-8 gap-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-6">
                <span className="text-white font-bold font-headline uppercase tracking-tighter text-lg">JSRDev</span>
                <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-white/40">© {new Date().getFullYear()} JSRDev. Desarrollo Web</span>
            </div>
            <div className="flex gap-8">
                <a className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-white/40 hover:text-primary transition-colors opacity-80 hover:opacity-100" href="https://www.instagram.com/jsr.devel/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a className="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-white/40 hover:text-primary transition-colors opacity-80 hover:opacity-100" href="https://www.facebook.com/profile.php?id=61574386194827" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
        </div>
    </footer>
);

export default Footer;

