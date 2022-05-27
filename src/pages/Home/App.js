import './styles.css'
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel";

function App() {
  return (
    <div className='Home'>

      <header>
        <h1>VANDAL</h1>
        <button>INÍCIO</button>
        <button>BIBLIOTECA</button>
        <button>AMIGOS</button>
        <button>VTELL</button><button className='cartButton'><i class="fa-solid fa-cart-shopping"/>CARRINHO</button>
        <div className='perfil'>
          <h2>Gabriel</h2>
          <img src='https://avatars.githubusercontent.com/u/39606678?v=4' alt='Foto de Perfil'/>
        </div>
      </header>

      <div className='filtersbar'>
        <button className='promobtn'>PROMOÇÕES</button>
        <div class="dropdown">
          <button class="dropbtn">GÊNEROS</button>
          <div class="dropdown-content">
            <a href="#">AÇÃO</a>
            <a href="#">AVENTURA</a>
            <a href="#">CASUAL</a>
            <a href="#">CORRIDA</a>
            <a href="#">ESPORTES</a>
            <a href="#">GRATUITO</a>
            <a href="#">INDIE</a>
            <a href="#">MULTIPLAYER</a>
            <a href="#">ROGUELIKE</a>
            <a href="#">RPG</a>
            <a href="#">SIMULAÇÃO</a>
            <a href="#">SOBREVIVÊNCIA</a>
            <a href="#">TIRO</a>
          </div>
        </div>
        <button className='wlbtn'>LISTA DE DESEJOS</button>
        <div className='searchbar'>
          <input placeholder='Digite aqui'></input>
          <button className='searchbtn'>BUSCAR</button>
        </div>
      </div>

      <div className='container-slide'>
        <Carousel>
          <CarouselItem><img src='https://pcbuildsonabudget.com/wp-content/uploads/2016/01/the-witcher-3-wild-hunt-banner.png' alt='Jogo 1'/></CarouselItem>
          <CarouselItem><img src='https://faru.files.wordpress.com/2018/01/celeste-capa.jpg' alt='Jogo 2'/></CarouselItem>
          <CarouselItem><img src='https://www.centar-tehnike.hr/upload/2021/03/bannerz_6058496cdba1a.jpg' alt='Jogo 3'/></CarouselItem>
          <CarouselItem><img src='https://images8.alphacoders.com/710/710329.jpg' alt='Jogo 4'/></CarouselItem>
          <CarouselItem><img src='https://waytoomany.games/wp-content/uploads/2018/04/Banner-1200x375.jpg' alt='Jogo 5'/></CarouselItem>
        </Carousel>
      </div>

    </div>
  );
}

export default App;
