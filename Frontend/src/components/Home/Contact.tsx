// Enforce login for submission or employ some other auth to prevent spamming.

function Contact() {
	return (
		<div className="w-full min-h-screen flex flex-col gap-6 items-center p-6">
			<h1 className="text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary">Contact Us</h1>
			<h4 className="text-sm font-light text-center md:text-left">Want help with an issue, or have questions or feedback? We&apos;re here to listen!</h4>
			<p className="text-sm my-2">Fields marked with * are required.</p>
			<form className="w-5/6 md:w-1/2 flex flex-col md:grid md:grid-cols-2 md:gap-x-12 gap-y-4 md:gap-y-6">
				<div className="flex flex-col gap-2">
					<label htmlFor="firstName" className="text-xs">First Name *</label>
					<input type="text" name="firstName" id="firstName" required className="border-secondary border bg-secondary/40 rounded-sm p-2 text-sm outline-none" />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="lastName" className="text-xs">Last Name</label>
					<input type="text" name="lastName" id="lastName" className="border-secondary border bg-secondary/40 rounded-sm p-2 text-sm outline-none" />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="email" className="text-xs">Email *</label>
					<input type="email" name="email" id="email" required className="border-secondary border bg-secondary/40 rounded-sm p-2 text-sm outline-none" />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="phone" className="text-xs">Phone Number</label>
					<input type="text" name="phone" id="phone" className="border-secondary border bg-secondary/40 rounded-sm p-2 text-sm outline-none" />
				</div>
				<div className="flex flex-col gap-2 md:col-span-2">
					<label htmlFor="message" className="text-xs">Your Message *</label>
					<textarea name="message" id="message" required className="border-secondary border bg-secondary/40 rounded-sm p-2 text-sm outline-none" />
				</div>
				<button className="col-span-2 border-secondary border bg-background/80 hover:bg-secondary/50 duration-300 p-2 rounded-sm" type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Contact;
