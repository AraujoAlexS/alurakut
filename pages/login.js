import React from 'react';
import { useRouter } from 'next/router';

export default function LoginPage(){
    const router = useRouter();
    return(
        <main style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <div className='loginScreen'>
                <section className='logoArea'>
                    <img src='https://alurakut.vercel.app/logo.svg'/>
                    <p><strong>Conecte-se</strong> aos seus familiares usadno recados e mensagens instantâneas</p>
                    <p><strong>Conheça</strong> novas pessoas através de amigos de seus amigos e comunidades</p>
                    <p><strong>Compartilhe</strong> seus vídeos, fotos  paixões em um só lugar</p>
                </section>
                <section className='formArea'>
                    <form className='box'
                        onSubmit={ (event) => {
                            event.preventDefault();
                            router.push('/');
                        }}>
                        <p>Acesse agora mesmo com seu usuário do <strong>Github</strong></p>
                        <input placeholder='Usuário' type="text" />
                        <button type='submit'>Login</button>
                    </form>
                    <footer className='box'>
                        <p>
                            Ainda não é membro? <br/>
                            <a href='/login'>
                                <strong>
                                    Entre-já
                                </strong>
                            </a>
                        </p>
                    </footer>
                </section>
                <footer className='footerArea'>
                    <p>
                        0 2021 alura.com.br 
                        <a href=''> Sobre o Orkut /</a> 
                        <a href=''> Centro de Segurança /</a> 
                        <a href=''> Privacidade /</a> <a href=''> Contato</a> 
                    </p>
                </footer>
            </div>

        </main>
    )
}