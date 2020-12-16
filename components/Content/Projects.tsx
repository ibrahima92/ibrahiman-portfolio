import React from 'react'
import { ProjectsList } from '../../data'
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => (
	<div className="large-width">
		<h1 className="headline">My works</h1>
		<p className="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero culpa cum ipsa
			necessitatibus nemo officia voluptatum magnam dignissimos? Quod nemo eveniet praesentium
			dolorum obcaecati sapiente dolor vero sunt beatae!
		</p>
		<div className="flex flex-wrap space-x-4 justify-center items-center">
			{ProjectsList.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	</div>
)

export default Projects
