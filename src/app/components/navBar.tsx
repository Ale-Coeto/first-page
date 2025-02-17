import NavElement from "./navElement";

const NavBar = () => {
    return (
        <div className="fixed w-full flex flex-row justify-between px-10 py-5 bg-slate-50">
            <div className="text-gray-500">
                Logo
            </div>
            <div className="flex flex-row gap-10">
                <NavElement label="Home" href={"/"} />
                <NavElement label="Page 1" href={"page1"} />
                <NavElement label="Page 2" href={"page2"} />
            </div>
        </div>
    )
}

export default NavBar;