import React from 'react'
import Link from 'next/link'
import { ProjectsList } from '../../data'
import ProjectCard from './ProjectCard'

const Projects: React.FC = () => (
	<div className="large-width">
		<h1 className="headline">My works</h1>
		<p className="description">
			I love building new things. You can visit my{' '}
			<Link href="https://codesandbox.io/u/ibrahima92">
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

export default Projects
