import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
	return (
		<header className="flex justify-center items-center h-screen">
			<div className="flex flex-col justify-center items-center transform -translate-y-1/4">
				<Image src="/logo.png" width="150" height="150" alt="logo-avatar" />
				<h1 className="text-5xl my-2 text-center font-bold">Hello! I&apos;m Ibrahima</h1>
				<p className="text-center text-gray-dark my-1">
					JavaScript enthusiast, Full-stack developer, Blogger who also dabbles on UX/UI. <br /> I
					build beautiful, user-friendly, and intuitive websites that fit your needs.
				</p>
				<button className="bg-gradient-to-r from-primary via-red-500 to-pink-500 text-white">
					Contact Me
				</button>
			</div>
		</header>
	)
}

export default Header
