import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.png";
import Menu from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="flex mx-auto justify-between bg-old-Mauve py-2 px-5 mb-10 top-0">
			<Link href={"/"}>
				<a>
					<Image
						src={Logo}
						className="cursor-pointer"
						height="50"
						width="50"
						alt="Logo"
					/>
				</a>
			</Link>
			<div className="text-end md:flex hidden">
				<Link href={"#intro"}>
					<div className="text-white text-2xl cursor-pointer md:ml-4 hover:text-maize-Crayola hover:underline">
						intro
					</div>
				</Link>
				<Link href="#about">
					<div className="text-white text-2xl cursor-pointer md:ml-4 hover:text-maize-Crayola hover:underline">
						about
					</div>
				</Link>
				<Link href="#project">
					<div className="text-white text-2xl cursor-pointer md:ml-4 hover:text-maize-Crayola hover:underline">
						project
					</div>
				</Link>
				<Link href="#contact">
					<div className="text-white text-2xl cursor-pointer md:ml-4 hover:text-maize-Crayola hover:underline">
						contact
					</div>
				</Link>
			</div>
			<div className=" md:hidden text-end">
				<Menu
					className="md:hidden text-white cursor-pointer hover:text-maize-Crayola"
					fontSize="large"
					onClick={() => setShowMenu(!showMenu)}
				/>
				<div className="text-end">
					{showMenu ? (
						<div className="text-end md:flex">
							<Link href={"#intro"}>
								<div className="text-white text-2xl cursor-pointer md:ml-4 hover:text-maize-Crayola hover:underline">
									intro
								</div>
							</Link>
							<Link href="#about">
								<div className="text-white text-2xl cursor-pointer md:ml-4 hover:text-maize-Crayola hover:underline">
									about
								</div>
							</Link>
							<Link href="#project">
								<div className="text-white text-2xl cursor-pointer md:ml-4 hover:text-maize-Crayola hover:underline">
									project
								</div>
							</Link>
							<Link href="#contact">
								<div className="text-white text-2xl cursor-pointer md:ml-4 hover:text-maize-Crayola hover:underline">
									contact
								</div>
							</Link>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
