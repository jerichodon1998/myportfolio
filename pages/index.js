import Layout from "../components/Layout";
import todolistapp from "../public/assets/todolistapp.gif";
import me from "../public/assets/me.jpg";
import code_review from "../public/assets/code_review.svg";
import responsive from "../public/assets/responsive.svg";
import static_assets from "../public/assets/static_assets.svg";
import csu from "../public/assets/Caraga_State_University.png";
import Image from "next/image";
import Link from "next/link";
const imageSize = "35px";

export default function Home() {
	return (
		<Layout>
			{/* HOME SECTION */}
			<div
				id="intro"
				className="h-screen bg-cover bg-[url('../public/assets/website_built.svg')]"
			>
				<div className="lg:px-52 px-10">
					<p className="text-4xl text-center">
						Hey! I&apos;m Mark Jericho Manilag! I am a Web Developer.
					</p>
					<div className="grid lg:grid-cols-2 grid-cols-1 py-20 gap-8 ">
						<div className="text-2xl font-bold text-center text-old-Mauve md:mb-16 drop-shadow-2xl">
							I made a personal
							<br />
							project with this tech stack
						</div>
						<div className="pt-4 grid grid-rows-1 justify-evenly text-center text-old-Mauve grid-flow-col transition delay-150 hover:scale-110 ">
							<div>
								<Image
									src="https://skillicons.dev/icons?i=react"
									height={imageSize}
									width={imageSize}
									alt="react"
								/>
								<h1 className="text-md font-bold">React Js</h1>
							</div>
							<div>
								<Image
									src="https://skillicons.dev/icons?i=bootstrap"
									height={imageSize}
									width={imageSize}
									alt="bootstrap"
								/>
								<h1 className="text-md font-bold">Bootstrap</h1>
							</div>
							<div>
								<Image
									src="https://skillicons.dev/icons?i=nodejs"
									height={imageSize}
									width={imageSize}
									alt="nodejs"
								/>
								<h1 className="text-md font-bold">Node Js</h1>
							</div>
							<div>
								<Image
									src="https://skillicons.dev/icons?i=firebase"
									height={imageSize}
									width={imageSize}
									alt="firebase"
								/>
								<h1 className="text-md font-bold">Firebase</h1>
							</div>
							<div>
								<Image
									src="https://skillicons.dev/icons?i=redux"
									height={imageSize}
									width={imageSize}
									alt="redux"
								/>
								<h1 className="text-md font-bold">redux</h1>
							</div>
						</div>
					</div>
					<div className="lg:mt-8 grid grid-cols-2 lg:gap-32 gap-12 text-center lg:text-3xl md:text-xl font-bold text-black">
						<div className="bg-misty-Moss/50 rounded lg:py-8 transition delay-150 hover:scale-110">
							<h1 className="lg:mb-8 md:mb-2">I also know</h1>
							<div className="grid md:grid-cols-3 md:grid-rows-2 md:gap-4 grid-cols-2 text-white lg:text-lg text-sm">
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=javascript"}
										height={imageSize}
										width={imageSize}
										alt="javascript"
									/>
									<h1 className="font-bold">Javascript</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=python"}
										height={imageSize}
										width={imageSize}
										alt="python"
									/>
									<h1 className="font-bold">Python</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=c"}
										height={imageSize}
										width={imageSize}
										alt="C"
									/>
									<h1 className="font-bold">C</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=git"}
										height={imageSize}
										width={imageSize}
										alt="git"
									/>
									<h1 className="font-bold">Git</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=html"}
										height={imageSize}
										width={imageSize}
										alt="html"
									/>
									<h1 className="font-bold">HTML</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=css"}
										height={imageSize}
										width={imageSize}
										alt="css"
									/>
									<h1 className="font-bold">CSS</h1>
								</div>
							</div>
						</div>
						<div className="bg-misty-Moss/50 lg:text-3xl md:text-md font-bold text-black rounded lg:py-8 transition delay-150 hover:scale-110">
							<h1 className="lg:mb-8 md:mb-2">Currently Learning</h1>
							<div className="grid md:grid-cols-5 md:grid-rows-1 grid-cols-2 text-sm font-bold text-white">
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=flutter"}
										height={imageSize}
										width={imageSize}
										alt="flutter"
									/>
									<h1 className="font-bold">Flutter</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=next"}
										height={imageSize}
										width={imageSize}
										alt="next"
									/>
									<h1 className="font-bold">Next JS</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=express"}
										height={imageSize}
										width={imageSize}
										alt="express"
									/>
									<h1 className="font-bold">express</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=dart"}
										height={imageSize}
										width={imageSize}
										alt="dart"
									/>
									<h1 className="font-bold">Dart</h1>
								</div>
								<div>
									<Image
										className="transition delay-150 hover:scale-110"
										src={"https://skillicons.dev/icons?i=tailwind"}
										height={imageSize}
										width={imageSize}
										alt="tailwind"
									/>
									<h1 className="font-bold">Tailwind</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* ABOUT SECTION */}
			<div id="about" className="h-screen bg-old-Mauve lg:px-32 lg:py-12 p-8">
				<h1 className="text-center md:text-4xl text-xl font-extrabold text-white mb-4">
					About Me
				</h1>
				<div className="grid md:grid-cols-2 grid-cols-2">
					<div className="grid md:grid-cols-2">
						<div className="rounded-full text-center">
							<Image
								className="rounded-full transition delay-150 hover:scale-110"
								src={me}
								width={"170px"}
								height={"170px"}
								alt="myPicture"
							/>
						</div>
						<div className="text-center">
							<Image
								className="transition delay-150 hover:scale-110"
								src={csu}
								width={"170px"}
								height={"170px"}
								alt="myPicture"
							/>
						</div>
					</div>
					<p className="text-white md:text-xl font-bold">
						I am currently studying Bachelor of Science in Computer Science at Caraga
						State University, under the College of Information and Computing Sciences.
						Making Web Apps is one of my passions, because you can create beautiful
						things out of it
					</p>
				</div>
				<div className="grid grid-cols-3 lg:mt-8 mt-4">
					<Image
						src={code_review}
						className="transition delay-150 hover:scale-110 rounded"
						layout="responsive"
						alt="code_review"
					/>
					<Image
						src={static_assets}
						className="transition delay-150 hover:scale-110 rounded"
						layout="responsive"
						alt="static_assets"
					/>
					<Image
						src={responsive}
						className="transition delay-150 hover:scale-110 rounded"
						layout="responsive"
						alt="responsive"
					/>
				</div>
			</div>
			{/* My Project */}
			<div id="project" className="h-screen px-32 md:py-12 py-3">
				<div className="drop-shadow-2xl bg-darker-white lg:p-14 md:p-2 ">
					<h1 className="text-center font-bold text-4xl text-old-Mauve">
						My Personal Project
					</h1>
					<div className="grid grid-flow-row lg:grid-cols-3 gap-2 md:gap-4 mt-8 place-content-center">
						<Image
							src={todolistapp}
							className="transition delay-150 hover:scale-110"
							width="350px"
							height="250px"
							alt="todolist"
						/>
						<div className="text-center">
							<Link href="https://ite18-finalproject.vercel.app/">
								<a
									className="text-2xl font-bold text-old-Mauve underline underline-offset-8"
									target={"_blank"}
									rel="noopener noreferrer"
								>
									To-Do List App
								</a>
							</Link>
							<p className="text-2xl font-bold mt-16">
								A FULLSTACK to-do list web application with authentication. Deployed
								in Vercel{" "}
								<span className="align-middle">
									<Image
										src="https://skillicons.dev/icons?i=vercel"
										height={"30px"}
										width={"30px"}
										alt="vercel"
									/>
								</span>
							</p>
						</div>
						<div className="pt-4 grid grid-rows-2">
							<div className="grid grid-rows-1 grid-flow-col gap-1 md:gap-2 transition delay-150 hover:scale-110 text-center">
								<div>
									<Image
										src="https://skillicons.dev/icons?i=react"
										height={imageSize}
										width={imageSize}
										alt="react"
									/>
									<h1 className="text-xs font-bold text-old-Mauve">React Js</h1>
								</div>
								<div>
									<Image
										src="https://skillicons.dev/icons?i=bootstrap"
										height={imageSize}
										width={imageSize}
										alt="bootstrap"
									/>
									<h1 className="text-xs font-bold text-old-Mauve">Bootstrap</h1>
								</div>
								<div>
									<Image
										src="https://skillicons.dev/icons?i=nodejs"
										height={imageSize}
										width={imageSize}
										alt="nodejs"
									/>
									<h1 className="text-xs font-bold text-old-Mauve">Node Js</h1>
								</div>
								<div>
									<Image
										src="https://skillicons.dev/icons?i=firebase"
										height={imageSize}
										width={imageSize}
										alt="firebase"
									/>
									<h1 className="text-xs font-bold text-old-Mauve">Firebase</h1>
								</div>
								<div>
									<Image
										src="https://skillicons.dev/icons?i=redux"
										height={imageSize}
										width={imageSize}
										alt="redux"
									/>
									<h1 className="text-xs font-bold text-old-Mauve">redux</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
