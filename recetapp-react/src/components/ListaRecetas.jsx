import RecetaCard from './RecetaCard'

function ListaRecetas({ recetas }) {
  return (
    <div className="receta-grid">
      {recetas.map((receta) => (
        <RecetaCard key={receta.id} {...receta} />
      ))}
    </div>
  )
}

export default ListaRecetas
