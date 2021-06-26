import React from "react";
// import '../styles/style.scss';
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
	return (
		<div>
			<div className="contactContainer container">
				<div className="mainPage__heading">
					<h1>Get in touch</h1>
				</div>
				<div
					style={{ width: "100%" }}
					className="mainPage__content contact__content"
				>
					<div style={{ paddingBottom: "10px" }} className="mainPage__bold">
						<span>Zerodha Sales Office</span>
					</div>
					<div className="mainPage__def">
						<strong>Registered & Corporate Office:</strong> <br></br>
						Unit No – 229, 1st Floor,<br></br>
						Raghuleela Mall, Behind Poisar Depot,<br></br>
						Kandivali – West, Mumbai – 400 067<br></br>
						Maharashtra, India
					</div>
					<div className="mainPage__def">
						<a href="tel:+91-7718852020">
							<FaPhone /> +91-7718852020
						</a>
						<br></br>
						<a href="mailto:info@smacapital.in">
							<FaEnvelope /> info@smacapital.in
						</a>
					</div>
					<iframe
						title="map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5727553183906!2d72.84795151458684!3d19.213854452618413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6d66bdd835b%3A0x1ba46d906dbd378d!2sZerodha%20Sales%20Office!5e0!3m2!1sen!2sin!4v1624682223675!5m2!1sen!2sin"
						width="100%"
						height="500px"
						allowfullscreen=""
						loading="lazy"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Contact;
