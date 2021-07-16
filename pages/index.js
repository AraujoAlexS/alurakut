import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault  } from '../src/lib/AlurakutCommons.js'
import { ProfileRelationsBoxWrapper, ProfileRelationsBoxWrapperComponent } from '../src/components/ProfileRelations';

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
  const [seguidores, setSeguidores] = React.useState([]);  
  const [comunidades, setComunidades] = React.useState([]);
  React.useEffect(function(){
    fetch('https://api.github.com/users/peas/followers')
    .then(function (respostaDoServidor){
      if(respostaDoServidor.ok){
        return respostaDoServidor.json();
      }
      throw new Error('Aconteceu algo ' + respostaDoServidor.status);
    })
    .then(function (respostaCompleta){
      setSeguidores(respostaCompleta)
    })
    .catch(function (erro){
      console.log(erro);
    })

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '9a96436213b397459052a7140cfb04',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        { "query": `query {
            allCommunities {
              id
              title
              imageUrl
              creatorSlug
            }
          }`
        })
    })
    .then(res => res.json())
    .then((res) => {
      const comunidadesDato = res.data.allCommunities;
      setComunidades(comunidadesDato);
      console.log(comunidades)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  const githubUser = 'AraujoAlexS';
 

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
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
          <ProfileRelationsBoxWrapperComponent title='Comunidades' array={comunidades}/>
          <ProfileRelationsBoxWrapperComponent title='Amigos do Github' array={seguidores}/>
        </div>
      </MainGrid>
    </>)
}
