import React from 'react'
import { SkillSet } from '../../data'
import SkillCard from './SkillCard'

const Skills: React.FC = () => (
	<div className="flex flex-wrap justify-center large-width">
		{SkillSet.map((skill) => (
			<SkillCard key={skill.title} skill={skill} />
		))}
	</div>
)

export default Skills
