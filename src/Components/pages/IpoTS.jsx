import React from "react";
import "./Mainpage.css";
import { FaFilePdf } from "react-icons/fa";
// import { Link } from "react-router-dom";

const IpoTS = () => {
	return (
		<div className="index">
			<div className="mainPage_container container">
				<div className="mainPage__heading">
					<h1>Online IPO Application</h1>
				</div>
				<div className="mainPage__content">
					<div style={{ paddingBottom: "0px" }} className="mainPage__bold">
						<span>What is IPO?</span>
					</div>
					<div className="mainPage__def">
						IPO means Initial Public Offering. When any Private Ltd. Company
						first time offer their shares to Public for capital expansion is
						called IPO. In India investor can not buy IPO directly from broker.
						He has to apply through bank providing ASBA facility. Find out
						online application procedure for some of the banks.
					</div>
				</div>
				<div className="ipo__options">
					<a
						href="pdf/Online IPO application through HDFC Bank.pdf"
						target="_blank"
					>
						<FaFilePdf style={{ height: "2em", width: "2em", margin: "5px" }} />
						<h4>
							<b>HDFC Online IPO Application Process</b>
						</h4>
					</a>

					<a
						href="pdf/Online IPO application through ICICI Bank.pdf"
						target="_blank"
					>
						<FaFilePdf style={{ height: "2em", width: "2em", margin: "5px" }} />
						<h4>
							<b>ICICI Online IPO Application Process</b>
						</h4>
					</a>
				</div>
			</div>
		</div>
	);
};

export default IpoTS;
