import Internal from "../../Layouts/Internal";
import { Link } from "@inertiajs/react";

function Tool({ tools }) {
    console.log(tools);
    return (
        <>
            <h1 className="text-8xl">Página das ferramentas</h1>
            <Link
                href="/ferramentas/create"
                className="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
            >
                CRIAR
            </Link>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-600 bg-gray-100 border-b">Nome</th>
                            <th className="px-6 py-3 text-left text-gray-600 bg-gray-100 border-b">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tools && tools.data.map(tool => (
                            <tr key={tool.id}>
                                <td className="px-6 py-4 border-b">{tool.name}</td>
                                <td className="px-6 py-4 border-b"><button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Editar</button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Excluir</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                {tools.links && tools.links.map((link, index) => (
                    link.url ? (
                        <Link
                            key={index}
                            href={link.url}
                            className={`px-10 py-5 ${link.active ? "text-bold text-indigo-600" : ""}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            key={index}
                            className="text-slate-700 px-10 py-5"
                            dangerouslySetInnerHTML={{ __html: link.label }}>
                        </span>
                    )
                ))}
            </div>

        </>
    );
}

Tool.layout = page => <Internal children={page} title="Ferramentas" />

export default Tool