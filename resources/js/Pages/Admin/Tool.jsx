import Internal from "../../Layouts/Internal";

function Tool() {
    return (
        <>
            <h1 className="text-8xl">Página das ferramentas</h1>
        </>
    );
}

Tool.layout = page => <Internal children={page} title="Ferramentas" />

export default Tool