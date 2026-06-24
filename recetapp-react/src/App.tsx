import { useState } from 'react'
import { recetas } from './data/recetas'
import ListaRecetas from './components/ListaRecetas'
import FiltroCategoria from './components/FiltroCategoria'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [searchTerm, setSearchTerm] = useState('')
  const normalizedSearchTerm = searchTerm.trim().slice(0, 50).toLowerCase()

  const filteredRecetas = recetas.filter((receta) => {
    const matchesCategory =
      selectedCategory === 'Todas' || receta.categoria === selectedCategory
    const matchesSearch = receta.nombre
      .toLowerCase()
      .includes(normalizedSearchTerm)

    return matchesCategory && matchesSearch
  })

  return (
    <main>
      <section id="recetas">
        <h1>Recetas</h1>
        <div className="recetas-filtros">
          <FiltroCategoria
            selectedCategory={selectedCategory}
            onChangeCategory={setSelectedCategory}
          />
          <input
            type="search"
            placeholder="Buscar por nombre"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value.slice(0, 50))}
          />
        </div>

        {filteredRecetas.length > 0 ? (
          <ListaRecetas recetas={filteredRecetas} />
        ) : (
          <p className="no-results">No hay recetas que coincidan</p>
        )}
      </section>
    </main>
  )
}

export default App
