"use client";

import Image from 'next/image';

import MainNavLinks from "../nav/MainNavLinks";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MainHeader = () => {
	const path = usePathname();
	const [navActive, setNavActive] = useState(false);

	useEffect(() => {
		setNavActive(false);
	}, [path])

	useEffect(() => {
		window.addEventListener("scroll", () => {
			setNavActive(false);
		});

		window.addEventListener("resize", () => {
			setNavActive(false);
		});
	}, []);

	return(
		<div className={`main-header-container ${navActive && 'nav-active'}`}>
			<div className="main-header-top">
				<Link href="/contact">Contact Us</Link>
			</div>
			<header className="main-header">
				<div className="main-header-logo">
					<Image
						src='https://placehold.co/800x400'
						alt='todo'
						height={400}
						width={800}
						priority
					/>
				</div>
				<button className='main-header-nav-toggle' onClick={() => setNavActive(!navActive)}>
					<div></div>
					<div></div>
					<div></div>
				</button>
			</header>
			<nav className="main-header-nav">
				<MainNavLinks/>
			</nav>
		</div>
	)
};

export default MainHeader;