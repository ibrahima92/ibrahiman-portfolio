import React from 'react'
import Link from 'next/link'

type Props = {
	linkPage: string
	linkName: string
}

const NavLink: React.FC<Props> = ({ linkPage, linkName }) => (
	<li className="mr-4 hover:text-primary active:text-primary">
		<Link href={linkPage}>
			<a>{linkName}</a>
		</Link>
	</li>
)

export default NavLink
