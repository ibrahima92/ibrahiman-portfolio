import About from '../components/Content/About'
import Skills from '../components/Content/Skills'
import Header from '../components/Layout/Header'
import Layout from '../components/Layout/Layout'

export default function Home(): React.ReactNode {
	return (
		<Layout>
			<Header />
			<section className="bg-white pb-10">
				<About />
				<Skills />
			</section>
		</Layout>
	)
}
