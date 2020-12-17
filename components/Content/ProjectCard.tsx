import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Project } from '../../types/Type'

type Props = {
	project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<div className="w-full m-3 rounded-lg shadow-xl bg-white ring-2 ring-tertiary overflow-hidden md:w-80">
			<div className="p-2">
				<h1 className="font-bold mb-1">{project.title}</h1>
				<ul className="flex items-center">
					{project.stack.map((stack) => (
						<li className="text-xs text-grey-darker mr-3 sm:text-base" key={stack}>
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
			<div className="py-6 text-center">
				<Link href={project.link}>
					<a className="btn btn-tertiary mr-5">Preview</a>
				</Link>
				<Link href={project.link}>
					<a className="btn btn-tertiary">Code</a>
				</Link>
			</div>
		</div>
	)
}

export default ProjectCard
