import { Link } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <h1 className="text-indigo-600 text-6xl font-bold">
                Página inicial
            </h1>
            <Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link>
        </>
    );
}