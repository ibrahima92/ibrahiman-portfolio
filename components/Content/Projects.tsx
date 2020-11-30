import React from 'react'
import { ProjectsList } from '../../data'
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => (
	<>
		<p id="projects" className="my-5">
			Beatae vero culpa cum ipsa necessitatibus nemo officia voluptatum magnam dignissimos?
		</p>
		<div className="flex max-w-4xl m-auto justify-center items-center flex-wrap space-x-4">
			{ProjectsList.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	</>
)

export default Projects
