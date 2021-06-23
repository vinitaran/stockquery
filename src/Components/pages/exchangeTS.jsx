import React from "react";
import "./Mainpage.css";
import CustomizedTables from "../table/Table";

const exchangeTS = () => {
	function createData(name, nifty, banknifty) {
		return { name, nifty, banknifty };
	}

	const Indexrows = [
		createData("Underlying", "Nifty", "Banknifty"),
		createData("Lot Size", "01", "01"),
		createData("Capital Required Approx", "As per index", "As per index"),
		createData("Risk", "Very Low", "Very Low"),
	];

	const Indexhead = { name: "Name", col1: "NIFTYBEES", col2: "BANKBEES" };

	return (
		<div className="index">
			<div className="mainPage_container container">
				<div className="mainPage__heading">
					<h1>Exchange Traded Funds</h1>
				</div>
				<div className="mainPage__content">
					<div style={{paddingBottom:"0px"}} className="mainPage__bold">
						<span>What is an ETF?</span>
					</div>
					<div className="mainPage__def">
						ETF meaning Exchange Traded Funds are just like a mutual fund which
						closely track an index, a commodity or a pool of assets. The ETFs
						trading value is based on the net asset value of the underlying
						index or commodity. You can buy or sell ETF just like any other
						stocks. NIFTYBEES and BANKBEES are the two majorly traded index
						fund.
					</div>
					<div className="mainPage__bold">
						Stockquery provides you the best of the short term and long term
						investment.
					</div>
				</div>

				<CustomizedTables row={Indexrows} head={Indexhead} />
				<div className="mainPage__heading">
					<h1>Exchange Traded Funds Trades</h1>
				</div>
				<div className="excelsheet">
					<iframe
						key="xlsx"
						title="xlsx file"
						height="500px"
						width="100%"
						src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_yTxofVH0j8WghAnghxl6xEgGT_jndFMXxbEYSr4S6gSNDXJxHdFAPub02lQmieyBIxoQr0xE0uZR/pubhtml?gid=1913445705&single=true&widget=true&headers=false"
					/>
				</div>
			</div>
		</div>
	);
};

export default exchangeTS;
