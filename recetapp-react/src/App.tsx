import { recetas } from './data/recetas'
import RecetaCard from './components/RecetaCard'
import './App.css'

function App() {
  console.log('Recetas:', recetas)

  return (
    <main>
      <section id="recetas">
        <h1>Recetas</h1>
        <div className="receta-grid">
          {recetas.map((receta) => (
            <RecetaCard key={receta.id} {...receta} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
