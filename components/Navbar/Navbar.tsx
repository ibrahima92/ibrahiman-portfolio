import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Navbar: React.FC<{ sticky: boolean }> = ({ sticky }) => {
	const [navbarOpen, setNavbarOpen] = React.useState(false)
	return (
		<nav className={sticky || navbarOpen ? 'bg-white fixed shadow-md' : ''}>
			<div className="container mx-auto flex flex-wrap items-center justify-between md:large-width">
				<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
					<Link href="/">
						<a className="font-bold text-2xl leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-primary">
							IN
						</a>
					</Link>
					<button
						className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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

export default Navbar
