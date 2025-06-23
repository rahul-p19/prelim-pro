import { Link } from "react-router";
import Navbar from "./Navbar";
import { MoveUpRight } from "lucide-react";

function Hero() {
	return (
		<div className="w-full min-h-screen flex flex-col gap-y-6 items-center p-6 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
			<Navbar />
			<div className="grid md:place-items-center md:grid-cols-2 md:gap-18 w-3/4 min-h-[80vh]">
				<h1 className="text-6xl text-center md:text-left text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary">
					Hassle free online prelims!
				</h1>
				<div className="flex flex-col items-center gap-8 pt-16">
					<h3 className="text-lg font-alegreya w-9/10 text-center">
						Host smooth, high-performance preliminary rounds for your hackathon
						with advanced features and high reliability.
					</h3>
					<Link
						to="/register"
						className="border border-primary/50 flex gap-2 p-4 hover:bg-secondary/20 duration-150 group">
						Get Started{" "}
						<MoveUpRight className="group-hover:scale-125 duration-200" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
