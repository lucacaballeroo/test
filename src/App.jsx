import './app.cs'
import { Btn } from './btn'


function App() {

  return (
    <>
    <nav className= 'menu'>
      <p><a href = '#s1'></a> primeiro</p>
      <p><a href = '#s1'></a> segundo</p>
      <p><a href = '#s1'></a> terceiro</p>
    </nav>
    <main>
      <section id='s1'>
      primeiro
      </section>
      <section id= 's2'>
      segundo
      <Btn text='voltar'/>
      </section>
      <section id= 's3'> 
      terceira

      </section>
    </main>
  </>
     


  )
}

export default App
