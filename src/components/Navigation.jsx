import styles from './Navigation.css'
const Navigation = () => {
    return (
        <div className='navbar'>
        <nav className='container'> 
            <div className="logo">
                <img src="./classplus-logo.svg" alt="" />
            </div>

            <div className={styles.shieldGreen1Parent} style={{display:"flex"}}>
               <div> <img
                    className={styles.shieldGreen1Icon}
                    alt=""
                    src="/shieldgreen-1.svg"
                /></div>
               
                <div className={styles.safeAndSecure} style={{marginLeft:"5px",marginTop:"3px" , fontFamily:'Roboto',fontWeight:'600', fontSize:'16px',lineHeight:'24px',color:'#1EC86C'}}>Safe and Secure</div>
            </div>
        </nav>
        </div>
    )
}
export default Navigation;