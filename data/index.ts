import { Project, Skill, SocialLinks, BlogPost } from '../types'

const GITHUB_URL = 'https://github.com/ibrahima92'
export const BLOG_URL = 'https://www.ibrahima-ndaw.com'
export const CODESANDBOX_URL = 'https://codesandbox.io/u/ibrahima92'
const TWITTER_URL = 'https://twitter.com/ibrahima92_'
const LINKEDIN_URL = 'https://www.linkedin.com/in/ibrahima-ndaw/'
const DEV_URL = 'https://dev.to/ibrahima92'

export const ProjectsList: Project[] = [
	{
		id: 0,
		title: 'Blog',
		imagePreview: '/static/in-dark-theme.PNG',
		stack: ['Gatsby', 'GraphQL', 'Markdown'],
		link: BLOG_URL,
		code: `${GITHUB_URL}/ibrahiman`,
	},
	{
		id: 1,
		title: 'Portfolio',
		imagePreview: '/static/portfolio.PNG',
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		link: '#',
		code: `${GITHUB_URL}/ibrahiman-portfolio`,
	},
	{
		id: 2,
		title: 'Full-stack MERN app',
		imagePreview: '/static/todo-image.PNG',
		stack: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
		link: `${GITHUB_URL}/fullstack-typescript-mern-todo`,
		code: `${GITHUB_URL}/fullstack-typescript-mern-todo`,
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
		link: TWITTER_URL,
	},
	{
		id: 1,
		name: 'Github',
		link: GITHUB_URL,
	},
	{
		id: 2,
		name: 'Linkedin',
		link: LINKEDIN_URL,
	},
	{
		id: 3,
		name: 'DEV',
		link: DEV_URL,
	},
]

export const Posts: BlogPost[] = [
	{
		id: 0,
		title: 'Data fetching in Next.js — How To Use SWR',
		description:
			'Next.js offers several ways for fetching data since it supports both client and server-side…',
		link: `${BLOG_URL}/blog/data-fetching-in-nextjs-using-useswr/`,
	},
	{
		id: 1,
		title: "Routing in Next.js — A Complete Beginner's Guide",
		description:
			'Next.js is a React framework that ships with all the features you need for production. Next.js…',
		link: `${BLOG_URL}/blog/routing-in-nextjs/`,
	},
	{
		id: 2,
		title: 'Introduction Guide to Next.js',
		description:
			'Next.js is a React framework that ships with all the features you need for production. It gives you…',
		link: `${BLOG_URL}/blog/introduction-to-nextjs/`,
	},
	{
		id: 3,
		title: 'How To Use Redux in your React TypeScript App',
		description:
			"Redux is a predictable state container for JavaScript apps. It's a popular library for managing…",
		link: `${BLOG_URL}/blog/using-redux-with-react-typescript/`,
	},
	{
		id: 4,
		title: 'The React TypeScript Cheatsheet – How To Set Up Types on Hooks',
		description:
			'Next.js is a React framework that ships with all the features you need for production. Next.js…',
		link: `${BLOG_URL}/blog/set-typescript-types-to-react-hooks/`,
	},
	{
		id: 5,
		title: 'How To Build a Todo App with React, TypeScript, NodeJS, and MongoDB',
		description:
			'In this tutorial, we will be using TypeScript on both sides (server and client) to build a Todo App…',
		link: `${BLOG_URL}/blog/how-to-buil-a-todo-app-with-react-and-node-js/`,
	},
]
