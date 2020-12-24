import Link from 'next/link'

export default function Header(): JSX.Element {
	return (
		<header className="flex justify-center items-center h-screen">
			<div className="px-4 flex flex-col justify-center items-center transform -translate-y-1/4">
				<h1 className="text-3xl my-2 text-white text-center font-bold sm:text-4xl md:text-5xl">
					Hello! I&apos;m Ibrahima
				</h1>
				<p className="text-sm sm:text-base max-w-2xl m-auto">
					A JavaScript enthusiast, Full-stack developer, Blogger who also dabbles on UX/UI. I build
					beautiful and user-friendly websites that fit your needs.
				</p>
				<Link href="#contact">
					<a className="btn btn-primary">Contact Me</a>
				</Link>
			</div>
		</header>
	)
}
