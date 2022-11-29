import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Home.css'
import Card from './Card';

function Home() {
  return (
    <div className='home'>
      <div className="homeDesc">
        <div className="desctop">
            <div className="desctop1">
              <span>Home</span>
              <KeyboardArrowRightIcon style={{width:'1.6rem' ,height:'2.7rem' }}/>
            </div>
            <div className="desctop2">
              <span>Footwear</span>
              <KeyboardArrowRightIcon/>
            </div>
            <div className="desctop3">
              <span>Men's Footwe...</span>
            </div>
          
        </div>
        <div className="homeDescDiv2">
          <div className="para">
            <p>If you are looking for stylish <b>men's <a href="/">shoes</a></b> online, then you are bound to be spoiled for choice. The numerous trendy types 
            and footwear concepts available can make every outing comfortable and fun. You can choose from the many themes available like monsoon
             footwear, adjustable <a href='/'>sneakers</a> ,monotone slides, party companion mules, segmented sole trainers, etc. Browse through
              the plethora of colour options in footwear and select a pair for every occasion from formal, party, sports, casual, beachwear, or 
              festive wear. You can choose the footwear based on the varying materials used to make them like canvas, rexine, mesh, synthetic 
              leather, rubber, fabric, etc. This footwear has varying closure options like multi-strap, velcro fastening, double strap, a buckle 
              fastening, lace-up, slip-on, snap button, etc. The type of sole material may vary like TPR, EVA, PVC, Airmix, etc. There are 
              geometric prints, colour blocked, fisherman style, graphic prints, pop colour block, and striped, woven designs available in the 
              footwear range for men. Swipe through the best offers available in the various brands such as Puma, Adidas, Reebok, Woodland, Nike,
               etc. Choose the latest pair of men's shoes with the desired price and size option online. Order new footwear from the comfort of
                your home with a secure payment option for hassle-free doorstep delivery. Price List last updated on 06-Sep-22.</p>
          </div>
        </div>
        <h1 className='homeHeading'>Men's Footwear</h1>
        <span className='homeSpan'>(Showing 1 - 40 products of 12,474 products)</span>
        <div className="sortBy">
          <span className='sortspan'>Sort By</span>
          <div className="sortbycategory" style={{ borderBottom: '.2rem solid #2874f0', color: '#2874f0'}}>Popularity</div>
          <div className="sortbycategory">Price -- Low to High</div>
          <div className="sortbycategory">Price -- High to Low</div>
          <div className="sortbycategory">Newest First</div>
        </div>
      </div>
      <div className="products">
        <div className="onerow">
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
        </div>
        <div className="onerow">
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
        </div>
        <div className="onerow">
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
        </div>
        <div className="onerow">
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
        </div>
        <div className="onerow">
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
          <Card brandname='HOTSTYLE' producttype='Running Shoes For Men' mainprice='275' fullprice='499' disccount='44%' picsrc='https://rukminim1.flixcart.com/image/580/696/xif0q/shoe/p/s/r/10-fashion-star-black-165-beige-10-hotstyle-beige-black-original-imag4992vm7yfvfq-bb.jpeg?q=50'/>
        </div>
        <div className="nextPage">
          <div className="nextPageDiv">
            <span>Page 1 of 312</span>
            <div className="pageno">
              <span className='pagenospan1 pagenospan'>1</span>
              <span className='pagenospan'>2</span>
              <span className='pagenospan'>3</span>
              <span className='pagenospan'>4</span>
              <span className='pagenospan'>5</span>
              <span className='pagenospan'>6</span>
              <span className='pagenospan'>7</span>
              <span className='pagenospan'>8</span>
              <span className='pagenospan'>9</span>
              <span className='pagenospan'>10</span>
              <span className='nextspan'>NEXT</span>
            </div>
            <span className='freespan'></span>
          </div>
        </div>
        <div className="findfor">
          <span className='findforspan'>Did you find what you were looking for?</span>
          <div className="yesorno">
            <span className='yesornospan'>Yes</span>
            <span className='yesornospan'>No</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;