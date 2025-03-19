import './App.css'

function App() {

  const bodyParts = [
    {id: 1, name: "Head", src: "./src/assets/manFront/head.png"},
    {id: 2, name: "Head", src: "./src/assets/manFront/neck.png"}
  ]

  return (
    <div><h1 className='text-5xl text-blue-400'>hello body anatomy</h1>
    <img src={bodyParts[0].src} alt="head" />
    </div>
  )
}

export default App
