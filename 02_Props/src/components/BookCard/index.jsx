function BookCard({title, author, available, year, genre}) {
  return (
    <div>
        <p>"{title}" - {author} ({year}, {genre})</p>
        <p>{available ? "✅ Є в наявності" : "❌ Немає в наявності"}</p>
    </div>
  )
}

export default BookCard