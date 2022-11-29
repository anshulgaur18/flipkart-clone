import React from 'react';
import './Card.css';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Card({brandname,producttype,mainprice,fullprice,disccount,picsrc}) {
  return (
    <div className='card'>
        <div className="cardEle">
            <div className="cardpicSec">
                <div className="cardpic">
                    <div className="cardpic1">
                        <img src={picsrc} alt="joota" />
                    </div>
                </div>
                <div className="cardempty"></div>
                <div className="carddil">
                  <FavoriteIcon style={{color: 'lightgray',
    width: '2.8rem',
    height: '2.8rem'}}/> 
                </div>
            </div>
            <div className="cardDetail">
                <div className="brandname">{brandname}</div>
                <div className="flex1">
                <div className="productType">{producttype}</div>
                <div className="fAssuredimg">
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="fassured" />
                </div>
                </div>
                
                <div className="price">
                    <div className="mainprice"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Indian_Rupee_symbol.svg" alt="pese" />{mainprice}</div>
                    <div className="fullprice"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Indian_Rupee_symbol.svg" alt="pese" />{fullprice}</div>
                    <div className="discount">{disccount}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card