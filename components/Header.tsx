import React from 'react'

const Header: React.FC = () => {
	return (
		<header className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-5xl text-center font-bold">Hello! I&apos;m Ibrahima</h1>
			<p className="text-center text-gray-dark">
				JavaScript enthusiast, Full-stack developer, Blogger who also dabbles on UX/UI. <br /> I
				build beautiful, user-friendly, and intuitive websites that fit your needs.
			</p>
			<button className="bg-primary text-white">Contact Me</button>
		</header>
	)
}

export default Header
