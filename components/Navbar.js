import Link from "next/link";
import Image from "next/image";

const Navbar  = () => {
    return (
        <nav>
            <div className="logo">
                <Image src='/logo.png' width={75} height={75}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/users"><a>Users</a></Link>
        </nav>
     );
}

export default Navbar