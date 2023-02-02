import Avatar from '../img/profile_picture.jpg'
import SocialNetwork from './SocialNetwork'
import ContatoInfo from './ContatoInfo'

import '../styles/components/sidebar.sass'


const SideBar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Carlos Hernrique" />
      <p className='title'>Desenvolvedor Front-end</p>
      <SocialNetwork />
      <ContatoInfo />
    </aside>
  )
}

export default SideBar