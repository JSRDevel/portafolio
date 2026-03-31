import { useState, useEffect, lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import ParticleBackground from './components/ParticleBackground.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

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

// ── Route Loading Fallback ──
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
    </div>
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
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<AnimatedPage component={HomePage} />} />
                            <Route path="/proyectos" element={<AnimatedPage component={ProjectsPage} />} />
                            <Route path="/proyectos/:id" element={<AnimatedPage component={ProjectDetailPage} />} />
                            <Route path="/contacto" element={<AnimatedPage component={ContactPage} />} />
                            <Route path="*" element={<AnimatedPage component={NotFoundPage} />} />
                        </Routes>
                    </Suspense>
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
