import './styles.css'

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

      <div className='filters'>
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
        <input></input>
        <button>BUSCAR</button>
      </div>
    </div>
  );
}

export default App;