import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault  } from '../src/lib/AlurakutCommons.js'
import { ProfileRelationsBoxWrapper, ProfileRelationsBoxWrapperComponent } from '../src/components/ProfileRelations';

function ProfileSideBar(props){
  console.log(props)
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
  const pessoasFavoritas = [
    {
      id: 'juunegreiros',
      name: 'juunegreiros',
      image: 'https://github.com/juunegreiros.png'
    },
    {
      id: 'peas',
      name: 'peas',
      image: 'https://github.com/peas.png'
    },
    {
      id: 'omariosouto',
      name: 'omariosouto',
      image: 'https://github.com/omariosouto.png'
    },
    {
      id: 'rafaballerini',
      name: 'rafaballerini',
      image: 'https://github.com/rafaballerini.png'
    },
    {
      id: 'marcobrunodev',
      name: 'marcobrunodev',
      image: 'https://github.com/marcobrunodev.png'
    },
    {
      id: 'AraujoAlexS',
      name: 'AraujoAlexS',
      image: `https://github.com/AraujoAlexS.png`
    },
    {
      id: 'AraujoAlexS',
      name: 'AraujoAlexS',
      image: `https://github.com/AraujoAlexS.png`
    }];
  const [comunidades, setComunidades] = React.useState([{
    id: new Date().toISOString(),
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
                id: new Date().toISOString(),
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
          <ProfileRelationsBoxWrapperComponent array={comunidades}/>
          <ProfileRelationsBoxWrapperComponent array={pessoasFavoritas}/>
        </div>
      </MainGrid>
    </>)
}
