import Link from "next/link";
import NavElement from "./navElement";
import { FaComputer } from "react-icons/fa6";

const NavBar = () => {
    return (
        <div className="fixed w-full flex flex-row justify-between px-10 py-5 bg-slate-50">
            <Link className="flex flex-row items-center gap-2 text-sky-500" href={"/"}>
                <FaComputer />
                <div className=" font-mono font-semibold">
                    TechProducts
                </div>
            </Link>
            <div className="flex flex-row gap-10">
                <NavElement label="Home" href={"/"} />
                <NavElement label="Page 1" href={"page1"} />
                <NavElement label="Page 2" href={"page2"} />
            </div>
        </div>
    )
}

export default NavBar;