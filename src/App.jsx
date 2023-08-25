
import './App.css'
import Cabecalho from './components/cabecalho'
import Rodape from './components/rodape'

function App() {


  function funcmeme() {

   fetch('https://opentdb.com/api.php?amount=30&category=18').then(eu=>{
      eu.json().then(dados=>{
          
  
          var btn = document.querySelector('#btn')
  
          btn.addEventListener('click',()=>{
            var quest= document.querySelector('#imgMeme')
            quest.innerHTML = dados[Math.floor(Math.random()*30)].question
            
            var legenda = document.querySelector('#legenda')
           legenda.innerHTML = `${dados.difficulty}`
          })
      })
  })
  }
  


  return (
    <>
      <Cabecalho />
      <div className="container">
          <section>
          <h1>Gerador de Questões!</h1>
          <div>
              <button onClick={funcmeme} id="btn">CLIQUE AQUI</button>
          </div>
          <div> 
            <div id='imgMeme'></div>
            <div id="legenda">Clique no botão para gerar uma questão e sua dificuldade</div>                   
          </div>
       </section>

       </div>
      <Rodape />
    </>
  )
}

export default App
