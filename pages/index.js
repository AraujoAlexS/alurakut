import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault  } from '../src/lib/AlurakutCommons.js'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(props){
  return (
    <Box >
      <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: "4px"}}/>
      <hr/>
      <a  className='boxLink'href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr/>
      <AlurakutProfileSidebarMenuDefault/>
    </Box>
  )
}

export default function Home() {
  
  const githubUser = 'juunegreiros' 
  const pessoasFavoritas = ['juunegreiros', 'peas', 'omariosouto', 'rafaballerini', 'marcobrunodev', 'AraujoAlexS'];
  const [comunidades, setComunidades] = React.useState([{
    date: new Date().toISOString(),
    title: "Eu odeio acordar cedo",
    image: "https://alurakut.vercel.app/capa-comunidade-01.jpg"
  }]);

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
          <Box>
            <h2 className='subTitle'>
              O que você deseja fazer
            </h2>
            <form onSubmit={function handleCriarComunidade(e){
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              const comunidadeObj = {
                date: new Date().toISOString(),
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              const comunidadesAtualizadas = [...comunidades, comunidadeObj];
              setComunidades(comunidadesAtualizadas);
            }}>
              <div>
                <input 
                placeholder='Qual vai ser o nome da sua comunidade?' 
                name='tilte' 
                area-label="Qual vai ser o nome da sua comunidade?"
                type='text'
                />
              </div>
              <div>
                <input 
                placeholder='Coloque uma URL para usarmos de capa' 
                name='image' 
                area-label="Coloque uma URL para usarmos de capa"/>
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
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
          <ProfileRelationsBoxWrapper>
            <ul>
              {comunidades.map((comunidade)=> {
                return (
                  <li key={comunidade.date}>
                    <a href={`/users/${comunidade.title}`} >
                      <img src={comunidade.image}/>
                      <span>{comunidade.title}</span>
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
