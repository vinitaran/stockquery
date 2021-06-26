import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/svg-1.svg";
import img2 from "../images/svg-2.svg";
import img3 from "../images/svg-4.svg";
import { TickerTape, Screener } from "react-tradingview-embed";
import Card from "../Cards/Card";
import Fade from 'react-reveal/Fade';

const Hero = () => {
	return (
		<>
			<TickerTape
				widgetProps={{
					colorTheme: "light",
					symbols: [
						{
							proName: "RELIANCE",
							title: "RELIANCE INDUSTRIES",
						},
						{
							proName: "HDFCBANK",
							title: "HDFC BANK",
						},
						{
							proName: "TCS",
							title: "TATA CONSULTANCY S",
						},
						{
							proName: "NYSE:INFY",
							title: "INFOSYS LTD",
						},
						{
							proName: "ICICIBANK",
							title: "ICICI BANK",
						},
						{
							proName: "WIPRO",
							title: "WIPRO LTD",
						},
					],
				}}
			/>
			<div className="home__hero-section darkBg">
				<div className="container heroContainer">
					<div className="row home__hero-row">
						<div className="col">
							<div className="home__hero-img-wrapper">
								<Fade left >
									<img src={img2} alt="hero" className="home__hero-img" />
								</Fade>

							</div>
							<div className="home__hero-text-wrapper">
								<h2 className="heading">StockQuery is REAL</h2>
							</div>
						</div>
						<div className="col">
							<div className="home__hero-img-wrapper">
								<Fade top >
									<img src={img3} alt="hero" className="home__hero-img" />
								</Fade>

							</div>
							<div className="home__hero-text-wrapper">
								<h2 className="heading">StockQuery is SAFE</h2>
							</div>
						</div>
						<div className="col">
							<div className="home__hero-img-wrapper">
								<Fade right>
									<img src={img1} alt="hero" className="home__hero-img" />
								</Fade>

							</div>
							<div className="home__hero-text-wrapper">
								<h2 className="heading">StockQuery is FREE</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="homePage__buttons">
						<button class="custom-btn btn-16"><span><Link to="/sign-up">Get Started</Link></span></button>
						<button class="custom-btn btn-16"><span><Link to="/contact">Contact us</Link></span></button>
					</div>
				</div>
				{/* <button class="button  arrow">Read more</button>
				<br />
				<br />
				<button class="button  email">me@email.com</button>
				<br />
				<br />
				<button class="button  phone">tel: 1234 567 890</button> */}
			</div>
			<div className="container">
				<div className="hero__heading">
					<h2>Welcome to StockQuery!</h2>
				</div>
				<div className="hero__content">
					<div className="hero__content__top">
						<p>
							Welcome to StockQuery The only Free website which gives you
							complete insight of Indian Stock Market. Here you can track
							movement of BSE NSE Stocks, Index, Mutual Fund, ETF, Long Term
							Investment and Short Term investment.
						</p>

					</div>
					<div className="hero__content__bottom">
						<p>
							<b>
								There are many share market tips provider in India charging
								8000 to 15000 per month. But this site is absolutely free to
								use. Learn and make money out of it.
							</b>{" "}
						</p>
					</div>
				</div>
				<h2>Live Market</h2>
				<Fade left>
				<Screener
					widgetProps={{
						colorTheme: "light",
						market: "india",
						defaultScreen: "most_capitalized",
						width: "100%",
					}}
				/>
				</Fade>
				<Card />
			</div>
		</>
	);
};

export default Hero;
