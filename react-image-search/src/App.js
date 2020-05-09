import React from 'react'
import getImages from './api'

function App() {
  const [loading, setLoading] = React.useState(false)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [images, setImages] = React.useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setImages(await getImages(searchTerm))
    setLoading(false)
  }

  return (
    <div className="App">
      <h1>React Image Search</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search Term</label>
        <input
          className="u-full-width"
          type="text"
          id="searchTerm"
          name="searchTerm"
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          value={searchTerm}
        />
        <button type="submit">Search</button>
      </form>
      {loading && (
        <img id="loadingImage" src="https://i.imgur.com/LVHmLnb.gif" />
      )}
      <section className="images">
        {images.map((image) => (
          <img key={image} src={image} />
        ))}
      </section>
    </div>
  )
}

export default App
