import NavElement from "./navElement";

const NavBar = () => {
    return (
        <div className="fixed w-full flex flex-row justify-between px-10 py-5">
            <div className="text-gray-500">
                Logo
            </div>
            <div className="flex flex-row gap-10">
                <NavElement label="Home" href={""} />
                <NavElement label="Page 1" href={""} />
                <NavElement label="Page 2" href={""} />
            </div>
        </div>
    )
}

export default NavBar;