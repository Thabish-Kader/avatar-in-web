import { AvatarCanvas } from "./AvatarCanvas";

const Hero = () => {
	return (
		<section className="bg-[url('/hero-bck.jpg')] bg-center bg-no-repeat bg-cover relative w-full h-screen mx-auto">
			<div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
				{/*  message */}
				<div>
					<h1 className="text-white text-7xl font-extrabold">
						Hi, I'm <span className="text-theme">thabish</span>
					</h1>
					<p className="hidden sm:block text-lg mt-9 text-white w-[550px]">
						My code is so clean, my keyboard has never needed a
						shower.
						<br />
						So come on in, explore a little, and let's make some
						magic together!
					</p>
				</div>
			</div>

			<AvatarCanvas />
		</section>
	);
};

export default Hero;
