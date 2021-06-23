import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import graphImage from './images/graph.jpg';
import index from './images/index-watch.jpg';
import Fade from 'react-reveal/Fade';

function Card() {
  return (
    <div className='cards'>
      <h2>Our Services!</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <Fade top>
          <ul className='cards__items'>
            <CardItem
              src={index}
              text='Find out directional trades in Nifty and Banknifty Futures. Highly fluctuating. Requires continuous monitoring. Best for traders and speculators.'
              label='Index Watxh'
              path='/index-watch'
            />
            <CardItem
              src={graphImage}
              text='Get Best Intraday stocks and swing trades for day trading. Work daily 5-10 minutes. For Traders and Investors.'
              label='Short Term Swing Trades'
              path='/services'
            />
          </ul>
          </Fade>
          <Fade left>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1620266757065-5814239881fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
              text='Find out Best Investment stocks for long term. Complete peace of mind. Purely for Long term Investors'
              label='Long Term Positional Trades'
              path='/investing'
            />
            <CardItem
              src='https://images.indianexpress.com/2020/12/mutual-funds-edit-pixabay-1200.jpg'
              text='Invest in All types of direct mutual funds through Zerodha platform. Available all Major Fund Houses like ICICI, HDFC, Kotak, Birla Sun life, Axis, IDFC, SBI etc.'
              label='Mutual Fund'
              path='/mutual-fund'
            />
          </ul>
          </Fade>
          <Fade bottom>
          <ul className='cards__items'>
            <CardItem
              src='https://finmarie.com/wp-content/uploads/2020/02/What-ETF-Means-What-It-Is-What-It-Does-And-More-e1582822089129.jpg'
              text='Invest in ETF with our directional solution and outperform the index. Risk free. Always make money in longer run.'
              label='Exchange Traded Funds'
              path='/services'
            />
            <CardItem
              src='https://m.economictimes.com/thumb/msid-83599613,width-1272,height-825,resizemode-4,imgsize-283333/ipo.jpg'
              text='Find out How to apply for IPO online through various banks like ICICI Bank, HDFC Bank'
              label='Online IPO Application'
              path='/products'
            />
          </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Card;