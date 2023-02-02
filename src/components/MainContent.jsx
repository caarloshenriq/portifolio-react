import '../styles/components/maincontent.sass'

// projetos
import AboutContainer from './AboutContainer'
import Projetos from './Projetos'
import Tecnologias from './Tecnologias'

const MainContent = () => {
  return (
    <main id='maincontents'>
      <AboutContainer />
      <Tecnologias />
      <Projetos />
    </main>
  )
}

export default MainContent