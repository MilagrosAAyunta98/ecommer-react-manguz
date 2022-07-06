import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                {/* Column1 */}
                <div className="col-xs-12 col-md-6 text-left">
                    <h2>Contacto</h2>
                        <h4 className="list-unstyled">
                            <li>Valparaiso 3586</li>
                            <li>Soldati, Capital Federal.</li>
                        </h4>
                </div>
                {/* Column2 */}
                <div className="contenedor-footer">
                    <h4>Seguinos</h4>
                        <div>
                            <InstagramIcon/>
                            <a href='https://bit.ly/3HFieAF'> @Manguz.ok </a>
                        </div>
                        <div>
                            <WhatsAppIcon/>
                            <a href='https://walink.co/21e054'>1123874041</a>
                        </div>
                        <div>
                            <FacebookIcon/>
                            <a href='https://bit.ly/3oEwvGh'> Manguz.ok </a>
                        </div>
                </div>
            {/* Column3 */}
                </div>
            <div className="row">
            <p className="col-sm">
                &copy;{new Date().getFullYear()} Milagros Ayunta | All rights reserved |
                Terms Of Service | Privacy
            </p>
            </div>
            </div>
        </div>
    );
    }


export default Footer;