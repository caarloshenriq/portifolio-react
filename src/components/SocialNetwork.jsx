import '../styles/components/socialnetwork.sass'

// importando icones
import { FaLinkedin, FaGithub} from 'react-icons/fa'

const socialnetwork = [
    {name : 'LinkedIn', icon: <FaLinkedin /> , link: 'https://www.linkedin.com/in/carlos-henrique-dos-santos-b69820230/'},
    {name : 'github', icon: <FaGithub />, link: 'https://github.com/caarloshenriq'},
]


const SocialNetwork = () => {
  return (<section id='social-networks'>
    {socialnetwork.map((network) => (
        <a href={network.link} className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>)
}

export default SocialNetwork