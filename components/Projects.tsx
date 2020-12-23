import Link from 'next/link'
import Image from 'next/image'

import { ProjectsList, CODESANDBOX_URL } from '../data'
import { Project } from '../types'

type ProjectCardProps = {
	project: Project
}

export default function Projects(): JSX.Element {
	return (
		<div className="large-width">
			<h1 className="headline">My works</h1>
			<p className="description">
				I love building new things. You can visit my{' '}
				<Link href={CODESANDBOX_URL}>
					<a className="underline">CodeSandbox</a>
				</Link>{' '}
				for more.
			</p>
			<div className="flex flex-wrap justify-center items-center">
				{ProjectsList.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	)
}

function ProjectCard({ project }: ProjectCardProps): JSX.Element {
	const { stack, title } = project
	return (
		<div className="w-full m-3 rounded-lg shadow-xl bg-black ring-2 ring-black-darker overflow-hidden md:w-80">
			<div className="p-2">
				<h1 className="font-bold mb-1 text-primary">{title}</h1>
				<ul className="flex items-center">
					{stack.map((stack) => (
						<li className="text-xs text-black-lighter mr-3 sm:text-base" key={stack}>
							{stack}
						</li>
					))}
				</ul>
			</div>
			<div className="p-1">
				<Image
					className="rounded-lg"
					src={project.imagePreview}
					width="300"
					height="300"
					alt="project-image"
					layout="responsive"
				/>
			</div>
			<div className="py-6 flex justify-center">
				<Link href={project.link}>
					<a className="btn btn-primary">Preview</a>
				</Link>
				<Link href={project.code}>
					<a className="btn btn-primary">Code</a>
				</Link>
			</div>
		</div>
	)
}
