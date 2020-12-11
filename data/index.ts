import { Project, Skill } from './../types/Type'

export const ProjectsList: Project[] = [
	{
		id: 0,
		title: 'Blog',
		imagePreview: '/static/in-light-theme.PNG',
		stack: ['Gatsby', 'GraphQL', 'Markdown'],
		link: 'https://www.ibrahima-ndaw.com/',
	},
	{
		id: 1,
		title: 'Portfolio',
		imagePreview: '/static/portfolio.PNG',
		stack: ['Gatsby', 'GraphQL', 'Markdown'],
		link: 'https://www.ibrahima-ndaw.com/',
	},
	{
		id: 2,
		title: 'E-commerce',
		imagePreview: '/static/in-dark-theme.PNG',
		stack: ['Gatsby', 'GraphQL', 'Markdown'],
		link: 'https://www.ibrahima-ndaw.com/',
	},
]

export const SkillSet: Skill[] = [
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
