import Layout from '../layout'
import About from '../components/About'
import CTA from '../components/CTA'
import Projects from '../components/Projects'
import Posts from '../components/Posts'
import Skills from '../components/Skills'
import Header from '../components/Header'
import Contact from '../components/Contact'

export default function Home(): React.ReactNode {
	return (
		<Layout>
			<Header />
			<section id="about" className="bg-secondary">
				<About />
				<Skills />
			</section>
			<section>
				<CTA />
			</section>
			<section id="projects" className="bg-secondary">
				<Projects />
			</section>
			<section>
				<Posts />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</Layout>
	)
}
