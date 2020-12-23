export type Skill = {
	title: string
	skills: string[]
}

export type Contact = {
	firstName: string
	lastName: string
	description: string
}

export type Project = {
	id: number
	title: string
	imagePreview: string
	stack: string[]
	link: string
	code: string
}

export type SocialLinks = {
	id: number
	name: string
	link: string
}

export type BlogPost = {
	id: number
	title: string
	description: string
	link: string
}
