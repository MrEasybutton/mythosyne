import Link from "next/link";

export const Navigation = () => {
    return (
        <div className="border-2 m-2 rounded-lg border-amber-950 border-opacity-30 drop-shadow-md">
            <nav className="rounded-lg bg-amber-50 border-2 justify-between items-center flex w-auto border-transparent p-2">
                <div>
                    <h1 className="text-2xl text-yellow-950">
                        <Link href="/">
                            Mythosyne
                        </Link>
                    </h1>
                </div>
                <div>
                    <Link href="/">
                        <button className="px-3 text-xl">
                            About
                        </button>
                    </Link>
                    <Link href="/">
                        <button className="px-3 text-xl">
                            Login
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
