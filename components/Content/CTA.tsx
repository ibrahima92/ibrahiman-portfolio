import Link from 'next/link'
import React from 'react'

const CTA: React.FC = () => (
	<div className="text-center">
		<h1 className="text-3xl text-center font-bold mb-8 text-white sm:text-4xl md:text-5xl">
			Ready to start a Project?
		</h1>
		<Link href="#contact">
			<a className="btn btn-secondary">Contact Me</a>
		</Link>
	</div>
)

export default CTA
