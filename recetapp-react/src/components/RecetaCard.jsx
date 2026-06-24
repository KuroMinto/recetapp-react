function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes, esVegetariana }) {
  const categoryClass = categoria.toLowerCase()

  return (
    <article className={`receta-card receta-${categoryClass} ${esVegetariana ? 'vegetariana' : ''}`}>
      <div className="receta-card-header">
        <span className="receta-category">{categoria}</span>
        {esVegetariana && <span className="receta-badge">VEG</span>}
        <h3>{nombre}</h3>
        <p className="receta-origen">Origen: {origen}</p>
      </div>

      <div className="receta-card-body">
        <p className="receta-desc">{descripcion}</p>
        <p className="receta-porciones">Porciones: {porciones}</p>
        <div>
          <p className="receta-ingredientes-title">Ingredientes:</p>
          <ul className="receta-ingredientes">
            {ingredientes.map((ingrediente) => (
              <li key={ingrediente}>{ingrediente}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default RecetaCard
