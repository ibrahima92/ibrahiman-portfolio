import Link from 'next/link'

export default function CTA(): JSX.Element {
	return (
		<div className="text-center py-10">
			<h1 className="text-3xl text-center font-bold mb-8 text-white sm:text-4xl md:text-5xl">
				Ready to start a Project?
			</h1>
			<Link href="#contact">
				<a className="btn btn-primary">Contact Me</a>
			</Link>
		</div>
	)
}
