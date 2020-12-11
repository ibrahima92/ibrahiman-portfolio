import React from 'react'
import { SkillSet } from '../../data'
import SkillCard from './SkillCard'

const Skills: React.FC = () => (
	<div className="flex flex-wrap space-x-4 max-w-5xl m-auto">
		{SkillSet.map((skill) => (
			<SkillCard key={skill.title} skill={skill} />
		))}
	</div>
)

export default Skills
