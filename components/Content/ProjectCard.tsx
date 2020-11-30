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
			<div className="w-1/3 flex-1 overflow-hidden">
				<div className="p-2 bg-white border-b-2 border-primary">
					<h1 className="font-bold text-primary mb-1">{project.title}</h1>
					<ul className="flex items-center">
						{project.stack.map((stack) => (
							<li className="text-gray-dark mr-2" key={stack}>
								{stack}
							</li>
						))}
					</ul>
				</div>
				<div>
					<Image
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
