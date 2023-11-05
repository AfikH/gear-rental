"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const isActive = (currentPath, linkPath, exact) => {
	if(exact && currentPath === linkPath || !exact && currentPath.startsWith(linkPath)){
		return ' active';
	}
	return '';
}

const NavLink = ({to, children, exact = false}) => {
	const path = usePathname();

	return (
		<Link href={to} className={`nav-link${isActive(path, to, exact)}`}>{children}</Link>
	)
};

export default NavLink;