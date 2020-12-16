import Link from 'next/link'
import React from 'react'

const CTA: React.FC = () => (
	<div className="text-center">
		<h1 className="text-5xl font-bold mb-8">Ready to start a Project?</h1>
		<Link href="#contact">
			<a className="button-primary">Contact Me</a>
		</Link>
	</div>
)

export default CTA
