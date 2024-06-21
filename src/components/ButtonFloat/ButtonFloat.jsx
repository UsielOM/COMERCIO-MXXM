import './style.css'
import logoWhats from '../../assets/logoWhats.png';

function ButtonFloat() {
  return (
    <>
    <a href="https://wa.me/5523091732">
    <img src={logoWhats}   className="whatsapp-btn" target="_blank" alt='whatsapp'/>
    </a>
    </>
  )
}

export default ButtonFloat;