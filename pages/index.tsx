import Layout from '../components/Layout/Layout'
import About from '../components/Content/About'
import CTA from '../components/Content/CTA'
import Projects from '../components/Content/Projects'
import Skills from '../components/Content/Skills'
import Header from '../components/Layout/Header'

export default function Home(): React.ReactNode {
	return (
		<Layout>
			<Header />
			<section className="bg-white">
				<About />
				<Skills />
			</section>
			<section className="bg-gradient-to-r from-secondary to-black">
				<CTA />
			</section>
			<section className="to-primary">
				<Projects />
			</section>
		</Layout>
	)
}
