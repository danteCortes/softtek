import LogoHeader from '../assets/LogoHeader.png';
import PhoneIcon from '../assets/PhoneIcon.png';

export function Header(){
    return (
        <header>
            <img src={LogoHeader} alt="Logo Header" />
            <div className="phone-number">
                <p className='buy-notice'>¡Compra por este medio!</p>
                <img src={PhoneIcon} alt="Phone Icon" />
                <p className='phone-text'>(01) 411 6001</p>
            </div>
        </header>
    )
}