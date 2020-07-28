import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel'
import BannerMain from './components/BannerMain'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Menu />

      <BannerMain videoTitle='Editor de Código sensacional para Programador Frontend, Backend ou Full Stack'
        videoDescription='Um Editor de Código que vai ser perfeito para programar os tutoriais aqui do canal e que consiga comportar ao mesmo tempo um backend (com servidor web rodando), frontend, banco de dados e qualquer outra dependência que forme um ambiente fullstack, inclusive com integração direta ao Github com review de código e live coding!'
        url='https://www.youtube.com/watch?v=Q7YfzbJRzm0'/>

      <Carousel category={dadosIniciais.categorias[0]} />
      <Carousel category={dadosIniciais.categorias[1]} />
      <Carousel category={dadosIniciais.categorias[2]} />
      <Carousel category={dadosIniciais.categorias[3]} />
      <Carousel category={dadosIniciais.categorias[4]} />
      <Carousel category={dadosIniciais.categorias[5]} />

      <Footer/>

    </div>
  );
}

export default App;
