import { LocalPhone, Twitter, Facebook, LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
	return (
		<div
			id="contact"
			className="bg-maize-Crayola p-10 text-old-Mauve scroll-smooth grid grid-cols-2 bottom-0"
		>
			<h1 className="text-lg text-center mb-5 font-bold">
				Copyright &copy; {new Date().getFullYear()} Mark Jericho Manilag. All rights
				reserved
			</h1>
			<div className="text-center">
				<a className="cursor-pointer" href="https://github.com/jerichodon1998">
					<GitHub fontSize="large" />
				</a>
				<a className="cursor-pointer" href="https://twitter.com/jerichodon1998">
					<Twitter fontSize="large" />
				</a>
				<a
					className="cursor-pointer"
					href="https://www.facebook.com/markjericho.manilag.35"
				>
					<Facebook fontSize="large" />
				</a>
				<a
					className="cursor-pointer"
					href="https://www.linkedin.com/in/mark-jericho-manilag-089706206/"
				>
					<LinkedIn fontSize="large" />
				</a>
				<div>
					<LocalPhone fontSize="large" />
					+639708400
				</div>
			</div>
		</div>
	);
};

export default Footer;
