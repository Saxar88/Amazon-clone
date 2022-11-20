import React from "react";
import "./Home.css";
import Product from "../components/Product";

function Home() {
	return (
		<div className="home">
			<div className="home--container">
				<img className="home--image" src="images/home.jpg" alt="home banner" />
				<div className="home--row">
					<Product
						id={12780}
						image="images/12780.jpg"
						title="Rösle 26cm Potato Masher"
						rating={5}
						price={20.51}
					/>
					<Product
						id={1786644800}
						image="images/1786644800.jpg"
						title="The Pre-Raphaelites (The World's Greatest Art)"
						author="by Michael Robinson"
						rating={5}
						price={18.53}
						coverType="Paperback"
					/>
				</div>
				<div className="home--row">
					<Product
						id={85871}
						image="images/B085G8MM71.jpg"
						title="CQR Men's Long-sleeved Flannel Comfortable Button-up Cotton Shirt"
						rating={4}
						price={38.98}
					/>
					<Product
						id={1797209698}
						image="images/1797209698.jpg"
						title="Russian Tales: Traditional Stories of Quests and Enchantments"
						author="by Dinara Mirtalipova"
						rating={5}
						price={19.29}
						coverType="Hardcover"
					/>
					<Product
						id={11037}
						image="images/ABS11037.jpg"
						title="Panier des Sens Hand Cream for Very Dry Hands Geranium with Olive Oil - Moisturising Cream - Natural Cosmetics Made in France - 75 ml"
						rating={4}
						price={16.98}
					/>
				</div>
				<div className="home--row">
					<Product
						id={4013288188403}
						image="images/4013288188403.jpg"
						title="Wera 05073593001 950 SPKL/9 SM N Multicolour Allen Key Set"
						rating={5}
						price={25.99}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
