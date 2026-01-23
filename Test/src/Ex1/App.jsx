import { useState } from 'react'
import '../App.css'
import Gallery from './Scientist'
import ListPeople from './peoples'
import ScientistsGallery from './ScientistsGallery'
import Form from './Form'
import ExampleComponent from './ExampleComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <ListPeople />

        <Gallery />

        <ScientistsGallery />

      </div>
      <div>
           <ExampleComponent />       
      </div>
      <br></br>
       <div>
           <Form />       
      </div>
    
    </>
    
  )
  
}




export default App

