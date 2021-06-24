import React from 'react';
import { Button } from '../Buttons/Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <Fade bottom>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>FREE</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                  <li>Email Subscription</li>
                  <li>Facebook Updates</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>₹3000</h4>
                <p>per month</p>
                <ul className='pricing__container-features'>
                <li>Email Subscription</li>
                  <li>Facebook Updates</li>
                  <li>Telegram Alerts</li>
                  <li>Personal Training</li>
                  <li>Dedicated Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>₹6000</h4>
                <p>quaterly</p>
                <ul className='pricing__container-features'>
                <li>Email Subscription</li>
                  <li>Facebook Updates</li>
                  <li>Telegram Alerts</li>
                  <li>Personal Training</li>
                  <li>Dedicated Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
          </Fade>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;