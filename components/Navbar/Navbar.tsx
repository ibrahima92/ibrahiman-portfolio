import React from 'react'
import NavLink from './NavLink'

const Navbar: React.FC<{ sticky: boolean }> = ({ sticky }) => (
	<nav className={sticky ? 'bg-white fixed shadow-md' : ''}>
		<h1 className="font-bold text-2xl">IN</h1>
		<ul className="flex justify-center align-center">
			<NavLink linkName="Home" linkPage="/" />
			<NavLink linkName="About" linkPage="#about" />
			<NavLink linkName="Projects" linkPage="#projects" />
			<NavLink linkName="Blog" linkPage="https://www.ibrahima-ndaw.com/" />
			<NavLink linkName="Contact" linkPage="#contact" />
		</ul>
	</nav>
)

export default Navbar
