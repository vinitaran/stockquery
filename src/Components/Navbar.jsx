import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import { Button } from "../Components/Button";
import "./Navbar.css";
import Dropdown from './Dropdown';

const Navbar = () => {
const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const [dropdown, setDropdown] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
	if (window.innerWidth < 960) {
		setDropdown(false);
	} else {
		setDropdown(true);
	}
};

const onMouseLeave = () => {
	if (window.innerWidth < 960) {
		setDropdown(false);
	} else {
		setDropdown(false);
	}
};

return (
	<>
		<div className="navbar">
			<div className="navbar_container container">
				<Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
					<RiStockFill className="navbar_icon" />
					StockQuery
				</Link>
				<div className="menu_icon" onClick={handleClick}>
					{click ? <FaTimes onClick={closeMobileMenu} /> : <FaBars />}
				</div>
				<ul className={click ? "nav_menu active" : "nav_menu"}>
					<li className="nav_item">
						<NavLink exact to="/" className="nav_links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
							Home
						</NavLink>
					</li>
					<li className="nav_item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeMobileMenu}>
						<NavLink to="/p" className="nav_links" activeClassName="nav-links-active" >
							Product <FaAngleDown />
						</NavLink>
						{dropdown && <Dropdown />}
					</li>

					<li className="nav_item">
						<NavLink to="/plans" className="nav_links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
							Plan & Price
						</NavLink>
					</li>
					<li className="nav_item">
						<NavLink to="/blog" className="nav_links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
							Blog
						</NavLink>
					</li>
					<li className="nav_item">
						<NavLink to="/contact-us" className="nav_links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
							Contact Us
						</NavLink>
					</li>
					<li className="nav_btn">
						{button ? (
							<Link to="/sign-up" className="btn_links" onClick={closeMobileMenu}>
								<Button buttonStyle="btn--outline">SIGN UP</Button>
							</Link>
						) : (
							<Link to="/sign-up" className="btn_links" onClick={closeMobileMenu}>
								<Button buttonStyle="btn--outline" buttonSize="btn--mobile">
									SIGN UP
								</Button>
							</Link>
						)}
					</li>
				</ul>
			</div>
		</div>
	</>
);
};

export default Navbar;
