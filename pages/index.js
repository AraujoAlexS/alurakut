import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet  } from '../src/lib/AlurakutCommons.js'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(props){
  return (
    <Box >
      <img src={` https://github.com/${props.githubUser}.png`} style={{borderRadius: "4px"}}/>
    </Box>
  )
}

export default function Home() {

  const githubUser = 'juunegreiros' 
  const pessoasFavoritas = ['juunegreiros', 'peas', 'omariosouto', 'rafaballerini', 'marcobrunodev', 'AraujoAlexS'];

  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className='profileArea' style={{gridArea: 'profileArea'}}>
            <ProfileSideBar githubUser={githubUser}/>    
        </div>
        <div className='welcomeArea' style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className='title'>
              Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className='profileRelationsArea' style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((githubUser)=> {
                return (
                  <li>
                    <a href={`/users/${githubUser}`} key={githubUser}>
                      <img src={`https://github.com/${githubUser}.png`}/>
                      <span>{githubUser}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>)
}
