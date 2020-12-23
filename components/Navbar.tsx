import { useState } from 'react'
import Link from 'next/link'

type NavLinkProps = {
	linkPage?: string
	linkName: string
}

type NavBarProps = { sticky: boolean }

export default function Navbar({ sticky }: NavBarProps): JSX.Element {
	const [navbarOpen, setNavbarOpen] = useState(false)
	return (
		<nav className={sticky || navbarOpen ? 'bg-secondary fixed shadow-md' : ''}>
			<div className="container mx-auto flex flex-wrap items-center justify-between md:large-width">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<Link href="/">
						<a className="font-bold text-2xl leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase">
							IN
						</a>
					</Link>
					<button
						className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						<i className="fas fa-bars"></i>
					</button>
				</div>
				<div
					className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}
					id="example-navbar-danger"
				>
					<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
						<NavLink linkName="Home" />
						<NavLink linkName="About" linkPage="#about" />
						<NavLink linkName="Projects" linkPage="#projects" />
						<NavLink linkName="Blog" linkPage="https://www.ibrahima-ndaw.com/" />
						<NavLink linkName="Contact" linkPage="#contact" />
					</ul>
				</div>
			</div>
		</nav>
	)
}

function NavLink({ linkPage = '/', linkName }: NavLinkProps): JSX.Element {
	return (
		<li className="mr-4 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white  hover:text-primary">
			<Link href={linkPage}>
				<a>{linkName}</a>
			</Link>
		</li>
	)
}
