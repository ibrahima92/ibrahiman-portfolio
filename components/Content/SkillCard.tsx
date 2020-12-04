import React from 'react'
import { Skill } from '../../types/Type'

type Props = {
	skill: Skill
}

const SkillCard: React.FC<Props> = ({ skill: { title, skills } }) => (
	<div className="w-1/4 flex-1 rounded-lg shadow-xl ring-2 ring-tertiary overflow-hidden">
		<div className="bg-tertiary p-2">
			<h1 className="text-2xl text-center">{title}</h1>
		</div>
		<ul className="p-4">
			{skills.map((skill) => (
				<li className="text-gray-dark" key={skill}>
					&rarr; {skill}
				</li>
			))}
		</ul>
	</div>
)

export default SkillCard
