import Link from 'next/link'

import { Posts as PostList, BLOG_URL } from '../data/'
import { BlogPost } from '../types'

type ProjectCardProps = {
	post: BlogPost
}

export default function Posts(): JSX.Element {
	return (
		<div className="large-width">
			<h1 className="headline">My latest articles</h1>
			<p className="description">
				I love writing articles on topics around React, Next.js, GraphQL, TypeScript, Testing. You
				can visit{' '}
				<Link href={BLOG_URL}>
					<a className="underline">my blog</a>
				</Link>{' '}
				for more.
			</p>
			<div className="flex flex-wrap justify-center">
				{PostList.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</div>
	)
}

function PostCard({ post }: ProjectCardProps): JSX.Element {
	const { title, description, link } = post
	return (
		<div className="w-full m-3 bg-secondary p-4 rounded-lg shadow-xl bg-black ring-2 ring-black-darker overflow-hidden md:w-80 flex justify-between flex-col">
			<h1 className="font-bold mb-1 text-white">{title}</h1>
			<p className="text-sm text-left">{description}</p>
			<Link href={link}>
				<a className="text-primary">Read more &rarr;</a>
			</Link>
		</div>
	)
}
