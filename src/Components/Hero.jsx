import React from "react";
import "./Hero.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import img1 from "../Components/svg-1.svg";
import img2 from "../Components/svg-2.svg";
import img3 from "../Components/svg-4.svg";

const Hero = () => {
	return (
		<>
			<div className="home__hero-section darkBg">
				<div className="container heroContainer">
					<div className="row home__hero-row">
						
						<div className="col">
							<div className="home__hero-img-wrapper">
								<img src={img2} alt="hero" className="home__hero-img" />
							</div>
							<div className="home__hero-text-wrapper">
								<h2 className="heading">StockQuery is REAL</h2>
							</div>
						</div>
						<div className="col">
							<div className="home__hero-img-wrapper">
								<img src={img3} alt="hero" className="home__hero-img" />
							</div>
							<div className="home__hero-text-wrapper">
								<h2 className="heading">StockQuery is SAFE</h2>
							</div>
						</div>
						<div className="col">
							<div className="home__hero-img-wrapper">
								<img src={img1} alt="hero" className="home__hero-img" />
							</div>
							<div className="home__hero-text-wrapper">
								<h2 className="heading">StockQuery is FREE</h2>
							</div>
						</div>
					</div>
				</div>
				<Link to="/sign-up">
						<Button buttonSize="btn--wide" buttonColor="blue">
							Get Started
						</Button>
					</Link>
			</div>
		</>
	);
};

export default Hero;
