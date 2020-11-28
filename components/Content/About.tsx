import React from 'react'
import Image from 'next/image'

const About: React.FC = () => (
	<div
		id="about"
		className="max-w-4xl m-auto shadow-md transform -translate-y-12 bg-white p-10 flex flex-col justify-center items-center rounded-lg"
	>
		<Image src="/logo.png" width="150" height="150" alt="logo-avatar" layout="responsive" />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero culpa cum ipsa
			necessitatibus nemo officia voluptatum magnam dignissimos? Quod nemo eveniet praesentium
			dolorum obcaecati sapiente dolor vero sunt beatae!
		</p>
	</div>
)

export default About
