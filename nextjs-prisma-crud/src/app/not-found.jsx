import Link from "next/link";
function NotFound() {
    return (
        <section className="flex h-screen justify-center items-center ">
            <div className="text-center">
                <h1 className="text-4xl font-bold">
                    im so sorry Not Found
                </h1>
                <Link href="/" className="text-center text-slate-400 text-2xl mt-5">
                volver al inicio
                </Link>
            </div>
        </section>
    )
}

export default NotFound;