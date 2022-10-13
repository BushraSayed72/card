import React from 'react';
import desktop from '../images/desktop.jpg';
import { TiShoppingCart } from 'react-icons/ti';

  
 const Card = () =>  {
  return (
    <div className='main-div'>
    <div className='container'>
    <div className='left-side'>
     <img src={desktop} alt="desktop-img"/>
    </div>
    <div className='right-side'>
    <p className='font-top'> P e r f u m e </p>
    <span className='span-one'><strong>Gabrielle<br/>Essence Eau<br/>De Parfum</strong></span>
    <p> A floral,solar and voluptuous<br/>interpretation composed by <br/> Olivier Ploge,Perfume-Creator
    <br/> for the House of CHANEL.</p>
    <div className='bottom'>
    <span className='span-two'><strong>$149.99</strong></span>  <div className='dolor'><del>$169.99</del></div>
    </div>
    <button><TiShoppingCart/> Add To Cart</button>
    
     
    </div>
      </div>
    </div>
  )
}

export default Card

