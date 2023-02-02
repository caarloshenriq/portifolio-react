import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/contatoinfo.sass'

const ContatoInfo = () => {
  return (
    <section id='information-container'>
        <div className="info-card">
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(41) 99889-5210</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>E-mail</h3>
                <p>rickhenriquetab@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>Araucária, PR</p>
            </div>
        </div>
    </section>
  )
}

export default ContatoInfo