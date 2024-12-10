import { useForm } from "@inertiajs/react";
import Internal from "../../../Layouts/Internal";

function Tool() {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
    });
    console.log(useForm)

    function submit(e) {
        e.preventDefault();
        post('/ferramentas');
    }
    return (
        <>
            <form onSubmit={submit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">Criando ferramenta</h1>
                {data.name}
                {errors.name && <p className="text-red-600">{errors.name}</p>}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600 mb-2">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        placeholder="Digite o nome da ferramenta"
                        className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            ${errors.name && "border-red-500"}
                            `}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                    disabled={processing}>
                    {processing ? 'Criando' : 'Criar'}
                </button>
            </form>
        </>
    );
}

Tool.layout = page => <Internal children={page} title="Criar ferramenta" />

export default Tool