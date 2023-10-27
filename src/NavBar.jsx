import React from "react";
import './NavBar.css'
// import styles from "./NavBar.css";
function NavBar(){
  return(
    <>
    <div className={classplusLogoParent}>
          <img
            className={classplusLogoIcon}
            alt=""
            src="/classplus-logo1.svg"
          />
          <div className={shieldGreen1Parent}>
            <img
              className={shieldGreen1Icon}
              alt=""
              src="/shieldgreen-11.svg"
            />
            <div className={safeAndSecure}>Safe and Secure</div>
          </div>
        </div>
    </>
  )
}
export default NavBar;