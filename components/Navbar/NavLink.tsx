import React from 'react'
import Link from 'next/link'

type Props = {
	linkPage?: string
	linkName: string
}

const NavLink: React.FC<Props> = ({ linkPage = '/', linkName }) => (
	<li className="mr-4 py-2 flex items-center text-sm uppercase font-bold leading-snug text-black  hover:text-primary">
		<Link href={linkPage}>
			<a>{linkName}</a>
		</Link>
	</li>
)

export default NavLink
