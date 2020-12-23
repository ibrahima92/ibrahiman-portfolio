import { useState } from 'react'
// import { Contact as ContactType } from '../../types/Type'

export default function Contact(): JSX.Element {
	// const [formData, setformData] = React.useState<ContactType>()
	const [sendForm, setSendForm] = useState<boolean>(false)
	const saveForm = (e) => {
		e.preventDefault()
		setSendForm(true)
		setTimeout(() => {
			setSendForm(false)
			e.target.reset()
		}, 2000)
	}

	return (
		<div>
			<h1 className="headline">Let&apos;s work together!</h1>
			<p className="description">Do you have an idea in mind? Let&apos; discuss!</p>
			<form
				onSubmit={saveForm}
				className="rounded-lg shadow-xl ring-2 ring-tertiary overflow-hidden px-8 py-6 flex flex-col small-width"
			>
				<div className="-mx-3 md:flex mb-6">
					<div className="md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
							htmlFor="grid-first-name"
						>
							First Name
						</label>
						<input
							className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-tertiary rounded py-3 px-4 mb-3"
							id="first-name"
							type="text"
							placeholder="Jane"
						/>
					</div>
					<div className="md:w-1/2 px-3">
						<label
							className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
							htmlFor="grid-last-name"
						>
							Last Name
						</label>
						<input
							className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-tertiary rounded py-3 px-4"
							id="grid-last-name"
							type="text"
							placeholder="Doe"
						/>
					</div>
				</div>
				<div className="md:w-full px-3">
					<label
						className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
						htmlFor="grid-password"
					>
						Description
					</label>
					<textarea
						className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-tertiary rounded py-3 px-4 mb-3"
						name="description"
						cols={30}
						rows={10}
					/>
				</div>
				<button className="btn btn-primary">{sendForm ? 'Sending...' : 'Send'}</button>
			</form>
		</div>
	)
}
