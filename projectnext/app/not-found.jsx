import Link from 'next/link'

export default function Notfound(){

    return <section>
        <h1>404</h1>
        <p>Pagina no encontrada</p>
        <Link href="/">
            volver
        </Link>
    </section>
}