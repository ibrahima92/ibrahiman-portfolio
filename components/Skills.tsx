import { SkillSet } from '../data'
import { Skill } from '../types'

type SkillCardProps = {
	skill: Skill
}

export default function Skills(): JSX.Element {
	return (
		<div className="flex flex-wrap justify-center large-width">
			{SkillSet.map((skill) => (
				<SkillCard key={skill.title} skill={skill} />
			))}
		</div>
	)
}

function SkillCard({ skill: { title, skills } }: SkillCardProps): JSX.Element {
	return (
		<div className="w-full m-3 rounded-lg shadow-xl ring-2 ring-tertiary overflow-hidden sm:w-60">
			<div className="bg-tertiary p-2">
				<h1 className="text-2xl text-center">{title}</h1>
			</div>
			<ul className="p-4">
				{skills.map((skill) => (
					<li className="text-grey-darker" key={skill}>
						&rarr; {skill}
					</li>
				))}
			</ul>
		</div>
	)
}
