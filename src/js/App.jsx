import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import ParticleBackground from './components/ParticleBackground.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

// ── Page Transition Wrapper ──
const PageTransition = ({ children }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in on mount
        const raf = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 400ms ease-out, transform 400ms ease-out'
            }}
        >
            {children}
        </div>
    );
};

// ── Animated Route Helper ──
const AnimatedPage = ({ component: Component }) => (
    <PageTransition>
        <Component />
    </PageTransition>
);

// ── Main App ──
const App = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col bg-background selection:bg-primary-container selection:text-white">
            <ParticleBackground />
            <Navigation />
            <main className="flex-grow relative z-10">
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<AnimatedPage component={HomePage} />} />
                        <Route path="/proyectos" element={<AnimatedPage component={ProjectsPage} />} />
                        <Route path="/proyectos/:id" element={<AnimatedPage component={ProjectDetailPage} />} />
                        <Route path="/contacto" element={<AnimatedPage component={ContactPage} />} />
                        <Route path="*" element={<AnimatedPage component={NotFoundPage} />} />
                    </Routes>
                </ErrorBoundary>
            </main>
            <Footer />
        </div>
    );
};

const Root = () => (
    <HashRouter>
        <App />
    </HashRouter>
);

export default Root;
