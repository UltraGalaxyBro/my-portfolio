import Internal from "../../Layouts/Internal";

function Project() {
    return (
        <>
            <h1 className="text-red-700 text-6xl">Página dos projetos dentro de Admin</h1>
        </>
    );
}

Project.layout = page => <Internal children={page} title="Projetos" />

export default Project