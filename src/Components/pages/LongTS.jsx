import CustomizedTables from "../table/Table";
import React from "react";
import "./Mainpage.css";

const LongTS = () => {
	function createData(name, nifty, banknifty) {
		return { name, nifty, banknifty };
	}

	const Longrows = [
		createData("Underlying", "Stock"),
		createData("Lot Size", 1),
		createData(
			"Capital Required Approx",
			"Cash price"
		),
		createData("Risk", "Low"),
	];

	const Longhead = { name: "Name", col1: "Cash"};

	return (
		<div className="LongTS">
			<div className="mainPage_container container">
				<div className="mainPage__heading">
					<h1>Long Term Positional Trades</h1>
				</div>
				<div className="mainPage__content">
					<div className="mainPage__def">
                    Stock Market always be highly volatile by nature on Long term basis. To avoid these fluctuations one can invest for the longer term. It saves your brokerage and transaction cost. Provides tax advantage ( after 12 months ) on capital gain. Your investing become totally emotion free. Once you decided to become a long term investor catch up any good strategy ( which suits your risk profile ) and start investing.
					</div>
					<div className="mainPage__bold">
                    We at stockquery do extensive stock research to find out best stocks to buy. You can create wealth through smartinvestment.
					</div>
				</div>

				<CustomizedTables row={Longrows} head={Longhead} />
				<div className="mainPage__heading">
					<h1>Long Term Positional Trades</h1>
				</div>
				<div className="excelsheet">
					<iframe
						key="xlsx"
						title="xlsx file"
						height="500px"
						width="100%"
						src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_yTxofVH0j8WghAnghxl6xEgGT_jndFMXxbEYSr4S6gSNDXJxHdFAPub02lQmieyBIxoQr0xE0uZR/pubhtml?gid=1158687742&single=true&widget=true&headers=false"
					/>
				</div>
			</div>
		</div>
	);
};

export default LongTS;
