import CustomizedTables from "../table/Table";
import React from "react";
// import '../styles/style.scss';

const ShortTS = () => {
	function createData(name, nifty, banknifty) {
		return { name, nifty, banknifty };
	}

	const Shortrows = [
		createData("Underlying", "Stock", "Stock"),
		createData("Lot Size", 1, "As per exchange"),
		createData(
			"Capital Required Approx",
			"Cash price",
			"Use Margin Calculator"
		),
		createData("Risk", "Medium", "High"),
	];

	const Shorthead = { name: "Name", col1: "Cash", col2: "Stock Futures" };

	return (
		<div className="shortTS">
			<div className="mainPage_container container">
				<div className="mainPage__heading">
					<h1>Short Term Swing Trades</h1>
				</div>
				<div className="mainPage__content">
					<div className="mainPage__def">
						To find short-term opportunities in stock market, one have to keep
						close eyes on stocks getting very active in share price value and
						volumes. There are many indications to find opportunities for
						short-term. If you find any breakout in technical charts of any
						stock, then it could be the indication. Rapid change in market trend
						can also be the indication. Reform in policies of particular sector
						can also be indication. However, there are many reasons which
						influence the price of share. You need to understand, what change in
						nature of particular sector or stock would impact the share price
						and how much.
					</div>
					<div className="mainPage__bold">
						We at stockquery scan all the good quality stocks on daily basis and
						find out best intraday stocks through technical analysis. You can
						use it for intraday trading or short term positional trading. Use it
						for stock futures or options trading.
					</div>
				</div>

				<CustomizedTables row={Shortrows} head={Shorthead} />
				<div className="mainPage__heading">
					<h1>Short Term Swing Trades</h1>
				</div>
				<div className="excelsheet">
					<iframe
						key="xlsx"
						title="xlsx file"
						height="300px"
						width="100%"
						src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_yTxofVH0j8WghAnghxl6xEgGT_jndFMXxbEYSr4S6gSNDXJxHdFAPub02lQmieyBIxoQr0xE0uZR/pubhtml?gid=1946131614&single=true&widget=true&headers=false"
					/>
				</div>
			</div>
		</div>
	);
};

export default ShortTS;
