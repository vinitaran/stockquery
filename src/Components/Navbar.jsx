import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiStockFill } from "react-icons/ri";
import {Button} from "../Components/Button";
import "./Navbar.css";

const Navbar = () => {
	const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

	const handleClick = () => {
		setClick(!click);
	};

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener("resize", showButton);

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
						<li className="nav_item">
							<NavLink to="/product" className="nav_links" activeClassName="nav-links-active" onClick={closeMobileMenu}>
								Product
							</NavLink>
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
