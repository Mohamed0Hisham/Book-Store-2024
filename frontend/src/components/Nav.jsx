import { Link } from "react-router-dom";
const Nav = () => {
	return (
		<nav className="flex p-4 justify-around border-b">
			<span >
				<img
                className="object-cover w-fit h-6"
                src="/images/main-logo.png" alt="main logo" />
			</span>
			<ul className="flex gap-x-6">
				<li>
					<Link to={'/'}>Home</Link>
				</li>
				<li>
					<Link to={'/popular'}>Popular</Link>
				</li>
				<li>
					<Link to={'/articles'}>Articles</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
