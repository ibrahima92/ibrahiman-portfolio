import { Project, Skill, SocialLinks } from './../types/Type'

export const ProjectsList: Project[] = [
	{
		id: 0,
		title: 'Blog',
		imagePreview: '/static/in-light-theme.PNG',
		stack: ['Gatsby', 'GraphQL', 'Markdown'],
		link: 'https://www.ibrahima-ndaw.com/',
		code: 'https://github.com/ibrahima92/ibrahiman',
	},
	{
		id: 1,
		title: 'Portfolio',
		imagePreview: '/static/portfolio.PNG',
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		link: 'https://www.ibrahima-ndaw.com/',
		code: 'https://github.com/ibrahima92/ibrahiman-portfolio',
	},
	{
		id: 2,
		title: 'Full-stack MERN app',
		imagePreview: '/static/todo-image.PNG',
		stack: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
		link: 'https://github.com/ibrahima92/fullstack-typescript-mern-todo',
		code: 'https://github.com/ibrahima92/fullstack-typescript-mern-todo',
	},
]

export const SkillSet: Skill[] = [
	{
		title: 'Front-end',
		skills: ['HTML', 'CSS', 'React', 'Next', 'Gatsby', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
	},
	{
		title: 'Back-end',
		skills: ['Node', 'Express', 'GraphQL', 'TypeGraphQL', 'Apollo Server', 'MongoDB', 'Serverless'],
	},
	{
		title: 'Tooling',
		skills: ['Git', 'WebPack', 'Babel', 'Snowpack', 'Jest', 'React Testing Library'],
	},
	{
		title: 'UX/UI',
		skills: ['Figma', 'Sketch', 'Adobe XD'],
	},
]

export const socialLinks: SocialLinks[] = [
	{
		id: 0,
		name: 'Twitter',
		link: 'https://twitter.com/ibrahima92_',
	},
	{
		id: 1,
		name: 'Github',
		link: 'https://github.com/ibrahima92',
	},
	{
		id: 2,
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/ibrahima-ndaw/',
	},
	{
		id: 3,
		name: 'DEV',
		link: 'https://dev.to/ibrahima92',
	},
]
