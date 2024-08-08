import { useState } from "react";
import MenuItem from "./MenuItem";

const menudata = ["all menu", "choclate", "cookie", "dinner"];
const menuitems = [
	{ name: "almond 1", info: "some info about", price: 1.1 },
	{ name: "almond 2", info: "some info about", price: 2.5 },
	{ name: "almond 3", info: "some info about", price: 5 },
	// { name: "almond 4", info: "some info about", price: 8.1 },
	// { name: "almond 5", info: "some info about", price: 3.1 },
];

function MenuPage() {
	const [selectedMenu, setSelectedMenu] = useState(0);
	const handleSelectedMenu = (index) => {
		setSelectedMenu(index);
	};

	return (
		<div className="menu-page">
			<div>
				<h1>POPULAR MENU HEALTH FOODS</h1>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
			</div>
			<div className="menubar">
				{menudata.map((menu, i) => (
					<span
						key={i}
						className={selectedMenu === i ? "selected-menu" : ""}
						onClick={() => handleSelectedMenu(i)}
					>
						{menu}
					</span>
				))}
			</div>
			<div className="menuitems">
				{menuitems.map((item, i) => (
					<MenuItem data={item} key={i} />
				))}
			</div>
		</div>
	);
}

export default MenuPage;
