import { recetas } from './data/recetas'
import ListaRecetas from './components/ListaRecetas'
import './App.css'

function App() {
  console.log('Recetas:', recetas)

  return (
    <main>
      <section id="recetas">
        <h1>Recetas</h1>
        <ListaRecetas recetas={recetas} />
      </section>
    </main>
  )
}

export default App
