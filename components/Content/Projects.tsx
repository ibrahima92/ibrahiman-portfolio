import React from 'react'
import { ProjectsList } from '../../data'
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => (
	<div id="projects" className="max-w-7xl m-auto">
		<h1 className="text-5xl my-2 text-center font-bold">My works</h1>
		<p className="mt-5 mb-10 max-w-4xl m-auto">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero culpa cum ipsa
			necessitatibus nemo officia voluptatum magnam dignissimos? Quod nemo eveniet praesentium
			dolorum obcaecati sapiente dolor vero sunt beatae!
		</p>
		<div className="flex justify-center items-center flex-wrap space-x-4">
			{ProjectsList.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	</div>
)

export default Projects
