import React from 'react'
import {useState} from 'react'
import Input from './City.json'
import './App.css'
const App = () => {
  const [data,setData]=useState('')
  return (
    <>
    <div>
      <center>
        <h2>Enter the city</h2>
        <br/>
        <div className='fty'>
        <input type='text' placeholder='city' value={data} onChange={(e)=>setData(e.target.value)}/>
        </div>
        <br/>
        {Input.filter(city=>city.city.toLowerCase().includes(data)).map((city)=>{
         return( <div style={{"border":"1px solid black","padding":"10px","margin":"10px","maxWidth":"70%"}}>
             {city.city}
            
          </div>
         )
        })}
      </center>
     
    </div>
    </>
  )
}

export default App