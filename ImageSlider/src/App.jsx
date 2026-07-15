import React from 'react'
import ImageSlider from './components/ImageSlider'

const App = () => {
  return (
    <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
  )
}

export default App