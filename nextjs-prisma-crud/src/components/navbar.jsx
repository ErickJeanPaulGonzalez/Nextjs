import Link from "next/link";
function NavBar() {
    return (
        <nav className="bg-slate-900 ">
            <div className="container mx-auto flex justify-between items-center py-3">
                <h3 className="font-bold text-3xl">
                    <Link href="/">nextCRUD</Link>

                </h3>
                <ul className="flex gap-x-2 text-lg font-bold" >
                    <li>
                        <Link href="/" className="text-slate-300 hove:text-slate-200">Tasks</Link>
                    </li>
                    <li>
                        <Link href="/new">new task</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-slate-300 hove:text-slate-200 ">about</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar;