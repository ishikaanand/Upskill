// import Box from'./Box';
import { colors } from '@mui/material';
import PriceDetails from './PriceDeatils';

const Details = () => {
    return (
        <div className='app-container'>
            <main className="hero container">
                <div style={{ marginTop: '95px' }}>
                    <h1 style={{ fontFamily: 'OpenSauceOneRegular', fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>Classplus app subscription payment page</h1>
                    <p style={{ fontFamily: 'OpenSauceOneRegular', fontWeight: '400', fontSize: '16px', lineHeight: '28px' }}>Customer can pay the initial subscription amount after<br></br>
                        discussion with their business development manager. The<br></br>
                        amount should be exactly same which was committed during<br></br>
                        your conversations.</p>
                    <h1 style={{ fontFamily: 'OpenSauceOneRegular', fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>Package Choosen</h1>
                    <p style={{ fontFamily: 'OpenSauceOneRegular', fontWeight: '400', fontSize: '16px', lineHeight: '28px' }}>Starter</p>
                    <h1 style={{ fontFamily: 'OpenSauceOneRegular', fontWeight: '700', fontSize: '18px', lineHeight: '24px' }}>Add Ons</h1>
                    <p style={{ fontFamily: 'OpenSauceOneRegular', fontWeight: '400', fontSize: '16px', lineHeight: '28px' }}>Test Portal</p>
                </div>

                <div >
                    <PriceDetails />
                </div>


            </main>
            <div style={{ marginLeft: '270px', fontFamily: 'OpenSauceOneRegular', fontWeight: '400', fontSize: '16px', lineHeight: '28px' }}>
                <input type="checkbox" id="agreeToTerms" name="agreeToTerms" style={{ marginRight: '10px', color: 'black' }} />
                <label htmlFor="agreeToTerms" style={{ color: 'black' }}>I agree to the terms and conditions</label>

            </div>
        </div>
    )
}
export default Details;