import Link from "next/link"

interface NavElementProps {
    label: string,
    href: string
}

const NavElement = ({label, href} : NavElementProps) => {
    return (
        <Link href={href} className="text-gray-500">
            {label}
        </Link>
    )
}

export default NavElement