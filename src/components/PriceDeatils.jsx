import React from 'react';
import './PriceDetails.css'
const PriceDetails = () => {
  return (
    <div
      style={{
        width: '450px',
        height: '548px',
        top: '144px',
        left: '300px',
        padding: '24px',
        borderRadius: '8px',
        gap: '22px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <h2 style={{color:'black', fontFamily: 'OpenSauceOneRegular', fontWeight:'700',fontSize:'18px',lineHeight:'18px'}}>Price Details</h2>
      <p style={{ borderBottom: '1px dashed #E5E5E5' , marginTop:'20px'}} ></p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "20px" }}>
        <div>
          <p style={{fontFamily: 'OpenSauceOneRegular',color:'#7A8B94'}}>Test Portal (CMS)</p>
          <p style={{fontFamily: 'OpenSauceOneRegular',color:'#7A8B94'}}>IOS (My Institute)</p>
          <p style={{fontFamily: 'OpenSauceOneRegular',color:'#7A8B94'}}>Payments & Inquiry</p>
          <p style={{fontFamily: 'OpenSauceOneRegular',color:'#7A8B94'}}>Marketing Suite</p>
        </div>
        <div>
          <p style={{fontFamily: 'OpenSauceOneRegular',color:'#7A8B94'}}>₹5,000</p>
          <p style={{fontFamily: 'OpenSauceOneRegular',color:'#7A8B94'}}>Free</p>
          <p style={{fontFamily: 'OpenSauceOneRegular',color:'#7A8B94'}}>₹3,000</p>
          <p style={{fontFamily: 'OpenSauceOneRegular',color:'#7A8B94'}}>₹10,000</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "20px" }}>
        <div >

          <p style={{ fontWeight: 'bolder',fontFamily: 'OpenSauceOneRegular',color:'#7A8B94' }}>Coupon Discount</p>

          {/* <p style={{fontWeight:'bolder',width:'700'}}>Total Amount</p> */}
        </div>
        <div>

          <p style={{ fontWeight: 'bolder', color: '#1EC86C' }}> -₹2,000</p>
          {/* <p style={{fontWeight:'bolder' }}>₹7,000</p> */}

        </div>
      </div>
      <p style={{ borderBottom: '1px dashed #E5E5E5'}} ></p>
      <div >

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: "20px" }}>
          <div>
            <p style={{fontFamily:'OpenSauceRegular', fontWeight: 'bolder', width: '700' ,fontWeight:'700',fontSize:'22px',lineHeight:'18px'}}>Total Amount</p>
          </div>
          <div>


            <p style={{ fontWeight: '700' , fontFamily:'OpenSauceRegular',fontSize:'22px',lineHeight:'24px' }}>₹7,000</p>

          </div>
        </div>
        <p style={{ borderBottom: '1px dashed #E5E5E5'}} ></p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{}}>
          <button style={{ width: '443px', height: '60px' ,fontFamily:'Sora',fontWeight:'600',fontSize:'24px',lineHeight:'36px'}}>Pay Now</button>
        </div>
        <div >
          <p style={{ textAlign: 'center', marginTop: '20px',fontFamily: 'OpenSauceOneRegular',color:'#7A8B94',fontSize:'18px',fontWeight:'700',lineHeight:'18px' }}>Link ends in 24h 02m 32s</p>
        </div>
      </div>

    </div>
  );
};

export default PriceDetails;
