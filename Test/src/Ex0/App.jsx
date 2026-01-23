import { useState } from 'react'
import '../App.css'
import Gallery from './Scientist'
import ListPeople from './Peoples'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>

        <Gallery />

        <ListPeople />

      </div>
    
    </>
    
  )
  
}




export default App


