import Layout from '../layout'
import About from '../components/About'
import CTA from '../components/CTA'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Header from '../components/Header'
import Contact from '../components/Contact'

export default function Home(): React.ReactNode {
	return (
		<Layout>
			<Header />
			<section id="about" className="bg-white">
				<About />
				<Skills />
			</section>
			<section className="bg-black">
				<CTA />
			</section>
			<section id="projects" className="bg-white">
				<Projects />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</Layout>
	)
}
