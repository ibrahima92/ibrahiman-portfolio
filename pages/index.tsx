import Layout from '../components/Layout/Layout'
import About from '../components/Content/About'
import CTA from '../components/Content/CTA'
import Projects from '../components/Content/Projects'
import Skills from '../components/Content/Skills'
import Header from '../components/Layout/Header'
import Contact from '../components/Content/Contact'

export default function Home(): React.ReactNode {
	return (
		<Layout>
			<Header />
			<section id="about" className="bg-white">
				<About />
				<Skills />
			</section>
			<section className="bg-secondary">
				<CTA />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="contact" className="bg-white">
				<Contact />
			</section>
		</Layout>
	)
}
