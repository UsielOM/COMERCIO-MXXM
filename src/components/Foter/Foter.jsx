import './style.css'
import logo from '../../assets/logo.png';
function Foter () {
  return (
    <>
        <footer className="footer text-center">

<div className="col-md-4 d-flex align-items-center">
    <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
    </a>
    <span className="mb-3 mb-md-0 "><img src={logo} alt="Logo" width="75" height="70" className="d-inline-block align-text-top"/></span>
</div>
<div className="container">
    <p>Teléfono: <a href="https://wa.me/5523091732">+55 23 09 17 32</a></p>
    <p>Síguenos en:</p>
    <a href="https://www.facebook.com/profile.php?id=61561339612145" target="_blank" className="mx-2">
        <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png" alt="Facebook"></img>
    </a>
    <a href="https://www.instagram.com/comercio_mxxm/" target="_blank" className="mx-2">
        <img src="https://img.icons8.com/fluent/24/000000/instagram-new.png" alt="Instagram"></img>
    </a>
</div>
</footer>
    </>
  )
}

export default Foter;