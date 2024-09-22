import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiReceipt } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
const Header = () => {
	return (
		<header className="z-50 border-b px-4 py-2 flex justify-between items-center">
			<div className="flex gap-x-4">
				<FaFacebookF />
				<FaTwitter />
				<FaLinkedin />
			</div>
			<div className="flex gap-x-6 text-xl">
				<span className="flex items-center">
					<RiAccountCircleLine className="inline" />
					<h2>Account</h2>
				</span>
				<span className="flex items-center">
					<CiReceipt className="inline" />
					<h2>Cart: 0 $</h2>
				</span>
				<span className="flex items-center">
					<FaSearch className="inline" />
					<input
						type="search"
						name="search"
						id="search"
						className="hidden rounded-2xl bg-[#efeee8] px-4 py-1 outline-none text-sm"
					/>
				</span>
			</div>
		</header>
	);
};

export default Header;
