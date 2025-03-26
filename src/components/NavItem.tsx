import { Link } from "react-router-dom"

type Props = {
    address: string,
    title: string
}
export const NavItem = ({ address, title }: Props) => {
    return (
        <Link to={address} className="ms-10 text-[17px]">{title}</Link>
    );
}