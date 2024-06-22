import './style.css';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <>
      <footer className="footer text-center bg-dark text-light py-4">
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div className="col-md-4 d-flex align-items-center justify-content-center">
              <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
                <img src={logo} alt="Logo" width="75" height="70" className="d-inline-block align-text-top" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="fs-5">Teléfono: <a href="https://wa.me/5523091732" className="text-light">+55 23 09 17 32</a></p>
              <p className="fs-5">Síguenos en:</p>
              <a href="https://www.facebook.com/profile.php?id=61561339612145" target="_blank" className="mx-2">
                <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/comercio_mxxm/" target="_blank" className="mx-2">
                <img src="https://img.icons8.com/fluent/24/000000/instagram-new.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
