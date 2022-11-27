import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ReviewContent.css'

function ReviewContent() {
  return (
    <div className="footwearReview">
        <div className="footwearReview1">
            <div className="footwearReview1pic">
                <img src="https://rukminim1.flixcart.com/image/300/300/kubk70w0/sandal/t/6/r/6-efs-103-elitefeet-coffee-original-imag7h28vyy52vyx.jpeg?q=90" alt="chappal" />
            </div>
            <div className="footwearReview1content">
                <div className="footwearReview1content1">
                    <div className="footwearReview1contentdiv1">
                        ELITEFEET Menbrown Sandels
                    </div>
                    <div className="footwearReview1contentdiv2">
                        <div className="footwearReview1contentdiv2star">
                            <span>3.7</span>
                            <img src="http://simpleicon.com/wp-content/uploads/star-64x64.png" alt="star" />
                        </div>
                        <div className="footwearReview1contentdiv2span">239 Ratings & 24 reviews</div>
                    </div>
                    <div className="footwearReview1contentdiv3">
                        <div className="footwearReview1contentdiv3rupee">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Indian_Rupee_symbol.svg" alt="rupee" />
                            644
                        </div>
                        <div className="footwearReview1contentdiv3off">
                            57% off
                        </div>
                    </div>
                </div>
                <div className="footwearReview1content2">
                    <ul className='ul'>
                        <li className='li'>Color: Brown</li>
                        <li className='li'>Wear: Casual</li>
                        <li className='li'>Material:Synthetic Leather</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footwearReview2">
            <div className="footwearReview2div1">Most Helpful Review</div>
            <div className="footwearReview2div2">
                <div className="footwearReview2div21">
                    <div className="footwearReview1contentdiv2star">
                            <span>5</span>
                            <img src="http://simpleicon.com/wp-content/uploads/star-64x64.png" alt="star" />
                    </div>
                    <div className="footwearReview2div21p">
                        <p>Brilliant</p>
                    </div>
                </div>
                <div className="footwearReview2div22">
                    <div className='footwearReview2div22span'>So fantastic and nice product</div>
                </div>
                <div className="footwearReview2div23">
                    <p className='footwearReview2div23p1'>Flipkart Customer</p>
                    <CheckCircleIcon style={{width:'14px',height:'14px',marginRight:'4px'}}/>
                    <p className='footwearReview2div23p2'>Certified Buyer</p>
                    <p className='footwearReview2div23p3'>May, 2021</p>
                </div>
            </div>
        </div>
        <div className="footwearReview3">
        <div className="footwearReview2div1">Recent Review</div>
            <div className="footwearReview2div2">
                <div className="footwearReview2div21">
                    <div className="footwearReview1contentdiv2star">
                            <span>3</span>
                            <img src="http://simpleicon.com/wp-content/uploads/star-64x64.png" alt="star" />
                    </div>
                    <div className="footwearReview2div21p">
                        <p>Moderate</p>
                    </div>
                </div>
                <div className="footwearReview2div22">
                    <div className='footwearReview2div22span'>Perfect but the sole will make slip in water.</div>
                </div>
                <div className="footwearReview2div23">
                    <p className='footwearReview2div23p1'>Flipkart Customer</p>
                    <CheckCircleIcon style={{width:'14px',height:'14px',marginRight:'4px'}}/>
                    <p className='footwearReview2div23p2'>Certified Buyer</p>
                    <p className='footwearReview2div23p3'>May, 2021</p>
                </div>
            </div>
        </div>
      </div>
  )
}

export default ReviewContent