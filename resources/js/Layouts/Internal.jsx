import { Link } from "@inertiajs/react";



export default function Internal({ children }) {

    const currentUser = 'Pablo';
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <aside className="w-64 bg-blue-800 text-white flex flex-col">
                    <div className="p-6">
                        <h1 className="text-2xl font-bold">Seus Projetos</h1>
                    </div>
                    <nav className="flex-1 space-y-2 px-4">
                        <Link
                            href="/"
                            className="block py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Portfólio
                        </Link>
                        <Link
                            href="/projetos"
                            className="block py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Projetos
                        </Link>
                        <Link
                            href="/ferramentas"
                            className="block py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Ferramentas
                        </Link>
                        <Link
                            href="#"
                            className="block py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Configurações
                        </Link>
                    </nav>
                    <div className="p-4">
                        <button className="w-full py-2 px-4 bg-red-600 rounded hover:bg-red-700">
                            Sair
                        </button>
                    </div>
                </aside>

                <div className="flex-1 flex flex-col">
                    <header className="bg-white shadow p-4 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-700">Olá, {currentUser}</h2>
                        <div>
                            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                Perfil
                            </button>
                        </div>
                    </header>
                    <main className="flex-1 p-6 overflow-y-auto">{children}</main>
                </div>
            </div>
        </>
    );
}