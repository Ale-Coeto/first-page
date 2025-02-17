interface NavElementProps {
    label: string,
    href: string
}

const NavElement = ({label, href} : NavElementProps) => {
    return (
        <div className="text-gray-500">
            {label}
        </div>
    )
}

export default NavElement