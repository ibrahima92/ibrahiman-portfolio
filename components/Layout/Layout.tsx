import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import Navbar from '../Navbar/Navbar'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	const [sticky, setSticky] = useState<boolean>(false)
	return (
		<>
			<Waypoint onEnter={() => setSticky(false)} onLeave={() => setSticky(true)} />
			<Navbar sticky={sticky} />
			<main>{children}</main>
		</>
	)
}

export default Layout
