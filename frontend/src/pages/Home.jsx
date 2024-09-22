import Header from "../components/Header";
import Nav from "../components/Nav";
import Landing from "./Landing";

const Home = () => {
	return (
		<>
			<Header />
			<Nav />
			<section className="min-h-screen">
				<Landing />
				<div className="bg-[#edebe4] px-12 py-16 flex flex-wrap ">
					<img src="/images/item1.png" alt="item1" />
					<img src="/images/item2.png" alt="item2" />
					<img src="/images/item3.png" alt="item3" />
					<img src="/images/item4.png" alt="item4" />
					<img src="/images/item5.png" alt="item5" />
				</div>
			</section>
		</>
	);
};

export default Home;
