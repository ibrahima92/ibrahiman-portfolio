import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Project } from '../../types/Type'

type Props = {
	project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<div className="w-1/2 flex-1 rounded-lg shadow-lg overflow-hidden">
			<div>
				<h1 className="font-bold text-2xl mb-4">{project.title}</h1>
				<ul>
					<h2>Technologies</h2>
					{project.stack.map((stack) => (
						<li className="text-gray-dark" key={stack}>
							#{stack}
						</li>
					))}
				</ul>
				<Link href={project.link}>
					<a className="button-primary">Preview</a>
				</Link>
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
	)
}

export default ProjectCard
