import React from 'react';
import './Footer.css'; // You will need to create a CSS file for styling

function Footer() {
  return (
    <footer className="footer" style={{height:'150px'}}>
     
      <div className="container1" style={{borderTop: "1px solid #E5E5E5 " }}>
      
        <div className="logo1" style={{marginTop:'40px'}}>
          <img src="./classplus-logo.svg" alt="Classplus Logo" width="158.29" height="36.74" />
        </div>
        <div className="made-in-india" style={{marginTop:'8px',color:'black',fontFamily:'OpenSauceRegular',fontWeight:'500',fontSize:'12px',lineHeight:'21px'}}>
          Made with ❤️ in India
        </div>
      </div>
    </footer>
  );
}

export default Footer;
