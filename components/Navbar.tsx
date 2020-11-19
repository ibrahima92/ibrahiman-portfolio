import React from 'react'
import NavLink from './NavLink'

const Navbar: React.FC = () => (
	<nav className="flex justify-between bg-white align-center px-5 py-4">
		<h1 className="font-bold">Ibrahima Ndaw</h1>
		<ul className="flex justify-center align-center">
			<NavLink linkName="Home" linkPage="/" />
			<NavLink linkName="About" linkPage="#about" />
			<NavLink linkName="Projects" linkPage="#projects" />
			<NavLink linkName="Services" linkPage="#services" />
			<NavLink linkName="Blog" linkPage="https://www.ibrahima-ndaw.com/" />
			<NavLink linkName="Contact" linkPage="#contact" />
		</ul>
	</nav>
)

export default Navbar
