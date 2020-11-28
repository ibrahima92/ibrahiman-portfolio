import About from '../components/Content/About'
import Projects from '../components/Content/Projects'
import Skills from '../components/Content/Skills'
import Header from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'

export default function Home(): React.ReactNode {
	return (
		<Layout>
			<Header />
			<section className="bg-white pb-20">
				<About />
				<Skills />
			</section>
			<section className="py-20">
				<Projects />
			</section>
		</Layout>
	)
}
