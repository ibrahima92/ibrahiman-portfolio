import React from 'react'
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => {
	const ProjectsList = [
		{
			id: 0,
			title: 'Blog',
			imagePreview: '/in-light-theme.PNG',
			stack: ['Gatsby', 'GraphQL', 'Markdown'],
			link: 'https://www.ibrahima-ndaw.com/',
		},
		{
			id: 2,
			title: 'Blogging',
			imagePreview: '/in-light-theme.PNG',
			stack: ['Gatsby', 'GraphQL', 'Markdown'],
			link: 'https://www.ibrahima-ndaw.com/',
		},
	]
	return (
		<div className="flex max-w-3xl m-auto justify-center items-center flex-wrap space-x-4">
			{ProjectsList.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	)
}

export default Projects
