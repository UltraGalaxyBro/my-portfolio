import { Link } from "@inertiajs/react";

export default function External({ children }) {
    return (
        <>
            <header className="bg-indigo-700 text-white shadow-md">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-2xl font-bold hover:text-indigo-300 transition-colors"
                    >
                        Início
                    </Link>
                    <Link
                        href="/contato"
                        className="text-lg font-medium hover:text-indigo-300 transition-colors"
                    >
                        Contato
                    </Link>
                    <Link
                        href="/projetos"
                        className="text-lg font-medium hover:text-indigo-300 transition-colors"
                    >
                        Projetos
                    </Link>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}