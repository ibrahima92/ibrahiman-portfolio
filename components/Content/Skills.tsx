import React from 'react'
import { Skill } from '../../types/Type'
import SkillCard from './SkillCard'

const Skills: React.FC = () => {
	const SkillSet: Skill[] = [
		{
			title: 'Front-end',
			skills: ['HTML', 'CSS', 'React', 'Next', 'Gatsby', 'JavaScript', 'TypeScript'],
		},
		{
			title: 'Back-end',
			skills: [
				'Node',
				'Express',
				'GraphQL',
				'TypeGraphQL',
				'Apollo Server',
				'MongoDB',
				'PostgreSQL',
				'FaunaDB',
			],
		},
		{
			title: 'Tooling',
			skills: [
				'Git',
				'WebPack',
				'Babel',
				'Docker',
				'Snowpack',
				'Parcel',
				'Jest',
				'React Testing Library',
			],
		},
		{
			title: 'UX/UI',
			skills: ['Figma', 'Sketch', 'Adobe XD'],
		},
	]

	return (
		<div className="flex flex-wrap space-x-4 max-w-5xl m-auto">
			{SkillSet.map((skill) => (
				<SkillCard key={skill.title} skill={skill} />
			))}
		</div>
	)
}

export default Skills
