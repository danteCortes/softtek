import LogoFooterMobile from '../assets/LogoFooterMobile.png';
import LogoFooterDesktop from '../assets/LogoFooterDesktop.png';

export function Footer(){
    return (
        <footer>
            <section id="footer">
                <img className='logo-footer-desktop' src={LogoFooterDesktop} alt="Logo Footer" />
                <img className='logo-footer-mobile' src={LogoFooterMobile} alt="Logo Footer" />
                <hr />
                <p>&copy; 2024 RIMAC Seguros y Reaseguros.</p>
            </section>
        </footer>
    )
}