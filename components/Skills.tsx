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

function SkillCard({ skill }: SkillCardProps): JSX.Element {
	const { title, skills } = skill
	return (
		<div className="w-full m-3 rounded-lg shadow-xl ring-2 ring-black-darker overflow-hidden sm:w-60">
			<div className="bg-orange p-2">
				<h1 className="text-2xl text-white text-center">{title}</h1>
			</div>
			<ul className="p-4">
				{skills.map((skill) => (
					<li className="text-black-lighter" key={skill}>
						&rarr; {skill}
					</li>
				))}
			</ul>
		</div>
	)
}
