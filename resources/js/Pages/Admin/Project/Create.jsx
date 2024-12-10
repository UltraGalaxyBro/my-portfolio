import Internal from "../../../Layouts/Internal";

function Create() {
    return (
        <>
            <h1>
                Criando um projeto
            </h1>
        </>
    );
}

Create.layout = page => <Internal children={page} title="Criar projeto" />

export default Create