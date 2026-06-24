function FiltroCategoria({ selectedCategory, onChangeCategory }) {
  const categories = ['Todas', 'Entrada', 'Fondo', 'Postre']

  return (
    <div className="filtro-categoria">
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onChangeCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default FiltroCategoria
