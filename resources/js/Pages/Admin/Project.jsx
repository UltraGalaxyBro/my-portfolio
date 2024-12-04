import { Link } from "@inertiajs/react";
import Internal from "../../Layouts/Internal";

function Project({ projects }) {
    console.log(projects);
    return (
        <>
            <h1 className="text-red-700 text-6xl">Página dos projetos dentro de Admin</h1>
            <div className="container mx-auto mt-8">
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Título</th>
                                <th className="px-6 py-3 text-left font-medium text-gray-600 uppercase">Link</th>
                                <th className="px-6 py-3 text-center font-medium text-gray-600 uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {projects && projects.data.map(project => (
                                <tr key={project.id}>
                                    <td className="px-6 py-4">{project.title} - Criado em {new Date(project.created_at).toDateString()}</td>
                                    <td className="px-6 py-4">{project.link}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Editar</button>
                                        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Excluir</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                {projects.links && projects.links.map((link, index) => (
                    link.url ? (
                        <Link
                            key={index}
                            href={link.url}
                            className={`px-5 py-10 ${link.active ? "text-blue-700 font-bold" : ""}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            key={index}
                            className="px-5 py-10 text-slate-500"
                            dangerouslySetInnerHTML={{ __html: link.label }}>
                        </span>)
                ))}
            </div>
        </>
    );
}

Project.layout = page => <Internal children={page} title="Projetos" />

export default Project