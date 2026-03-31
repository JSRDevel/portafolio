import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.error('ErrorBoundary caught:', error, info)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center px-6 text-center">
                    <div>
                        <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4 block">
                            SYSTEM_ERROR // MODULE_CRASH
                        </span>
                        <h1 className="font-headline text-4xl font-black text-white uppercase tracking-tighter mb-4">
                            Algo salió mal
                        </h1>
                        <p className="text-on-surface-variant text-sm mb-8 max-w-sm mx-auto">
                            Ocurrió un error inesperado. Por favor recarga la página.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-4 bg-primary text-white font-label text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all rounded-lg"
                        >
                            Recargar
                        </button>
                    </div>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
