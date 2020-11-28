import React from 'react'
import { Skill } from '../../types/Type'

type Props = {
	skill: Skill
}

const SkillCard: React.FC<Props> = ({ skill: { title, skills } }) => (
	<div className="w-1/4 flex-1 bg-gray-light rounded-lg shadow-lg overflow-hidden">
		<div className="bg-primary p-2">
			<h1 className="font-bold text-2xl text-white text-center">{title}</h1>
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
