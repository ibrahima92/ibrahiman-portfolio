import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { socialLinks } from '../data'
import Link from 'next/link'

import Navbar from '../components/Navbar'

type Props = {
	children: React.ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
	const [sticky, setSticky] = useState<boolean>(false)
	return (
		<>
			<Waypoint onEnter={() => setSticky(false)} onLeave={() => setSticky(true)} />
			<Navbar sticky={sticky} />
			<main>{children}</main>
			<footer className="bg-secondary w-full flex flex-col items-center justify-center py-5">
				<div className="mb-2 flex items-center justify-center">
					{socialLinks.map(({ id, name, link }) => (
						<Link href={link} key={id}>
							<a
								target="_blank"
								style={{ margin: '1rem 0.5rem' }}
								className="text-white"
								rel="noopener noreferrer"
							>
								{name}
							</a>
						</Link>
					))}
				</div>
				<p className="">
					&copy; 2019 - {new Date().getFullYear()}, Built with{' '}
					<span role="img" aria-label="love">
						&#9749; and &#10084;&#65039;
					</span>{' '}
					to code
				</p>
			</footer>
		</>
	)
}
