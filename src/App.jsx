import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
 const data = {
  data1 :{
      cardName:"pickachu",
      description:"this is the discition of pickauchuasdasdsadasdsasadda the giant slaerlasdfjldsj",
  },
  data2 :{
    cardName:"raichu",
    description:"this is the discition of pickauchuasdasdsadasdsasadda the giant slaerlasdfjldsj",
},
data3 :{
  cardName:"Chalizard",
  description:"this is the discition of pickauchuasdasdsadasdsasadda the giant slaerlasdfjldsj",
}
 }

  return (
    <>
      <div className="card-container">
    <Card {...data.data1} /> 
    <Card {...data.data2}/> 
    <Card{...data.data3}/>   
      </div>
    </>
  )
}

export default App
