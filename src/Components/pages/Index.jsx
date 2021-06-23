import React from "react";
import "./Mainpage.css";
import CustomizedTables from "../table/Table";

const Index = () => {

	function createData(name, nifty, banknifty) {
		return { name, nifty, banknifty };
	  }
	  
	  const Indexrows = [
		createData('Underlying', 'Nifty', 'Banknifty'),  
		createData('Lot Size', 75, 40),
		createData('Capital Required Approx', 65000, 85000),
		createData('Risk', "High", 'High'),
	  ];

	  const Indexhead = {"name":"Name", "col1":"NIFTY Futures", "col2":"BANKNIFTY Futures"}

	return (
		<div className="index">
			<div className="mainPage_container container">
				<div className="mainPage__heading">
					<h1>Index Watch</h1>
				</div>
				<div className="mainPage__content">
					<div className="mainPage__bold">
						Nifty (NSE) and Sensex (BSE) are the two major indices of Indian
						Share market. Future and option are the two products through which
						we can trade Nifty and Banknifty. We can take position intraday as
						well as swing or positional.
					</div>
					<div className="mainPage__def">
						<strong>
							<span>Nifty Futures</span>
						</strong>{" "}
						Nifty Index is the most popular index in the Indian stock market. It
						consists of 51 most liquid and top capitalized stocks listed in
						National Stock Exchange (NSE). Nifty Futures is derived from Nifty
						index which trades parallelly either on premium or discount. We at
						stockquery do nifty technical analysis and present our nifty view.
						Once you recognized the nifty trend you can take positions in nifty
						call put or in futures. Nifty options is very useful instrument for
						those who are new to the stock market and compared to less risk
						averse.
					</div>
					<div className="mainPage__def">
						<p>
							<strong>
								<span>Banknifty Future</span>
							</strong>{" "}
							Bank Nifty Index is the second most popular index in the Indian
							stock market. It consists of 12 most liquid and top capitalized
							Bank stocks listed in National Stock Exchange (NSE). Banknifty
							Futures is derived from Bank Nifty index which trades parallelly
							either on premium or discount. On this page you can find out
							Banknifty view. Once you recognized the banknifty trend you can
							take positions in banknifty call put or in futures. Banknifty
							options trade in weekly as well as monthly.
						</p>
					</div>
				</div>

				<CustomizedTables row={Indexrows} head={Indexhead} />
				<div className="mainPage__heading">
					<h1>Index Watch Swing Trades</h1>
				</div>
				<div className="excelsheet">
					<iframe
						key="xlsx"
						title="xlsx file"
						height="500px"
						width="100%"
						src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR_yTxofVH0j8WghAnghxl6xEgGT_jndFMXxbEYSr4S6gSNDXJxHdFAPub02lQmieyBIxoQr0xE0uZR/pubhtml?gid=0&single=true&widget=true&headers=false"
					/>
				</div>
			</div>
		</div>
	);
};

export default Index;
