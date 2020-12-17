import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
	return (
		<header className="flex justify-center items-center h-screen">
			<div className="px-4 flex flex-col justify-center items-center transform -translate-y-1/4">
				<h1 className="text-3xl my-2 text-center font-bold sm:text-4xl md:text-5xl">
					Hello! I&apos;m Ibrahima
				</h1>
				<p className="text-sm sm:text-base">
					JavaScript enthusiast, Full-stack developer, Blogger who also dabbles on UX/UI. <br /> I
					build beautiful, user-friendly, and intuitive websites that fit your needs.
				</p>
				<Link href="#contact">
					<a className="btn btn-primary">Contact Me</a>
				</Link>
			</div>
		</header>
	)
}

export default Header
