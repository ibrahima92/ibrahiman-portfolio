import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Project } from '../../types/Type'

type Props = {
	project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<Link href={project.link}>
			<div className="w-1/3 bg-tertiary flex-1 rounded-lg ring-2 ring-tertiary overflow-hidden">
				<div className="p-2">
					<h1 className="font-bold mb-1">{project.title}</h1>
					<ul className="flex items-center">
						{project.stack.map((stack) => (
							<li className="text-gray-dark mr-2" key={stack}>
								{stack}
							</li>
						))}
					</ul>
				</div>
				<div className="p-2">
					<Image
						className="shadow-2xl rounded-lg"
						src={project.imagePreview}
						width="300"
						height="300"
						alt="project-image"
						layout="responsive"
					/>
				</div>
			</div>
		</Link>
	)
}

export default ProjectCard
