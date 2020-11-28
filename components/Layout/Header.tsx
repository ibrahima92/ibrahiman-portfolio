import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
	return (
		<header className="flex justify-center items-center h-screen">
			<div className="flex flex-col justify-center items-center transform -translate-y-1/4">
				<h1 className="text-5xl my-2 text-center font-bold">Hello! I&apos;m Ibrahima</h1>
				<p className="text-center">
					JavaScript enthusiast, Full-stack developer, Blogger who also dabbles on UX/UI. <br /> I
					build beautiful, user-friendly, and intuitive websites that fit your needs.
				</p>
				<Link href="#contact">
					<a className="button-primary">Contact Me</a>
				</Link>
			</div>
		</header>
	)
}

export default Header
